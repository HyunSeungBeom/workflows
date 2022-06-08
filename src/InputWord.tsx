import { useRef } from "react";
import { InputKing } from "./StyleComponents";

export default function InputWord({
  setWord,
  text,
}: {
  setWord: React.Dispatch<React.SetStateAction<string>>;
  text: string;
}) {
  const inputChange = () => {
    if (useref.current) {
      setWord(useref.current.value);
    }
  };
  const useref = useRef<HTMLInputElement>(null);

  return (
    <div
      style={{
        fontSize: "20px",
        color: "white",
      }}
    >
      <div>
        {text}
        <InputKing type="text" ref={useref} onChange={inputChange} />
      </div>
    </div>
  );
}
