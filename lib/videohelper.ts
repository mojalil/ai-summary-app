import ffmpeg from "fluent-ffmpeg";

export const extractAudioFromVideo = (
  videoPath: string,
  audioPath: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    ffmpeg(videoPath)
      .output(audioPath)
      .audioCodec("libmp3lame") // This sets the audio codec to use for MP3 encoding
      .toFormat("mp3") // This ensures the output is in MP3 format
      .noVideo()
      .on('progress', (progress) => {
        console.log('Processing: ' + progress.percent + '% done');
      })
      .on("end", () => {
        console.log("Audio extraction complete");
        // The extracted audio is now at outputPath, you can now proceed with transcription
        resolve(audioPath);
      })

      .on("error", (err: any) => reject(err))
      .run();
  });
};

