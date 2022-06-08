import { IWords } from "./redux/Word/types";
import { TextBox } from "./StyleComponents";
import { FaMarker, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { deleteWord } from "./redux/Word/actions";

export default function Itembox({ word }: { word: IWords }) {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const delWord = useCallback(
    (id: number) => dispatch(deleteWord(id)),
    [dispatch]
  );
  const click = () => {
    delWord(word.id);
  };
  const click2 = () => {
    nav("/revise", {
      state: {
        word: word,
      },
    });
  };

  return (
    <TextBox>
      <div>
        <div>
          <BeetWeen>
            단어
            <div>
              <FaMarker onClick={click2} style={{ cursor: "pointer" }} />
              <FaTrashAlt onClick={click} style={{ cursor: "pointer" }} />
            </div>
          </BeetWeen>
          <p>{word.word}</p>
          설명
          <p>{word.explanation}</p>
          예시
          <p style={{ color: "blue", fontWeight: "bold" }}>{word.example}</p>
        </div>
      </div>
    </TextBox>
  );
}

const BeetWeen = styled.div`
  display: flex;
  justify-content: space-between;
`;
