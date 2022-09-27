import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
const PORT = process.env.PORT || 5000 ;
mongoose
  .connect(
    "mongodb+srv://newnikita:nikita@cluster0.eyn9259.mongodb.net/?retryWrites=true&w=majority"
  )
 
  .then(() => app.listen(PORT))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
