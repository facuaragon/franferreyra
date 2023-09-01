import connectMongoDB from "@/libs/mongodb";
import Nota from "@/models/nota";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { titulo, foto, bajada, medio, link, prioridad } =
      await request.json();
    await connectMongoDB();
    await Nota.create({
      titulo,
      foto,
      bajada,
      medio,
      link,
      prioridad,
    });
    return NextResponse.json({ message: "Nota Agregada" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const notas = await Nota.find();
    return NextResponse.json({ notas });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Nota.findByIdAndDelete(id);
    return NextResponse.json({ message: "Nota Eliminada" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}
