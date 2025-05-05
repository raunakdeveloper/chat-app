import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import http from "http"; // to create HTTP server

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth-route.js";
import messageRoutes from "./routes/message-route.js";
import { io } from "./lib/socket.js"; // Import io

dotenv.config();

const app = express();
const server = http.createServer(app); // Wrap express app in HTTP server

const PORT = process.env.PORT;
const __dirname = path.resolve();

// Attach io to server
io.attach(server);

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

//Production: Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server is running on PORT:" + PORT);
  connectDB();
});
