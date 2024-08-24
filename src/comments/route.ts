import { comments } from "./data";

export async function GET() {
  return new Response.json(comments);
}

export async function POST(request: Request) {
    const comment = await Request.json()
    const newcomment = {
        id:comments.length+1,
        text:comment.text,
    };
    comments.push(newcomment)
  return new Response(JSON.stringify(newcomment),{
    headers:{
        "Content-type":"application/json",
    },
    status:201
  });
}
