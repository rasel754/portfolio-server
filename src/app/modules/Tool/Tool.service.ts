import { TTool } from './Tool.interface';
import { ToolModel } from './Tool.model';

const createToolIntoDB = async (payload: TTool): Promise<TTool> => {
  const result = await ToolModel.create(payload);
  return result;
};

const getAllToolsFromDB = async () => {
  const result = await ToolModel.find();
  return result;
};

const getSingleToolFromDB = async (id: string) => {
  const result = await ToolModel.findById(id);
  return result;
};

const updateToolInDB = async (id: string, payload: Partial<TTool>) => {
  const result = await ToolModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteToolFromDB = async (id: string) => {
  const result = await ToolModel.findByIdAndDelete(id);
  return result;
};

export const ToolService = {
  createToolIntoDB,
  getAllToolsFromDB,
  getSingleToolFromDB,
  updateToolInDB,
  deleteToolFromDB,
};
