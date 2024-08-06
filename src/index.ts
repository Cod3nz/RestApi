import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

const app = express();

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017";

const server = http.createServer(app);


app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/", router());

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

server.listen(8080, () => {
    console.log("Server running on http://localhost:8080/");
});

// Stuur een request met postman naar http://localhost:8080/auth/register , vul de body in, en creeer een gebruiker die wordt opgeslaan in de databank