import { combineReducers } from "redux";
import word from "./Word/reducer";
import { Word } from "./Word/types";

export type RootState={
    word:Word
}

const rootReducer = combineReducers({
    word
});

export default rootReducer