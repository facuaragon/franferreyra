import connectMongoDB from "@/libs/mongodb";
import Produccion from "@/models/produccion";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { titulo, productora, servicio, video, prioridad } =
      await request.json();
    await connectMongoDB();
    await Produccion.findByIdAndUpdate(id, {
      titulo,
      productora,
      servicio,
      video,
      prioridad,
    });
    return NextResponse.json(
      { message: "Producción Actualizada" },
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
    const produccion = await Produccion.findOne({ _id: id });
    return NextResponse.json({ produccion }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: `Error: ${error}` }, { status: 400 });
  }
}
