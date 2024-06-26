import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./hooks/use-password-generator";
import StrengthChecker from "./component/StrengthChecker";
import ButtonComponent from "./component/ButtonComponent";
import CheckBoxComponent from "./component/CheckBoxComponent";

function App() {
  const [charLength, setCharLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (index) => {
    const newCheckboxData = [...checkboxData];
    newCheckboxData[index].state = !newCheckboxData[index].state;
    setCheckboxData(newCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();

  return (
    <div className="container">
      {/* Password Text and Copy */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <ButtonComponent
            customClass="copyBtn"
            onClick={handleCopy}
            text={copied ? "Copied" : "Copy"}
          />
        </div>
      )}
      {/* Character length */}
      <div className="charLength">
        <span>
          <label>Character Length</label>
          <label>{charLength}</label>
        </span>
        <input
          type="range"
          min={4}
          max={20}
          value={charLength}
          onChange={(e) => setCharLength(e.target.value)}
        />
      </div>
      {/* Checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <CheckBoxComponent
              key={index}
              title={checkbox.title}
              checkedState={checkbox.state}
              onChange={() => handleCheckboxChange(index)}
            />
          );
        })}
      </div>
      {/* Strength */}
      <StrengthChecker password={password} />
      {/* Generate Button */}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <ButtonComponent
        customClass="generateBtn"
        onClick={() => generatePassword(checkboxData, charLength)}
        text="Generate Password"
      />
    </div>
  );
}

export default App;
