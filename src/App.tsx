import "./App.css";
import { Main } from "./Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Write } from "./Write";
import { createGlobalStyle } from "styled-components";
import { Revise } from "./Revise";

const GlobalStyle = createGlobalStyle`
*{
font-family: "Jua", sans-serif;
}
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/write"} element={<Write />} />
        <Route path={"/revise"} element={<Revise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
