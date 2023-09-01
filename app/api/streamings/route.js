import connectMongoDB from "@/libs/mongodb";
import Streaming from "@/models/streaming";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { titulo, canal, video, prioridad } = await request.json();
    await connectMongoDB();
    await Streaming.create({
      titulo,
      canal,
      video,
      prioridad,
    });
    return NextResponse.json({ message: "Stream Agregado" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const streamings = await Streaming.find();
    return NextResponse.json({ streamings });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Streaming.findByIdAndDelete(id);
    return NextResponse.json({ message: "Stream Eliminado" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}
