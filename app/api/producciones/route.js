import connectMongoDB from "@/libs/mongodb";
import Produccion from "@/models/produccion";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { titulo, productora, servicio, video, prioridad } =
      await request.json();
    await connectMongoDB();
    await Produccion.create({
      titulo,
      productora,
      servicio,
      video,
      prioridad,
    });
    return NextResponse.json(
      { message: "Producción Agregada" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const producciones = await Produccion.find();
    return NextResponse.json({ producciones });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Produccion.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Producción Eliminada" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}
