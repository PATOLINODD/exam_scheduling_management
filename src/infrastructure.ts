import express from "express";
import { routers } from "./application";

const app = express();

app.use(express.json());

routers(app);

export default app;
