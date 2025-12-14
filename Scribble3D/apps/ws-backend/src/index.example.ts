import { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import type { JwtPayload } from "jsonwebtoken";
import net from "net";
import { prisma } from "@repo/db";

async function findAvailablePort(startPort: number, maxPort = startPort + 50): Promise<number> {
    let port = startPort;
    while (port <= maxPort) {
        try {
            await new Promise<void>((resolve, reject) => {
                const tester = net.createServer()
                    .once("error", (err: any) => {
                        tester.close();
                        reject(err);
                    })
                    .once("listening", () => {
                        tester.once("close", resolve);
                        tester.close();
                    })
                    .listen(port, "::");
            });
            return port;
        } catch (err: any) {
            if (err && err.code === "EADDRINUSE") {
                port += 1;
                continue;
            }
            port += 1;
        }
    }
    throw new Error("No available ports found");
}

async function start() {
    const envPort = parseInt(process.env.WS_PORT || "", 10);
    const basePort = Number.isFinite(envPort) && envPort > 0 ? envPort : 8080;
    const port = await findAvailablePort(basePort);

    const wss = new WebSocketServer({ port });
    console.log(`WebSocket server listening on port ${port}`);

    wss.on("connection", async function connection(ws, request) {
        const url = request.url;
        if (!url) {
            return;
        }
        const queryParams = new URLSearchParams(url.split("?")[1]);
        const token = queryParams.get("token") || "";

        try {
            const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
            const userId = decoded.userId;

            // Verify user exists in database
            const user = await prisma.user.findUnique({
                where: { id: userId }
            });

            if (!user) {
                ws.close(1008, "User not found");
                return;
            }

            ws.on("message", async function message(data) {
                const payload = JSON.parse(data.toString());
                
                // Example: Save chat message
                if (payload.type === "chat") {
                    await prisma.chat.create({
                        data: {
                            message: payload.message,
                            userId: userId,
                            roomId: payload.roomId
                        }
                    });
                }

                // Broadcast to all clients in the room
                wss.clients.forEach(function each(client) {
                    if (client.readyState === ws.OPEN) {
                        client.send(JSON.stringify(payload));
                    }
                });
            });

            ws.send(JSON.stringify({ type: "connected", userId }));
        } catch (error) {
            ws.close(1008, "Invalid token");
        }
    });
}

start();
