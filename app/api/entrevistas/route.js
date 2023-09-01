import connectMongoDB from "@/libs/mongodb";
import Entrevista from "@/models/entrevista";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { titulo, foto, bajada, medio, link, prioridad } =
      await request.json();
    await connectMongoDB();
    await Entrevista.create({
      titulo,
      foto,
      bajada,
      medio,
      link,
      prioridad,
    });
    return NextResponse.json(
      { message: "Entrevista Agregada" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const entrevistas = await Entrevista.find();
    return NextResponse.json({ entrevistas });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Entrevista.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Entrevista Eliminada" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}
