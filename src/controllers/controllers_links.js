const links = {};
const model = require("../models/models_links");
const respone = require("../helpers/respone");

links.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      type: object.type,
      title: object.title,
      url: object.url,
      url_images: object.url_images,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

links.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      type: object.type,
      title: object.title,
      url: object.url,
      url_images: object.url_images,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

links.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_file);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

links.getLinkedin = async (req, res) => {
  try {
    const result = await model.GetLinkedin();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

links.getNumber = async (req, res) => {
  try {
    const result = await model.GetNumber();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

links.getInstagram = async (req, res) => {
  try {
    const result = await model.GetInstagram();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

links.getTiktok = async (req, res) => {
  try {
    const result = await model.GetTiktok();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

links.getWhatsapp = async (req, res) => {
  try {
    const result = await model.GetWhatsapp();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

links.getAllLinks = async (req, res) => {
  try {
    const result = await model.GetAllLinks();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

links.getInfo = async (req, res) => {
  try {
    const result = await model.GetInfo();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

links.getMarketing = async (req, res) => {
  try {
    const result = await model.GetMarketing();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

links.getPartnership = async (req, res) => {
  try {
    const result = await model.GetPartnership();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

links.getCareer = async (req, res) => {
  try {
    const result = await model.GetCareer();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

module.exports = links;
