import React, { useState } from "react";

const BrokrageInput = ({ length, onChange }: any) => {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (element: any, index: any) => {
    const value = element.value.replace(/[^0-9]/g, "");
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      onChange(newOtp.join(""));
      // Focus the next input field
      if (value !== "" && element.nextSibling) {
        element.nextSibling.focus();
      }
    }
  };

  const handleKeyDown = (event: any, index: any) => {
    if (event.key === "Backspace" && otp[index] === "") {
      if (event.target.previousSibling) {
        event.target.previousSibling.focus();
      }
    }
  };

  return (
    <div className="w-full md:w-1/2 mx-auto mt-20">
      <div className="h-12 w-full bg-gray-100 flex justify-center items-center rounded-t-md">
        Brokerage Code Confirmation
      </div>
      <div className="flex space-x-2 mt-5 justify-center">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 border border-gray-300 rounded text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
    </div>
  );
};

export default BrokrageInput;
