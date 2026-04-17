import catchAsync from '../../uitls/catchAsync';
import sendResponse from '../../uitls/sendResponse';
import httpStatus from 'http-status';
import { ProjectService } from './Project.service';

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectService.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is created successfully',
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectService.getAllProjectsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Projects are retrieved successfully',
    data: result,
  });
});

const getSingleProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.getSingleProjectFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is retrieved successfully',
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.updateProjectInDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is updated successfully',
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.deleteProjectFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Project is deleted successfully',
    data: result,
  });
});

export const ProjectController = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
