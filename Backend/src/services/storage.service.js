const { ImageKit, toFile } = require("@imagekit/nodejs");

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: "https://ik.imagekit.io/sudipta900"
});

if (!process.env.IMAGEKIT_PUBLIC_KEY || !process.env.IMAGEKIT_PRIVATE_KEY) {
  throw new Error("ImageKit environment variables are missing");
}


async function uploadFile(buffer, fileName) {
  const result = await imageKit.files.upload({
    file: await toFile(buffer, fileName),
    fileName: fileName
  });

  return result;
}

module.exports = uploadFile;
