
import { NextRequest , NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { extractAudioFromVideo } from "@/lib/videohelper";

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("uploading video");
  console.log(req.body);

  const data = await req.formData();
  const file : File = data.get("file") as unknown as File;

  if(!file) {
    return new NextResponse("No file found", {
      status: 400,
      headers: {
        "Content-Type": "text/plain",
      },
    })
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `/tmp/${file.name}`;
  await writeFile(path, buffer);

  console.log("file written to", path);

//   extract audio from video

  console.log("extracting audio")

  //  Create filename for audio file
  const audioPath = `/tmp/${file.name}.mp3`;
  const extractionResult = await extractAudioFromVideo(path, audioPath)
  console.log("extraction result", extractionResult)

   //    Return a 200 response

  //  return json response
  return new NextResponse(JSON.stringify({audioPath}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })


    // return new NextResponse("File uploaded",{
    //     status: 200,
    //     headers: {
    //         "Content-Type": "text/plain",
    //     },
    // })
}
