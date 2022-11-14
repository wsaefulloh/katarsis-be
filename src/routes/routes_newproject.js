const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_newproject");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/get-next-previous", ctrl.getNextandPrevByIDProject);
routing.get("/get-all", ctrl.getAll);
routing.get("/get-by-menu/:id_menu", ctrl.getByIDMenu);
routing.get("/get-by-project/:id_project", ctrl.getByIDProject);
routing.get("/get-by-submenu/:id_submenu", ctrl.getByIDSubMenu);

//UPDATE --> PUT
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_project", ctrl.removeData);

module.exports = routing;
