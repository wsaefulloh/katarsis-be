const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_departement");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/get-all", ctrl.getAll);
routing.get("/get-detail/:id_departement", ctrl.getByIDDepartement);

//UPDATE --> PUT
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_departement", ctrl.removeData);

module.exports = routing;
