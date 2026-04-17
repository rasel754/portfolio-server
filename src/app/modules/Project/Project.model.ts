import { Schema, model } from 'mongoose';
import { TProject } from './Project.interface';

const projectSchema = new Schema<TProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    technologies: { type: [String], required: true },
    github: { type: String, required: true },
    liveUrl: { type: String, required: true },
    content: { type: [String], required: true },
    features: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

export const ProjectModel = model<TProject>('Project', projectSchema);
