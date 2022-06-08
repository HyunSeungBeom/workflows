import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type WordAction = ActionType<typeof actions>;

export interface IWords {
  word: string;
  explanation: string;
  example: string;
  id: number;
}

export type Word = {
  word: Array<IWords>;
};
