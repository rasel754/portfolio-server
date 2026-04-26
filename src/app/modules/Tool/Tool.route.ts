import express from 'express';
import { ToolController } from './Tool.controller';
import { ToolValidation } from './Tool.validation';
import validateRequest from '../../middlewires/validateRequest';

const router = express.Router();

router.post(
  '/create-tool',
  validateRequest(ToolValidation.createToolValidation),
  ToolController.createTool,
);

router.get('/:id', ToolController.getSingleTool);

router.put(
  '/:id',
  validateRequest(ToolValidation.updateToolValidation),
  ToolController.updateTool,
);

router.delete('/:id', ToolController.deleteTool);

router.get('/', ToolController.getAllTools);

export const ToolRouter = router;
