import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { IWords } from "./redux/Word/types";
import { Background, MyButton } from "./StyleComponents";
import Input from "./InputRevise";
import { updateWord } from "./redux/Word/actions";

export function Revise() {
  const [sentense, setSentense] = useState<string>("");
  const [sentense2, setSentense2] = useState<string>("");
  const [sentense3, setSentense3] = useState<string>("");
  const nav = useNavigate();
  const { state }: any = useLocation();
  const dispatch = useDispatch();
  const updWord = useCallback(
    (word: IWords) => dispatch(updateWord({ word: word })),

    [dispatch]
  );
  const Click = () => {
    const inputData: IWords = {
      word: sentense,
      explanation: sentense2,
      example: sentense3,
      id: state.word.id,
    };
    updWord(inputData);
    nav("/");
  };

  return (
    <Background>
      <div style={{ fontSize: "50px" }}>수정하기</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
        }}
      >
        <Input text={"단어"} setWord={setSentense} />
        <Input text={"설명"} setWord={setSentense2} />
        <Input text={"예시"} setWord={setSentense3} />
      </div>
      <div style={{ display: "flex" }}>
        <MyButton onClick={Click}>수정하기</MyButton>
      </div>
    </Background>
  );
}
