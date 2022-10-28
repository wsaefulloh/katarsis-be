const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_links");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/linkedin", ctrl.getLinkedin);
routing.get("/instagram", ctrl.getInstagram);
routing.get("/whatsapp", ctrl.getWhatsapp);
routing.get("/tiktok", ctrl.getTiktok);
routing.get("/number", ctrl.getNumber);
routing.get("/links", ctrl.getAllLinks);
routing.get("/info", ctrl.getInfo);
routing.get("/marketing", ctrl.getMarketing);
routing.get("/partnership", ctrl.getPartnership);
routing.get("/career", ctrl.getCareer);

//UPDATE --> PUT
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_file", ctrl.removeData);

module.exports = routing;
