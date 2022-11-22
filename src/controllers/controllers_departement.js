const departement = {};
const model = require("../models/models_departement");
const respone = require("../helpers/respone");

departement.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      title_departement: object.title_departement,
      description_departement: object.description_departement,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

departement.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_departement);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

departement.getByIDDepartement = async (req, res) => {
  try {
    const result = await model.GetDetail(req.params.id_departement);
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

departement.getAll = async (req, res) => {
  try {
    const result = await model.GetAll();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

departement.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      title_departement: object.title_departement,
      description_departement: object.description_departement,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = departement;
