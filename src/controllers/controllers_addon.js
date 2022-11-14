const addon = {};
const model = require("../models/models_addon");
const respone = require("../helpers/respone");

addon.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      type: object.type,
      title: object.title,
      url_images: object.url_images,
      description: object.description,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

addon.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      type: object.type,
      title: object.title,
      url_images: object.url_images,
      description: object.description,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

addon.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_file);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

addon.getHowWeDoIt = async (req, res) => {
  try {
    const result = await model.GetHowWeDoIt();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

addon.getAllProcess = async (req, res) => {
  try {
    const result = await model.GetAllProcess();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

addon.getOurTeam = async (req, res) => {
  try {
    const result = await model.GetOurTeam();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

addon.getB2B = async (req, res) => {
  try {
    const result = await model.GetB2B();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

addon.getOriginalIP = async (req, res) => {
  try {
    const result = await model.GetOriginalIP();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

addon.getVisi = async (req, res) => {
  try {
    const result = await model.GetVisi();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

addon.getMission = async (req, res) => {
  try {
    const result = await model.GetMission();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

addon.getOurTeam = async (req, res) => {
  try {
    const result = await model.GetOurTeam();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

addon.getWorkflow = async (req, res) => {
  try {
    const result = await model.GetWorkflow();
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

module.exports = addon;
