import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import AuthRouter from "./Routes/Auth_Router.js";
import ProductRouter from "./Routes/Products_Router.js";
import CartRouter from "./Routes/Cart_Routes.js";
import OrderRoute from "./Routes/Order_Routes.js";

const app = express();

app.use(bodyparser.json({limit: "30mb", extended: true}));
app.use(bodyparser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);
app.use("/cart", CartRouter);
app.use("/orders", OrderRoute);


dotenv.config({path: "./.env"});

const ATLAS = process.env.ATLAS;
const PORT = process.env.PORT || 5000;

mongoose.connect(ATLAS, { useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, ()=> console.log(`Server is running at Port :${PORT}`)))
    .catch((err) => console.log(`${err} did not connected`));

    
mongoose.set("useFindAndModify", false);