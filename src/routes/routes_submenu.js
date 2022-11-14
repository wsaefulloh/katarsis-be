const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_submenu");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/get-all", ctrl.getAll);
routing.get("/get-id/:id_menu", ctrl.getByIDMenu);

//UPDATE --> PUT
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_submenu", ctrl.removeData);

module.exports = routing;
