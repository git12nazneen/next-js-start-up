import { comments } from "../data";
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );

  return new Response("GET Handlet");
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
);
{
    const body = await request.json();
    const {text }= body;
    const index = comment.findIndex(
        (comment) => comment.id === parseInt(params.id)
    ) 
    comments[index].text = text;
    return Response.json(comments[index])
}