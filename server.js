import express from 'express';
import mongoose from 'mongoose';
import Data from './data.js';
import Videos from './dbModel.js'

// app config
const app = express();
const port = 10000;

// middlwares
app.use(express.json())
app.use((req , res , next) => {
	// This Means Agree For All Of Access that it come
	res.setHeaders("Access-Control-Allow-Origin" , "*"),
	res.setHeaders("Access-Control-Allow-Headers" , "*"),
	next();
});

// DB Config
// password => rtePCJVXNbLr7YmM
// username => admin
const connec_Url = "mongodb+srv://admin:rtePCJVXNbLr7YmM@cluster0.zbbzm.mongodb.net/tiktokdb?retryWrites=true&w=majority"
mongoose.connect(connec_Url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology:true,
})

// api endpoint
app.get("/" , (req , res) => res.status(200).send("Hello Mohmad From Node JS"));

app.get("/v1/posts" , (req , res) => res.status(200).send(Data));

app.get("/v2/posts" , (req , res) => {

	Videos.find((err , data) => {
		if (err) {
			res.status(500).send(err)

		}else{
			res.status(200).send(data)
		}
	})
});

app.post("/v2/posts" , (req , res) => {
	const dbVideos = req.body;

	Videos.create(dbVideos , (err , data) => {
		if (err) {
			res.status(500).send(err)

		}else{
			res.status(201).send(data)
		}
	})
});

// listener
app.listen(port , console.log(`Hello The Port From NodeJS Is: ${port}`))