
import { NextRequest , NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("uploading video");
  console.log(req.body);

//    Return a 200 response

    return new NextResponse("OK", {
        status: 200,
        headers: {
            "Content-Type": "text/plain",
        },
    })
}
