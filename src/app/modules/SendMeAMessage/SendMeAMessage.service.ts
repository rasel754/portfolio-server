import { TSendMeAMessage } from "./SendMeAMessage.interface";
import { SendMeAMessageModel } from "./SendMeAMessage.model";

const CreateSendMeAMessageIntoDB = async (payload: TSendMeAMessage): Promise<TSendMeAMessage> => {
  const result = await SendMeAMessageModel.create(payload);

  return result;
};

const GetAllMessagesFromDB = async () => {
  const result = await SendMeAMessageModel.find();
  return result;
};


export const SendMeAMessageService = {
    CreateSendMeAMessageIntoDB,
    GetAllMessagesFromDB
}
