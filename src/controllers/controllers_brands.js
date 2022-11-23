const brands = {};
const model = require("../models/models_brands");
const respone = require("../helpers/respone");

brands.getAll = async (req, res) => {
  try {
    const result = await model.GetAll();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

brands.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      name: object.name,
      url: object.url,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

brands.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      url: object.url,
      name: object.name,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

brands.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_file);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = brands;
