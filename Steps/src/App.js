import { useRef, useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handleSteps(string) {
    if (string === "previous" && step > 1) {
      setStep((s) => s - 1);
    } else if (string === "next" && step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen((io) => !io);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : null}>1</div>
            <div className={step >= 2 ? "active" : null}>2</div>
            <div className={step >= 3 ? "active" : null}>3</div>
          </div>

          <p className="message">{"step " + step + " " + messages[step - 1]}</p>
          <div className="buttons">
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handleSteps("previous")}
            >
              Previous
            </button> */}
            <Button
              bgColor="#7950f2"
              tColor="#fff"
              onClick={handleSteps}
              position="previous"
            >
              <span>👈</span>Previous
            </Button>
            <Button
              bgColor="#7950f2"
              tColor="#fff"
              onClick={handleSteps}
              position="next"
            >
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
  function Button({ tColor, bgColor, onClick, children, position }) {
    return (
      <button
        style={{ backgroundColor: bgColor, color: tColor }}
        onClick={() => onClick(position)}
      >
        {children}
      </button>
    );
  }
}
export default App;
