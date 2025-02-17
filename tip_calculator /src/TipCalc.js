import { useState } from "react";
import Satisfaction from "./Satisfaction";
import BillInput from "./BillInput";
export default function TipCalc() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  function onReset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }
  const total_Bill =
    Number(bill) + Math.round((bill * Number((tip1 + tip2) / 2)) / 100);

  return (
    <div className="tipcalc-container">
      <ul className="tipcalc-list">
        <li className="tipcalc-list-item">
          <BillInput bill={bill} setBill={setBill}>
            <label htmlFor="bill-input" className="tipcalc-label">
              How much was the bill?
            </label>
          </BillInput>
        </li>
        <li className="tipcalc-list-item">
          <Satisfaction id="tip1-select" setTip={setTip1} value={tip1}>
            <label htmlFor="tip1-select" className="tipcalc-label">
              How satisfied are you with the services?
            </label>
          </Satisfaction>
        </li>
        <li className="tipcalc-list-item">
          <Satisfaction id="tip2-select" setTip={setTip2} value={tip2}>
            <label htmlFor="tip2-select" className="tipcalc-label">
              How satisfied is your friend with the services?
            </label>
          </Satisfaction>
        </li>
      </ul>
      {bill ? (
        <h2 className="tipcalc-result">
          You pay ${total_Bill} (${bill} + ${total_Bill - bill})
        </h2>
      ) : null}

      <button className="tipcalc-button" onClick={onReset}>
        Reset ALL
      </button>
    </div>
  );
}
