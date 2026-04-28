import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../uitls/catchAsync';
import { UserService } from './User.service';
import sendResponse from '../../uitls/sendResponse';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.loginUser(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User logged in successfully',
    data: result,
  });
});

export const UserController = {
  loginUser,
};
