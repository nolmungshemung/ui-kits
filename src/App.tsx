import React from "react";
import DefaultButton from "./components/buttons/DefaultButton";
import InputGroup from "./components/inputs/InputGroup";

function App() {
  const msg: string = "test";
  return (
    <div>
      Hello Jane from {msg}
      <p />
      <p />
      <DefaultButton onClick={() => alert("hello button!")}>
        테스트
      </DefaultButton>
      <p />
      <InputGroup.Number />
      <p />
    </div>
  );
}

export default App;
