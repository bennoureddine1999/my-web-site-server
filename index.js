const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
require("dotenv").config();

app.use(fileUpload());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.json());
app.use(cors());
const userRouter = require("./api/controllers/users/router");
const hotelRouter = require("./api/controllers/hotels/router");
const A_F_R_M_Router = require("./api/controllers/appartement for_rent_M/router");
const A_F_R_D_Router = require("./api/controllers/appartement_for_rent D/router");
const A_F_S_Router = require("./api/controllers/appartement_for_sale/router");

const { all } = require("./api/controllers/users/router");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://Nounou19:benaoumeur1999@cluster0-shard-00-00.mzmb0.mongodb.net:27017,cluster0-shard-00-01.mzmb0.mongodb.net:27017,cluster0-shard-00-02.mzmb0.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-crs3mt-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;
db.once("open", () => {
  console.log("Database connected");
});

app.use("/users", userRouter);
app.use("/hotels", hotelRouter);
app.use("/AppartementForRent_M", A_F_R_M_Router);
app.use("/AppartementForRent_D", A_F_R_D_Router);
app.use("/AppartementforSale", A_F_S_Router);

app.all("*", (req, res) => {
  res.status(404).send({
    message: "not found",
  });
});
app.listen(7000, () => {
  console.log("listen on http://localhost:7000");
});
