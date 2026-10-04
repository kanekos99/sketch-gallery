const fs = require("fs");
const path = require("path");

const folderPath = "./img";
const outputFile = "images.json";
const outputPath = "./scripts/images.js";
const validExtensions = [".png", ".jpg", ".jpeg", ".webp"];

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  const imageList = [];
  files.forEach((file) => {
    const ext = path.extname(file.name).toLowerCase();
    if (validExtensions.includes(ext)) {
      imageList.push(`./img/${file.name}`);
    }
  });

  const fileContent = `const images = ${JSON.stringify(imageList, null, 2)};\n`;
  fs.writeFileSync(outputPath, fileContent);
  console.log(
    `Successfully generated ${outputFile} with ${imageList.length} images!`,
  );
});
