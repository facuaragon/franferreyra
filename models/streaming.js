import mongoose, { Schema } from "mongoose";

const streamingSchema = new Schema(
  {
    titulo: String,
    canal: String,
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

const Streaming =
  mongoose.models.Streaming || mongoose.model("Streaming", streamingSchema);

export default Streaming;
