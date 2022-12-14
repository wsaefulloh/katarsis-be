const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_brands");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/all", ctrl.getAll);

//READ --> GET
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_file", ctrl.removeData);

module.exports = routing;
