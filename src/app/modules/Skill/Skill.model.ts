import { Schema, model } from 'mongoose';
import { TSkill } from './Skill.interface';

const skillSchema = new Schema<TSkill>(
  {
    name: { type: String, required: true },
    level: { type: Number, required: true, min: 0, max: 100 },
    color: { type: String, required: true },
    logo: { type: String },
  },
  {
    timestamps: true,
  }
);

export const SkillModel = model<TSkill>('Skill', skillSchema);
