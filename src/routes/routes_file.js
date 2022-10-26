const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_file");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/get/:id_project", ctrl.getByIDProject);

//UPDATE --> UPDATE
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_project", ctrl.removeData);

module.exports = routing;
