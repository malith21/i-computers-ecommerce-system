import express from "express";
import mongoose from "mongoose";

import studentRouter from "./routers/studentRouter.js";
import userRouter from "./routers/userRouter.js";
import authenticateUser from "./middlewares/authentication.js";
import productRouter from "./routers/productRouter.js";

const app = express();

mongoose.connect("mongodb://localhost:27017/icomputers")
.then(() => {
    console.log("✅ MongoDB Connected");
})
.catch((err) => {
    console.log("❌ MongoDB Error:", err.message);
});

app.use(express.json());

app.use(authenticateUser);

app.use("/students", studentRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
    console.log("🚀 Server is running on port 3000");
});