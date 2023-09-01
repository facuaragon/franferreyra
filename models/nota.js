import mongoose, { Schema } from "mongoose";

const notaSchema = new Schema(
  {
    titulo: String,
    foto: String,
    bajada: String,
    medio: String,
    link: String,
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

const Nota = mongoose.models.Nota || mongoose.model("Nota", notaSchema);

export default Nota;
