const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_profile");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/all", ctrl.getAll);

//UPDATE --> PUT
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_profile", ctrl.removeData);

module.exports = routing;
