const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/drinks.route"));

app.get("/", (req, res) => {
  res.json("LOOOREEEM");
});

mongoose.connect(
  "mongodb+srv://raininsnovv:Nukaktebeskazat_1@cluster0.muvlnn7.mongodb.net/drill-mongoose-coffee-server",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Успешное соединение с MongoDB");

    app.listen(3050, () => {
      console.log("started");
    });
  }
);
