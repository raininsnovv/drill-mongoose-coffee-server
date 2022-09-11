// const Router = require('express').Router
const { Router } = require("express");
const { drinksController } = require("../controllers/drinks.controller");

const router = Router();

router.get("/drinks", drinksController.getAllDrinks); //все напитки

router.post("/drinks", drinksController.addDrink); //добавить напиток

router.delete("/drinks/:id", drinksController.deleteDrink); //удалить напиток

router.patch("/drinks/:id", drinksController.updateDrink);

router.get("/drinks/in-stock", drinksController.whatInStock);
router.get("/drinks/:id", drinksController.getInfoById);
module.exports = router;
