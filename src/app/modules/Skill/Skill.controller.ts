import catchAsync from '../../uitls/catchAsync';
import sendResponse from '../../uitls/sendResponse';
import httpStatus from 'http-status';
import { SkillService } from './Skill.service';

const createSkill = catchAsync(async (req, res) => {
  const result = await SkillService.createSkillIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is created successfully',
    data: result,
  });
});

const getAllSkills = catchAsync(async (req, res) => {
  const result = await SkillService.getAllSkillsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skills are retrieved successfully',
    data: result,
  });
});

const getSingleSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillService.getSingleSkillFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is retrieved successfully',
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillService.updateSkillInDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is updated successfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillService.deleteSkillFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is deleted successfully',
    data: result,
  });
});

export const SkillController = {
  createSkill,
  getAllSkills,
  getSingleSkill,
  updateSkill,
  deleteSkill,
};
