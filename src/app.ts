import express, { Request, Response } from "express";
import database from "./config/database";
import dotenv from "dotenv";
import userRouter from './routes/user.routes';
dotenv.config();
import config from "config";

const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/api/users', userRouter);

database.initialize()
    .then(() => console.log('Database connected'))
    .catch(console.error)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
});