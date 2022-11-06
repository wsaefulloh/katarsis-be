const project = {};
const model = require("../models/models_submenu");
const respone = require("../helpers/respone");

project.getAll = async (req, res) => {
  try {
    const result = await model.GetAll();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

project.getAllB2B = async (req, res) => {
  try {
    const result = await model.GetAllB2B();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

project.getAllOriginalIP = async (req, res) => {
  try {
    const result = await model.GetAllOriginalIP();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

project.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      name_submenu: object.name_submenu,
      name_menu: object.name_menu,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

project.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      name_submenu: object.name_submenu,
      name_menu: object.name_menu,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

project.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_project);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = project;
