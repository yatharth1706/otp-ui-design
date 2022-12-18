import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 30px;
  height: 30px;
  padding: 3px;
  border: 1px solid gray;
  margin-right: 5px;
  text-align: center;
`;

function Otp() {
  const [otpValues, setOtpValues] = useState([
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
    { value: "" },
  ]);

  const handleOnChange = (e, ind) => {
    console.log(e);

    if ((e.target.value >= "0" && e.target.value <= "9") || e.target.value === "") {
      let existingOtpValues = [...otpValues];
      existingOtpValues[ind]["value"] = e.target.value;
      setOtpValues(existingOtpValues);

      if (existingOtpValues[ind]["value"].length > 0) {
        if (ind < 5) {
          let nextInd = ind + 1;
          let nextInput = document.getElementById("#otp" + nextInd);
          console.log(nextInput);
          nextInput.focus();
        }
      } else {
        if (ind >= 1) {
          let prevInd = ind - 1;
          let prevInput = document.getElementById("#otp" + prevInd);
          console.log(prevInput);
          prevInput.focus();
        }
      }
    }
  };

  return (
    <div>
      {otpValues.map((val, ind) => (
        <Input
          key={ind}
          id={"#otp" + ind}
          type="text"
          value={otpValues[ind]["value"]}
          onChange={(e) => handleOnChange(e, ind)}
          minLength="0"
          maxLength="1"
          autoFocus={ind === 0}
        />
      ))}
    </div>
  );
}

export default Otp;
