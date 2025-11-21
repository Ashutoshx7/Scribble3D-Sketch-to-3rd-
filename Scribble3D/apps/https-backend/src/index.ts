import express from "express"
import {JWT_SECRET }  from "./config"
import jwt from 'jsonwebtoken';
import {middleware} from "./middleware"
import {CreateUerSchema,createRoomSchema,SiginSchema}  from "./types";

const app = express();
const PORT = parseInt(process.env.PORT || "4000", 10);


app.post("/signup",(req,res)=>{
	const data=CreateUerSchema.safeParse(req.body);
	if(!data.success) {
		 res.json({
			message:"incorrect inputs"
		})
		return;
	}
})

app.post("signin",(req,res)=>{

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