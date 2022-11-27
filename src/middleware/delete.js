const respone = require("../helpers/respone");
const fs = require("fs");
const path = "public/video_upload/KatarsisVideo.mp4";

const deleteFile = () => {
  return (req, res, next) => {
    try {
      fs.unlinkSync(path);
      console.log("File removed:", path);
      return next();
    } catch (err) {
      console.error(err);
      return respone(res, 401, err);
    }
  };
};

module.exports = deleteFile;
