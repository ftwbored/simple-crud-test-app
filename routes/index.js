var express = require("express");
var router = express.Router();
var schemas = require("../models/schemas.js");

/* GET home page. */
router.get("/", async (req, res) => {
  let menu = schemas.menu;

  let menuResult = await menu.find({}).then((menuData) => {
    res.render("index", { title: "Menu App", data: menuData });
  });
});

module.exports = router;
