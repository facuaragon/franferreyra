import connectMongoDB from "@/libs/mongodb";
import Entrevista from "@/models/entrevista";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { titulo, foto, bajada, medio, link, prioridad } =
      await request.json();
    await connectMongoDB();
    await Entrevista.findByIdAndUpdate(id, {
      titulo,
      foto,
      bajada,
      medio,
      link,
      prioridad,
    });
    return NextResponse.json(
      { message: "Entrevista Actualizada" },
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
    const entrevista = await Entrevista.findOne({ _id: id });
    return NextResponse.json({ entrevista }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}
