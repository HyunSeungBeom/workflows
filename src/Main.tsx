import axios from "axios";
import { useCallback, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Itembox from "./Itembox";
import { RootState } from "./redux";
import { addWord } from "./redux/Word/actions";
import { IWords } from "./redux/Word/types";
import { ButtonPlus, Scroll } from "./StyleComponents";

export function Main() {
  const nav = useNavigate();
  const move = () => {
    nav("/write");
  };
  const dispatch = useDispatch();
  const updateWord = useCallback(
    (word: IWords) => {
      dispatch(addWord({ word: word }));
    },
    [dispatch]
  );
  const wordLists = useSelector((state: RootState) => state.word.word);
  const dicitionary = async () => {
    const res = await axios.get(
      "http://seungbeom.shop.s3-website.ap-northeast-2.amazonaws.com/db.json"
    );
    return res.data;
  };

  useEffect(() => {
    if (wordLists.length < 1) {
      dicitionary().then((v) => {
        v.map((book: IWords) => {
          return updateWord(book);
        });
      });
    }
  }, [updateWord, wordLists]);
  console.log("test");
  return (
    <Background1>
      <span style={{ color: "white" }}> MY DICITONARY</span>
      <Scroll>
        <Background2>
          <Gapstyle>
            {wordLists.map((v) => {
              return <Itembox key={v.id} word={v} />;
            })}
          </Gapstyle>

          <ButtonPlus>
            <FaPlusCircle onClick={move} cursor="pointer"></FaPlusCircle>
          </ButtonPlus>
        </Background2>
      </Scroll>
    </Background1>
  );
}

const Background1 = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  font-size: 30px;
  text-align: center;
`;

const Background2 = styled.div`
  width: 600px;
  height: 600px;
  margin-top: 2%;
  margin-right: auto;
  margin-left: auto;
`;

const Gapstyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
