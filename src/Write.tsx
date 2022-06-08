import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addWord } from "./redux/Word/actions";
import { IWords } from "./redux/Word/types";
import { useDispatch, useSelector } from "react-redux";
import { Background, MyButton } from "./StyleComponents";
import Input from "./InputWord";
import { RootState } from "./redux";

export function Write() {
  const [word, setWord] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");
  const [example, setExample] = useState<string>("");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const wordLists = useSelector((state: RootState) => state.word.word);
  const updateWord = useCallback(
    (word: IWords) => dispatch(addWord({ word: word })),

    [dispatch]
  );

  const Click = () => {
    const inputData: IWords = {
      word: word,
      explanation: explanation,
      example: example,
      id: wordLists.length,
    };
    updateWord(inputData);
    nav("/");
  };

  return (
    <Background>
      <div
        style={{
          width: "100%",
          margin: "0px auto",
          fontSize: "50px",
          textAlign: "center",
        }}
      >
        <span style={{ color: "white" }}>단어 추가하기</span>

        <div
          style={{
            marginTop: "50px",
          }}
        >
          <Input text={"단어"} setWord={setWord} />
          <Input text={"설명"} setWord={setExplanation} />
          <Input text={"예시"} setWord={setExample} />
        </div>
        <MyButton onClick={Click}>추가 하기</MyButton>
      </div>
    </Background>
  );
}
