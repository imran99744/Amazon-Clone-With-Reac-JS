const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "pk_test_51IE9m0A6cMeHh9dt39bOpOlyNSh2xrw5GN8JfKE1TUhFTlqr33r3A4a1ewlI99VpguTYknBvknSyAfLamnEWJKJ300oM6eoMkG"
);

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get("/", (req, res) => res.send(200).send("Hello developers"));

// Listen command
app.listen(5000, () => {
  console.log(`server is running now`);
});
