const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MHzr0SAd63srqsxuZ8s4IoRkxKE39ba500aMc9Kby5q9nnvwWj82kedgY54vc2MuQRX4Pjm21CbdonNZvaYst0O00Jnp6fbqW"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("hello world");
});
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment req received: ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  console.log("total:", total, "paymentIntent: ", paymentIntent);
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
