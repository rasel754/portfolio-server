import mongoose from 'mongoose';
import { TSendMeAMessage } from './SendMeAMessage.interface';

const SendMeAMessageSchema = new mongoose.Schema<TSendMeAMessage>({
  name: {
    type: String,
    required: [true, 'To send message, Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
  },
});

export const SendMeAMessageModel = mongoose.model<TSendMeAMessage>(
  'Message',
  SendMeAMessageSchema,
);
