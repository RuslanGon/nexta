import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connect(); // Подключение к базе данных
    const posts = await Post.find(); // Получение всех постов

    return NextResponse.json(posts, { status: 200 }); // Возвращаем JSON-ответ

  } catch (error) {
    console.error("Database connection error:", error);
    return new NextResponse("Error in connection DB", { status: 500 });
  }
};
