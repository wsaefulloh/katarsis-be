const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_user");

//CREATE --> POST
routing.post("/add", ctrl.addData);

//READ --> GET
routing.get("/all", ctrl.getAll);
routing.get("/get/:id_user", ctrl.getAuth);

//UPDATE --> PUT
routing.put("/update", ctrl.updateData);

//DELETE --> DELETE
routing.delete("/del/:id_file", ctrl.removeData);

module.exports = routing;
