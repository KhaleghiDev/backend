import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import ProdactRoute from "./routes/ProdactRoute.js";

const app=express()

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(ProdactRoute());

app.listen(5080,()=>console.log("server is runing ..."));