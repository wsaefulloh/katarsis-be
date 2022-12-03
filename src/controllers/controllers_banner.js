const banner = {};
const model = require("../models/models_banner");
const respone = require("../helpers/respone");

banner.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      title_banner: object.title_banner,
      date_banner: object.date_banner,
      url_image: object.url_image,
      url: object.url,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

banner.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_banner);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

banner.getAll = async (req, res) => {
  try {
    const result = await model.GetAll();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

banner.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      title_banner: object.title_banner,
      date_banner: object.date_banner,
      url_image: object.url_image,
      url: object.url,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = banner;
