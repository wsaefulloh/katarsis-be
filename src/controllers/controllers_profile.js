const profile = {};
const model = require("../models/models_profile");
const respone = require("../helpers/respone");

profile.getAll = async (req, res) => {
  try {
    const result = await model.GetAll();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

profile.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      name: object.name,
      url_image: object.url_image,
      url_linkedin: object.url_linkedin,
      position: object.position,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

profile.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      name: object.name,
      url_image: object.url_image,
      url_linkedin: object.url_linkedin,
      position: object.position,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

profile.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_profile);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = profile;
