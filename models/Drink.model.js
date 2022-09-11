const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema(
  {
    name: String,
    price: Number,
    inStock: Boolean,
    withCaffeine: Boolean,
    size: String,
    description: String,
  },
  { timestamps: true }
);

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
