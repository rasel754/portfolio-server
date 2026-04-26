import catchAsync from '../../uitls/catchAsync';
import sendResponse from '../../uitls/sendResponse';
import httpStatus from 'http-status';
import { ToolService } from './Tool.service';

const createTool = catchAsync(async (req, res) => {
  const result = await ToolService.createToolIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tool is created successfully',
    data: result,
  });
});

const getAllTools = catchAsync(async (req, res) => {
  const result = await ToolService.getAllToolsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tools are retrieved successfully',
    data: result,
  });
});

const getSingleTool = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ToolService.getSingleToolFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tool is retrieved successfully',
    data: result,
  });
});

const updateTool = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ToolService.updateToolInDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tool is updated successfully',
    data: result,
  });
});

const deleteTool = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ToolService.deleteToolFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tool is deleted successfully',
    data: result,
  });
});

export const ToolController = {
  createTool,
  getAllTools,
  getSingleTool,
  updateTool,
  deleteTool,
};
