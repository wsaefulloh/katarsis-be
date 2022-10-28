const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_addon");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/all-process", ctrl.getAllProcess);
routing.get("/how-we-do-it", ctrl.getHowWeDoIt);
routing.get("/our-team", ctrl.getOurTeam);
routing.get("/workflow", ctrl.getWorkflow);

//UPDATE --> PUT
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_file", ctrl.removeData);

module.exports = routing;
