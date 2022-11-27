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
      if (err.errno == -2) {
        return next();
      } else {
        return respone(res, 400, err);
      }
    }
  };
};

module.exports = deleteFile;
