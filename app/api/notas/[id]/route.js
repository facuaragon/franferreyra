import connectMongoDB from "@/libs/mongodb";
import Nota from "@/models/nota";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { titulo, foto, bajada, medio, link, prioridad } =
      await request.json();
    await connectMongoDB();
    await Nota.findByIdAndUpdate(id, {
      titulo,
      foto,
      bajada,
      medio,
      link,
      prioridad,
    });
    return NextResponse.json({ message: "Nota Actualizada" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDB();
    const nota = await Nota.findOne({ _id: id });
    return NextResponse.json({ nota }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}
