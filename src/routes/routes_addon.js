const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_addon");
const upload = require("../middleware/upload");
const deleteFile = require("../middleware/delete");
const respone = require("../helpers/respone");

//CREATE --> POST
routing.post("/add", ctrl.addData);
routing.post("/add-file", deleteFile(), upload.single("video"), (req, res) => {
  return respone(res, 200, "OK");
});

//READ --> GET
routing.get("/all-process", ctrl.getAllProcess);
routing.get("/status-career", ctrl.getStatusCareer);
routing.get("/how-we-do-it", ctrl.getHowWeDoIt);
routing.get("/our-team", ctrl.getOurTeam);
routing.get("/workflow", ctrl.getWorkflow);
routing.get("/process-workflow", ctrl.getProcessWorkflow);
routing.get("/visi", ctrl.getVisi);
routing.get("/misi", ctrl.getMission);
routing.get("/original-ip", ctrl.getOriginalIP);
routing.get("/b2b", ctrl.getB2B);

//UPDATE --> PUT
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_file", ctrl.removeData);

module.exports = routing;
