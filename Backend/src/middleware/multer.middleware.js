import multer from "multer";

const storage = multer.memoryStorage({
    // destination: function (req, file, cb) {
    //   cb(null, "./public/temp")
    // },
    filename: function (req, file, cb) {
      // console.log("file: ",file.originalname);
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
});