const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_banner");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/get-all", ctrl.getAll);

//UPDATE --> PUT
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_banner", ctrl.removeData);

module.exports = routing;
