import express, { Request, Response } from "express";
import "dotenv/config";
import cors, { CorsOptions } from "cors";
import { toNodeHandler } from "better-auth/node";

import { auth } from "./lib/auth.js";
import userRouter from "./routes/userRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import { stripeWebhook } from "./controller/stripeWebhook.js";

const app = express();

const port = 3000;

const corsOption: CorsOptions = {
    origin: process.env.TRUSTED_ORIGINS?.split(",") || [],
    credentials: true,
};

app.use(cors(corsOption));
app.post(
    "/api/stripe",
    express.raw({ type: "application/json" }),
    stripeWebhook
);

app.all("/api/auth/{*any}", toNodeHandler(auth));

app.use(express.json({ limit: "50mb" }));

app.get("/", (req: Request, res: Response) => {
    res.send("Server is Live!");
});

app.use("/api/user", userRouter);
app.use("/api/project", projectRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
