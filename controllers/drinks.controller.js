const Drink = require("../models/Drink.model");

module.exports.drinksController = {
  getAllDrinks: async (req, res) => {
    try {
      const data = await Drink.find({}, { name: 1, price: 1 });
      res.json(data);
    } catch (e) {
      res.json(e.message);
    }
  },

  addDrink: async (req, res) => {
    const { name, price, inStock, withCaffeine, size, description } = req.body;
    try {
      const drink = await Drink.create({
        name,
        price,
        inStock,
        withCaffeine,
        size,
        description,
      });
      res.json(`DRINK ADDED: ${drink}`);
    } catch (e) {
      res.json(e.message);
    }
  },
  deleteDrink: async (req, res) => {
    try {
      await Drink.findByIdAndDelete(req.params.id);
      res.json("Drink deleted");
    } catch (e) {
      res.json(e.message);
    }
  },
  updateDrink: async (req, res) => {
    const { name, price, inStock, withCaffeine, size, description } = req.body;
    try {
      const data = await Drink.updateOne({
        name,
        price,
        inStock,
        withCaffeine,
        size,
        description,
      });
      res.json(data);
    } catch (e) {
      res.json(e.message);
    }
  },
  whatInStock: async (req, res) => {
    try {
      const data = await Drink.find({ inStock: true });
      res.json(data);
    } catch (e) {
      res.json(e.message);
    }
  },
  getInfoById: async (req, res) => {
    try {
      const data = await Drink.findById(req.params.id);
      res.json(data);
    } catch (e) {
      res.json(e.message);
    }
  },
};
