import { configDotenv } from "dotenv";
import express from "express";
import Connection from "./src/lib/db.js";
import noteRoutes from "./src/routes/note.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
configDotenv();

app.use("/api/noteRoutes", noteRoutes);

app.listen(process.env.PORT, () => {
  Connection();
  console.log(`Server is Running at ${process.env.PORT}..`);
});
