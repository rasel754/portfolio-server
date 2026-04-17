import express from 'express';
import { ProjectController } from './Project.controller';
import { ProjectValidation } from './Project.validation';
import validateRequest from '../../middlewires/validateRequest';

const router = express.Router();

router.post(
  '/create-project',
  validateRequest(ProjectValidation.createProjectValidation),
  ProjectController.createProject,
);

router.get('/:id', ProjectController.getSingleProject);

router.put(
  '/:id',
  validateRequest(ProjectValidation.updateProjectValidation),
  ProjectController.updateProject,
);

router.delete('/:id', ProjectController.deleteProject);

router.get('/', ProjectController.getAllProjects);

export const ProjectRouter = router;
