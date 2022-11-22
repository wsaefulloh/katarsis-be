const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_job");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/get/:id_departement", ctrl.getByIDDepartement);

//UPDATE --> UPDATE
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_job", ctrl.removeData);

module.exports = routing;
