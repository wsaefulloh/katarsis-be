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
routing.get("/visi", ctrl.getVisi);
routing.get("/misi", ctrl.getMission);
routing.get("/original-ip", ctrl.getOriginalIP);
routing.get("/b2b", ctrl.getB2B);

//UPDATE --> PUT
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_file", ctrl.removeData);

module.exports = routing;
