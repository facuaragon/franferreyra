import mongoose, { Schema } from "mongoose";

const produccionSchema = new Schema(
  {
    titulo: String,
    productora: String,
    servicio: String,
    video: String,
    prioridad: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Produccion =
  mongoose.models?.Produccion || mongoose.model("Produccion", produccionSchema);

export default Produccion;
