import express from 'express';
import { SendMeAMessageController } from './SendMeAMessage.controller';
import { SendMeAMessageZodValidation } from './SendMeAMessage.validation';
import validateRequest from '../../middlewires/validateRequest';

const router = express.Router();

router.post(
  '/sendMessage',
   validateRequest(SendMeAMessageZodValidation.SendMeAMessageValidation),
  SendMeAMessageController.CreateSendMeAMessage,
 
);

router.get(
  '/',
  SendMeAMessageController.GetAllMessages
);

export const MessageRouter = router;
