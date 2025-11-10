import express from "express"
import {JWT_SECRET }  from "./config"
import jwt from 'jsonwebtoken';
import {middleware} from "./middleware"

const app = express();
const PORT = parseInt(process.env.PORT || "4000", 10);

app.post("signin",(req,res)=>{
	const userId=1;

	const token=jwt.sign({
		userId
	},JWT_SECRET);

	res.json({token})

})



app.post("/signup",(req,res) =>{

	res.json({userId:"123"})


})


app.post("/room",middleware,(req,res)=>{

	//db call
	res.json({
		roomId:123
	})



})
app.listen(PORT, () => {
	console.log(`HTTPS backend listening on http://localhost:${PORT}`);
});