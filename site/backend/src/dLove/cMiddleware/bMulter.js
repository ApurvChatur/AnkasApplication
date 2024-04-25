const multer = require('multer')

const multerUpload = multer({
  limits: {
    fileSize: 1024 * 1024 * 5
  },
});

const attachmentMulter = multerUpload.array("multer_files", 5);

module.exports = { attachmentMulter };
