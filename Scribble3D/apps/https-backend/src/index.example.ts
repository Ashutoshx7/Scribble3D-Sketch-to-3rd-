import express from "express"
import { JWT_SECRET } from "./config"
import jwt from 'jsonwebtoken';
import { middleware } from "./middleware"
import { CreateUerSchema, createRoomSchema, SiginSchema } from "./types";
import { prisma } from "@repo/db";

const app = express();
const PORT = parseInt(process.env.PORT || "4000", 10);

app.use(express.json());

app.post("/signup", async (req, res) => {
	const data = CreateUerSchema.safeParse(req.body);
	if (!data.success) {
		res.json({
			message: "incorrect inputs"
		})
		return;
	}

	try {
		const user = await prisma.user.create({
			data: {
				email: data.data.email,
				password: data.data.password,
				name: data.data.name,
				photo: data.data.photo || ""
			}
		});

		res.json({
			message: "User created successfully",
			userId: user.id
		});
	} catch (error) {
		res.status(500).json({
			message: "Error creating user"
		});
	}
})

app.post("/signin", async (req, res) => {
	const data = SiginSchema.safeParse(req.body);
	if (!data.success) {
		res.json({
			message: "incorrect inputs"
		})
		return;
	}

	try {
		const user = await prisma.user.findFirst({
			where: {
				email: data.data.email,
				password: data.data.password
			}
		});

		if (!user) {
			res.status(401).json({
				message: "Invalid credentials"
			});
			return;
		}

		const token = jwt.sign({
			userId: user.id
		}, JWT_SECRET);

		res.json({ token })
	} catch (error) {
		res.status(500).json({
			message: "Error signing in"
		});
	}
})

app.post("/room", middleware, async (req, res) => {
	const data = createRoomSchema.safeParse(req.body);
	if (!data.success) {
		res.json({
			message: "incorrect inputs"
		})
		return;
	}

	try {
		const room = await prisma.room.create({
			data: {
				slug: data.data.slug,
				adminId: req.userId! // from middleware
			}
		});

		res.json({
			roomId: room.id,
			slug: room.slug
		});
	} catch (error) {
		res.status(500).json({
			message: "Error creating room"
		});
	}
})

app.listen(PORT, () => {
	console.log(`HTTPS backend listening on port ${PORT}`);
});
