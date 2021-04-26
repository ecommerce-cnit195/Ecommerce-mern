const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const passport = require("passport")
const mongoose = require('mongoose');
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const session = require('express-session')
const bodyParser = require('body-parser');
const cors = require('cors');
const mogan = require('morgan');

app.use(express.static('public'));
app.use(cors());
app.options('*', cors());

require('dotenv').config();

passport.initialize()
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(mogan('tiny'));

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

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
const userRouter = require("./routes/userRoutes");
app.use("/", userRouter)

const productsRouter = require("./routes/productsRoutes");
app.use("/product", productsRouter)

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});