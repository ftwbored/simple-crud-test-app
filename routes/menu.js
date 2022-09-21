var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var schemas = require("../models/schemas.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/new", async (req, res) => {
  let menuName = req.body.menuName;
  let menuIcon = req.body.menuIcon;
  let menuUrl = req.body.menuUrl;
  let menu = schemas.menu;

  let query = { name: menuName };

  let searchResults = await menu.findOne(query).then(async (userData) => {
    if (!userData) {
      let newMenu = new schemas.menu({
        name: menuName,
        icon: menuIcon,
        menuUrl: menuUrl,
      });
      let saveMenu = await newMenu.save();
    }
  });

  res.redirect("/");
});

module.exports = router;
