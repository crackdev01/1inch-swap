import { IAction } from "../action";

// Get Tokes
export type IGetTokensRequestAction = IAction;
export type IGetTokensSuccessAction = {
  tokens: any
};