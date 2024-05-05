import ffmpeg from "fluent-ffmpeg";
import path from "path";

export const videoTranscoder = async (filename, filepath) => {
  function baseName(str) {
    // Use the path module to parse the file path
    const parsedPath = path.parse(str);
    // Return just the base name (file name without extension)
    return parsedPath.name;
  }

  console.log("video basename", baseName(filepath));
  const basename = baseName(filepath);

  ffmpeg.setFfmpegPath("C:\\PATH_programs\\ffmpeg.exe");

  ffmpeg(`uploads/${basename}.mp4`)
    .output(`uploads/${basename}-320p.mp4`)
    .videoCodec("libx264")
    .size("640x320")

    // 480p
    .output(`uploads/${basename}-480p.mp4`)
    .videoCodec("libx264")
    .size("854x480")
    .output(`uploads/${basename}-720p.mp4`)
    .videoCodec("libx264")
    .size("1280x720")

    //generate 1080p
    .output(`uploads/${basename}-1080p.mp4`)
    .videoCodec("libx264")
    .size("1920x1080")

    .on("error", function (err) {
      console.error(err);
    })

    .on("progress", async function (progress) {
      await console.log("..frames", progress.frames);
    })

    .on("end", function () {
      console.log("finished processing");
    })
    .run(); // Correct placement of semicolon
};
