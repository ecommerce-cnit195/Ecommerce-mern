const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');

app.use(express.json());



const MONGO_URL =
    process.env.MONGODB_URL || "mongodb://localhost/ecommerce_mern_ccsf"

mongoose.connect(
    MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("connect to DB");
    }
);

const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes)


app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});