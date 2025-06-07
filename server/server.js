import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhook from "./controllers/clerkWebhooks.js";

connectDB();

const app = express();
app.use(cors());

//Middleware
app.use(express.json());
// Clerk Middleware
app.use(clerkMiddleware());

//API to list to clerk webhooks
app.use("/api/clerk",clerkWebhook)

app.get("/", (req, res) => {
  res.send("Api is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
