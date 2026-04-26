import { Schema, model } from 'mongoose';
import { TTool } from './Tool.interface';

const toolSchema = new Schema<TTool>(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const ToolModel = model<TTool>('Tool', toolSchema);
