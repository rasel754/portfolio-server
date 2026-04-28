import AppError from '../../Error/AppError';
import { StatusCodes } from 'http-status-codes';
import { IUser } from './User.interface';
import { User } from './User.model';

const loginUser = async (payload: IUser) => {
  const { username, password } = payload;
  
  const user = await User.findOne({ username });
  if (!user) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'User not found!');
  }
  
  if (user.password !== password) {
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Invalid password!');
  }
  
  return { username: user.username };
};

const initializeUser = async () => {
  const defaultUsername = 'rasel754';
  const defaultPassword = 'sajek7540987';
  
  const existingUser = await User.findOne({ username: defaultUsername });
  if (!existingUser) {
    await User.create({ username: defaultUsername, password: defaultPassword });
    console.log('Default user seeded successfully.');
  }
};

export const UserService = {
  loginUser,
  initializeUser,
};
