import express from "express";

const app = express();
const PORT = parseInt(process.env.PORT || "4000", 10);

app.get("/", (_req, res) => {
	res.send("HTTPS backend is running");
});

app.listen(PORT, () => {
	console.log(`HTTPS backend listening on http://localhost:${PORT}`);
});