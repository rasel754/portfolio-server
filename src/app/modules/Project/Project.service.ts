import { TProject } from './Project.interface';
import { ProjectModel } from './Project.model';

const createProjectIntoDB = async (payload: TProject): Promise<TProject> => {
  const result = await ProjectModel.create(payload);
  return result;
};

const getAllProjectsFromDB = async () => {
  const result = await ProjectModel.find();
  return result;
};

const getSingleProjectFromDB = async (id: string) => {
  const result = await ProjectModel.findById(id);
  return result;
};

const updateProjectInDB = async (id: string, payload: Partial<TProject>) => {
  const result = await ProjectModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteProjectFromDB = async (id: string) => {
  const result = await ProjectModel.findByIdAndDelete(id);
  return result;
};

export const ProjectService = {
  createProjectIntoDB,
  getAllProjectsFromDB,
  getSingleProjectFromDB,
  updateProjectInDB,
  deleteProjectFromDB,
};
