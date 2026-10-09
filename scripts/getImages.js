const fs = require("fs");
const path = require("path");

const folderPath = "./img";
const outputPath = "./scripts/images.js";
const validExtensions = [".png", ".jpg", ".jpeg", ".webp"];

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  const imageFiles = [];

  files.forEach((file) => {
    const ext = path.extname(file.name).toLowerCase();
    if (validExtensions.includes(ext)) {
      const filePath = path.join(folderPath, file.name)
      const stats = fs.statSync(filePath);

      imageFiles.push({
        path: `./img/${file.name}`,
        time: stats.birthtimeMs || stats.mtimeMs,
      });
    }
  });

  imageFiles.sort((a, b) => b.time - a.time);
  const imageList = imageFiles.map((file) => file.path)

  const fileContent = `const images = ${JSON.stringify(imageList, null, 2)};\n`;
  fs.writeFileSync(outputPath, fileContent);
  console.log(
    `Successfully generated script with ${imageList.length} images!`,
  );
});
