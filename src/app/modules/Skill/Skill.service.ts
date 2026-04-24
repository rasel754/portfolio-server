import { TSkill } from './Skill.interface';
import { SkillModel } from './Skill.model';

const createSkillIntoDB = async (payload: TSkill): Promise<TSkill> => {
  const result = await SkillModel.create(payload);
  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await SkillModel.find();
  return result;
};

const getSingleSkillFromDB = async (id: string) => {
  const result = await SkillModel.findById(id);
  return result;
};

const updateSkillInDB = async (id: string, payload: Partial<TSkill>) => {
  const result = await SkillModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteSkillFromDB = async (id: string) => {
  const result = await SkillModel.findByIdAndDelete(id);
  return result;
};

export const SkillService = {
  createSkillIntoDB,
  getAllSkillsFromDB,
  getSingleSkillFromDB,
  updateSkillInDB,
  deleteSkillFromDB,
};
