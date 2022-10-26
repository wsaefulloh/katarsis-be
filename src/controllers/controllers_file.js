const files = {};
const model = require("../models/models_file");
const respone = require("../helpers/respone");

files.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id_project: object.id_project,
      title: object.title,
      place: object.place,
      name_project: object.name_project,
      url: object.url,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

files.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_file);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

files.getByIDProject = async (req, res) => {
  try {
    const result = await model.GetFileByIdProject(req.params.id_project);
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

files.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      title: object.title,
      place: object.place,
      name_project: object.name_project,
      url: object.url,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = files;
