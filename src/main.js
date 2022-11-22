const express = require("express");
const routing = express.Router();
const file = require("./routes/routes_file");
const profile = require("./routes/routes_profile");
const liputan = require("./routes/routes_liputan");
const brands = require("./routes/routes_brands");
const project = require("./routes/routes_project");
const respone = require("./helpers/respone");
const user = require("./routes/routes_user");
const link = require("./routes/routes_links");
const addon = require("./routes/routes_addon");
const newproject = require("./routes/routes_newproject");
const submenu = require("./routes/routes_submenu");
const departement = require("./routes/routes_departement");
const job = require("./routes/routes_job");

routing.use("/departement", departement);
routing.use("/departement/*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

routing.use("/job", job);
routing.use("/job/*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

routing.use("/brands", brands);
routing.use("/brands/*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

routing.use("/submenu", submenu);
routing.use("/submenu/*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

routing.use("/newproject", newproject);
routing.use("/newproject/*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

routing.use("/content", addon);
routing.use("/content/*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

routing.use("/link", link);
routing.use("/link/*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

routing.use("/liputan", liputan);
routing.use("/liputan/*", (req, res) => {
  return respone(res, 404, "Alamat URL yang anda masukkan salah");
});

routing.use("/user", user);
routing.use("/user/*", (req, res) => {
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
