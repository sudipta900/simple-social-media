const express = require("express");
const postModel = require("./models/post.model");
const uploadFile = require("./services/storage.service.js")
const multer = require("multer"); //middlewire
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });  // using multer, create buffer, originalname


app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "image file is required"
      });
    }
    // console.log(req.body);
    // console.log(req.file);




    const result = await uploadFile(req.file.buffer, req.file.originalname || "image.jpg"); // uploading to imagekit
    // console.log(result);

    //upload data to mongodb
    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption,
    })

    res.status(201).json({
      message: "post created",
      image: result.url,
      caption: req.body.caption,
    });




  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "failed to upload image",
      error: error.message
    });
  }
});

app.get("/posts", async(req, res)=>{
  const posts = await postModel.find();
  return res.status(200).json({
    message:"Post fatched successfuly",
    Posts: posts
  })
})







module.exports = app;
