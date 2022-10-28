const users = {};
const model = require("../models/models_user");
const respone = require("../helpers/respone");

users.getAll = async (req, res) => {
  try {
    const result = await model.GetAll();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

users.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      username: object.username,
      password: object.password,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

users.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      username: object.username,
      password: object.password,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

users.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_file);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

users.getAuth = async (req, res) => {
  try {
    const result = await model.GetAuth(req.params.id_user);
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

module.exports = users;
