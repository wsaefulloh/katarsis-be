const express = require("express");
const routing = express.Router();
const file = require("./routes/routes_file");
const profile = require("./routes/routes_profile");
const liputan = require("./routes/routes_liputan");
const project = require("./routes/routes_project");
const respone = require("./helpers/respone");

routing.use("/liputan", liputan);
routing.use("/liputan/*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

routing.use("/file", file);
routing.use("/file/*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

routing.use("/profile", profile);
routing.use("/profile/*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

routing.use("/project", project);
routing.use("/project/*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

routing.use("*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

module.exports = routing;
