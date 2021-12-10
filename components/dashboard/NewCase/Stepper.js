import React, { useState } from "react";
import CN from "classnames";
import StepOneContent from "./StepOneContent";
import { Button, Row } from "antd";
const options = [
  { title: "Product Type" },
  { title: "Case Type Information" },
  { title: "Case Information" },
  { title: "Case Confirmation" },
];
const Stepper = () => {
  const [active, setActive] = useState(0);

  const next = (index) => {
    setActive(index);
  };
  const prev = (index) => {};

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <StepOneContent />;
      case 1:
        return (
          <div className="step-one-content">
            <h1>step 2</h1>
          </div>
        );
      case 2:
        return (
          <div className="step-one-content">
            <h1>step 3</h1>
          </div>
        );
      case 3:
        return (
          <div className="step-one-content">
            <h1>step 4</h1>
          </div>
        );
      default:
        return "Unknown step";
    }
  }

  return (
    <div className="stepper-wrapper">
      {getStepContent(active)}
      <div className="step-btns-wrapper">
        {options.map((item, idx) => (
          <span
            key={idx}
            className={CN([
              "step-btn",
              { active: active === idx },
              { first: idx === 0 },
            ])}
            onClick={() => next(idx)}
          >
            <span className="text">{item.title}</span>
          </span>
        ))}
      </div>
      <Row style={{ justifyContent: "space-between", margin: "2em 0" }}>
        <Button size="large" type="danger">
          Cancel
        </Button>
        <Button size="large" type="primary" onClick={() => next(active + 1)}>
          Next
        </Button>
      </Row>
    </div>
  );
};

Stepper.defaultProps = {};
export default Stepper;
