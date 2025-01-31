import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";


export const GET = async ({ params }) => {
    const { id } = params;
  
    try {
      await connect();
      const post = await Post.findById(id); 
  
      if (!post) {
        return new NextResponse("Post not found", { status: 404 });
      }
  
      return NextResponse.json(post, { status: 200 });
    } catch (error) {
      console.error(error);
      return new NextResponse("Error in connection DB", { status: 500 });
    }
  };

