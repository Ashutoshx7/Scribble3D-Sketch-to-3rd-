import express from "express"
import {JWT_SECRET }  from "./config"
import jwt from 'jsonwebtoken';
import {middleware} from "./middleware"
import {CreateUerSchema,createRoomSchema,SiginSchema}  from "./types";
import  { prismaClient } from  "@repo/db/client";
const app = express();
app.use(express.json())
const PORT = parseInt(process.env.PORT || "4000", 10);


app.post("/signup", async (req, res) => {
	try {
		const parsedata = CreateUerSchema.safeParse(req.body);
		if (!parsedata.success) {
			res.json({
				message: "incorrect inputs"
			})
			return;
		}
		const user = await prismaClient.user.create({
			data: {
				email: parsedata.data?.username,
				password: parsedata.data.password,
				name: parsedata.data.name
			}
		})
		res.json({
			userId: "123"
		})
	} catch (e) {
		res.status(411).json({
			message: "user already exist with this usename"
		})
	}
})

app.post("/signin", async (req,res)=>{

	const data=SiginSchema.safeParse(req.body);
	if(!data.success) {
		 res.json({
			message:"incorrect inputs"
		})
		return;
	}
	const userId=1;

	const token=jwt.sign({
		userId
	},JWT_SECRET);

	res.json({token})

})

app.listen(PORT, () => {
	console.log(`HTTPS Backend listening on port ${PORT}`)
})





app.post("/room",middleware,(req,res)=>{
	const data=createRoomSchema.safeParse(req.body);
	if(!data.success) {
		 res.json({
			message:"incorrect inputs"
		})
		return;
	}

	//db call
	res.json({
		roomId:123
	})



})
app.listen(PORT, () => {
	console.log(`HTTPS backend listening on http://localhost:${PORT}`);
});