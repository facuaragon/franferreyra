import connectMongoDB from "@/libs/mongodb";
import Streaming from "@/models/streaming";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { titulo, canal, video, prioridad } = await request.json();
    await connectMongoDB();
    await Streaming.findByIdAndUpdate(id, {
      titulo,
      canal,
      video,
      prioridad,
    });
    return NextResponse.json(
      { message: "Stream Actualizada" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const stream = await Streaming.findOne({ _id: id });
    return NextResponse.json({ stream }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}
