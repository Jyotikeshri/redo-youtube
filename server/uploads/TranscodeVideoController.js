import cloudinary from "cloudinary";
import ffmpeg from "fluent-ffmpeg";
import path from "path";
import fs from "fs";

export const videoTranscoder = async (filename, filepath) => {
  function baseName(str) {
    const parsedPath = path.parse(str);
    return parsedPath.name;
  }

  const basename = baseName(filepath);

  ffmpeg(`${filepath}`)
    .output(`${basename}-320p.mp4`)
    .videoCodec("libx264")
    .size("640x320")

    .output(`${basename}-480p.mp4`)
    .videoCodec("libx264")
    .size("854x480")

    .output(`${basename}-720p.mp4`)
    .videoCodec("libx264")
    .size("1280x720")

    .output(`${basename}-1080p.mp4`)
    .videoCodec("libx264")
    .size("1920x1080")

    .on("error", function (err) {
      console.error(err);
    })

    .on("progress", async function (progress) {
      console.log("..frames", progress.frames);
    })

    .on("end", async function () {
      console.log("finished processing");

      // Upload each transcoded video to Cloudinary
      try {
        const files = [
          `${basename}-320p.mp4`,
          `${basename}-480p.mp4`,
          `${basename}-720p.mp4`,
          `${basename}-1080p.mp4`,
        ];

        for (const file of files) {
          const result = await cloudinary.v2.uploader.upload(file, {
            resource_type: "video",
            folder: "video",
            public_id: file,
          });
          console.log(`Uploaded ${file} to Cloudinary: ${result.secure_url}`);

          // Optionally, you can delete the local file after uploading
          fs.unlinkSync(file);
        }
      } catch (err) {
        console.error("Failed to upload transcoded video to Cloudinary", err);
      }
    })
    .run();
};
