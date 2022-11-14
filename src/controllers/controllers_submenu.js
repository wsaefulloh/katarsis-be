const submenu = {};
const model = require("../models/models_submenu");
const respone = require("../helpers/respone");

submenu.getAll = async (req, res) => {
  try {
    const result = await model.GetAll();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

submenu.getByIDMenu = async (req, res) => {
  try {
    let menu;
    if (req.params.id_menu == 1) {
      menu = "Original IP";
    } else {
      menu = "Business to Business (B2B)";
    }
    const result = await model.GetbyMenu(menu);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

submenu.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      name_menu: object.name_menu,
      name_submenu: object.name_submenu,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

submenu.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      name_menu: object.name_menu,
      name_submenu: object.name_submenu,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

submenu.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_submenu);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = submenu;
