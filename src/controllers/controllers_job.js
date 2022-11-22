const job = {};
const model = require("../models/models_job");
const respone = require("../helpers/respone");

job.addData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id_departement: object.id_departement,
      job_title: object.job_title,
      city: object.city,
      type_job: object.type_job,
      url: object.url,
    };
    const result = await model.AddData(data);
    return respone(res, 201, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

job.removeData = async (req, res) => {
  try {
    const result = await model.DeleteData(req.params.id_job);
    return respone(res, 200, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

job.getByIDDepartement = async (req, res) => {
  try {
    const result = await model.GetJobByIdDepartement(req.params.id_departement);
    return respone(res, 200, result);
  } catch (error) {
    console.log(error);
    return respone(res, 500, error);
  }
};

job.updateData = async (req, res) => {
  try {
    const object = await req.body;
    const data = {
      id: object.id,
      id_departement: object.id_departement,
      job_title: object.job_title,
      city: object.city,
      type_job: object.type_job,
      url: object.url,
    };
    const result = await model.UpdateData(data);
    return respone(res, 201, result);
  } catch (error) {
    return respone(res, 500, error);
  }
};

module.exports = job;
