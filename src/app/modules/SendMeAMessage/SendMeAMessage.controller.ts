import catchAsync from "../../uitls/catchAsync";
import sendResponse from "../../uitls/sendResponse";
import httpStatus from 'http-status';

import { SendMeAMessageService } from "./SendMeAMessage.service";

const CreateSendMeAMessage = catchAsync(async (req, res) => {
  const result = await SendMeAMessageService.CreateSendMeAMessageIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "📬 Message received! Let's build something amazing together.",
    data: result,
  });
});

const GetAllMessages = catchAsync(async (req, res) => {
  const result = await SendMeAMessageService.GetAllMessagesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Messages retrieved successfully",
    data: result,
  });
});

export const SendMeAMessageController = {
  CreateSendMeAMessage,
  GetAllMessages
};