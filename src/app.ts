import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import customerRoutes from "./routes/customer.routes";
import userRoutes from "./routes/user.routes";

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/users", userRoutes);

export default app;
