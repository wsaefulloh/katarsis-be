const multer = require("multer");

//mengatur penyimpanan dan file name
const storages = multer.diskStorage({
  destination: "public/video_upload",
  filename: (req, file, cb) => {
    cb(null, "KatarsisVideo.mp4");
  },
});

//hanya menerima image dengan extensi tertentu
const filter = (req, file, cb) => {
  if (file.mimetype == "video/mp4") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storages,
  fileFilter: filter,
});

module.exports = upload;
