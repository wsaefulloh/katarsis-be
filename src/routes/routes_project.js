const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_project");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/all-original-ip", ctrl.getAllOriginalIP);
routing.get("/all-original-ip-experiences", ctrl.getAllOriginalIP_Experiences);
routing.get("/all-original-ip-content", ctrl.getAllOriginalIP_Content);
routing.get("/all-b2b", ctrl.getAllB2B);
routing.get("/all-b2b-ceremony-events", ctrl.getAllB2B_CeremonyEvents);
routing.get(
  "/all-b2b-marketing-sponsorship",
  ctrl.getAllB2B_MarketingSponsorship
);
routing.get("/detail/:id_project", ctrl.getbyID);

//UPDATE --> PUT
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_project", ctrl.removeData);

module.exports = routing;
