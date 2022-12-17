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
    }
  };

  return (
    <div>
      {otpValues.map((val, ind) => (
        <Input
          key={ind}
          type="text"
          value={otpValues[ind]["value"]}
          onChange={(e) => handleOnChange(e, ind)}
          minLength="0"
          maxLength="1"
        />
      ))}
    </div>
  );
}

export default Otp;
