const project = {};
const model = require("../models/models_project");
const respone = require("../helpers/respone");

project.getAllOriginalIP = async (req, res) => {
  try {
    const result = await model.GetAllOriginalIP();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

project.getAllB2B = async (req, res) => {
  try {
    const result = await model.GetAllB2B();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

project.getAllOriginalIP_Content = async (req, res) => {
  try {
    const result = await model.GetAllOriginalIP_Content();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

project.getAllOriginalIP_Experiences = async (req, res) => {
  try {
    const result = await model.GetAllOriginalIP_Experiences();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

project.getAllB2B_CeremonyEvents = async (req, res) => {
  try {
    const result = await model.GetAllB2B_CeremonyEvents();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

project.getAllB2B_MarketingSponsorship = async (req, res) => {
  try {
    const result = await model.GetAllB2B_MarketingSponsorship();
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

project.getbyID = async (req, res) => {
  try {
    const result = await model.GetDetail(req.params.id_project);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

project.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      type_project: object.type_project,
      genre_project: object.genre_project,
      title_project: object.title_project,
      child_title: object.child_title,
      year_project: object.year_project,
      place_project: object.place_project,
      short_desc: object.short_desc,
      about: object.about,
      impression_result: object.impression_result,
      media_result: object.media_result,
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

project.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      type_project: object.type_project,
      genre_project: object.genre_project,
      title_project: object.title_project,
      child_title: object.child_title,
      year_project: object.year_project,
      place_project: object.place_project,
      short_desc: object.short_desc,
      about: object.about,
      impression_result: object.impression_result,
      media_result: object.media_result,
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

project.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_project);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = project;
