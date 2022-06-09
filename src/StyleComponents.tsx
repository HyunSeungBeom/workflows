import styled from "styled-components";

export const MyButton = styled.button`
  border-color: black;
  color: blue;
  background-image: linear-gradient(45deg, red 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  background-color: white;
  padding: 20px 60px;
  border-radius: 10px;
  transition: background 300ms ease-in-out;
  font-weight: bold;
  font-family: "Jua", sans-serif;
  cursor: pointer;
  &:hover {
    background-position: 0;
  }
`;

export const TextBox = styled.div`
  background-color: white;
  flex-direction: column;
  text-align: left;
  padding: 20px;
  border-radius: 2%;
  font-size: 15px;
  width: 190px;
  box-sizing: border-box;
`;

export const InputKing = styled.input`
  margin-left: 10px;
  margin-bottom: 20px;
  width: 200px;
  height: 30px;
  border-radius: 10px;
`;

export const Background = styled.div`
  background: black;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: white;
  flex-direction: column;
  font-size: 20px;
`;

export const Scroll = styled.nav`
  display: flex;
  overflow: auto;
  height: 100%;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const ButtonPlus = styled.div`
  font-size: 60px;
  display: flex;
  justify-content: right;
  position: sticky;
  width: 60px;
  height: 60px;
  float: right;
  bottom: 80px;
`;
