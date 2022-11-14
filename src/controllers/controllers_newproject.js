const new_project = {};
const model = require("../models/models_newproject");
const respone = require("../helpers/respone");

new_project.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id_submenu: object.id_submenu,
      name_menu: object.name_menu,
      title_project: object.title_project,
      child_title: object.child_title,
      year_project: object.year_project,
      place_project: object.place_project,
      short_desc: object.short_desc,
      about: object.about,
      metrics_one_title: object.metrics_one_title,
      metrics_one_desc: object.metrics_one_desc,
      metrics_two_title: object.metrics_two_title,
      metrics_two_desc: object.metrics_two_desc,
      desc_result: object.desc_result,
      url_image_cover: object.url_image_cover,
      url_website: object.url_website,
      url_video: object.url_video,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

new_project.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_project);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

new_project.getByIDProject = async (req, res) => {
  try {
    const result = await model.GetProjectbyID(req.params.id_project);
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

new_project.getNextandPrevByIDProject = async (req, res) => {
  try {
    const result = await model.GetNextandPrevProjectbyID(
      req.query.id_project,
      req.query.submenu
    );
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

new_project.getAll = async (req, res) => {
  try {
    const result = await model.GetAllProject();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

new_project.getByIDMenu = async (req, res) => {
  try {
    let menu;
    if (req.params.id_menu == 1) {
      menu = "Original IP";
    } else {
      menu = "Business to Business (B2B)";
    }
    const result = await model.GetProjectbyMenu(menu);
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

new_project.getByIDSubMenu = async (req, res) => {
  try {
    const result = await model.GetProjectbySubMenu(req.params.id_submenu);
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

new_project.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      id_submenu: object.id_submenu,
      name_menu: object.name_menu,
      title_project: object.title_project,
      child_title: object.child_title,
      year_project: object.year_project,
      place_project: object.place_project,
      short_desc: object.short_desc,
      about: object.about,
      metrics_one_title: object.metrics_one_title,
      metrics_one_desc: object.metrics_one_desc,
      metrics_two_title: object.metrics_two_title,
      metrics_two_desc: object.metrics_two_desc,
      desc_result: object.desc_result,
      url_image_cover: object.url_image_cover,
      url_website: object.url_website,
      url_video: object.url_video,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = new_project;
