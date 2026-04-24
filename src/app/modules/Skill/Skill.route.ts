import express from 'express';
import { SkillController } from './Skill.controller';
import { SkillValidation } from './Skill.validation';
import validateRequest from '../../middlewires/validateRequest';

const router = express.Router();

router.post(
  '/create-skill',
  validateRequest(SkillValidation.createSkillValidation),
  SkillController.createSkill,
);

router.get('/:id', SkillController.getSingleSkill);

router.put(
  '/:id',
  validateRequest(SkillValidation.updateSkillValidation),
  SkillController.updateSkill,
);

router.delete('/:id', SkillController.deleteSkill);

router.get('/', SkillController.getAllSkills);

export const SkillRouter = router;
