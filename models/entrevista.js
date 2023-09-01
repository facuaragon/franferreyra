import mongoose, { Schema } from "mongoose";

const entrevistaSchema = new Schema(
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

const Entrevista =
  mongoose.models?.Entrevista || mongoose.model("Entrevista", entrevistaSchema);

export default Entrevista;
