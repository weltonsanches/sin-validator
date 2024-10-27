import React from "react";
import { Status } from "../models/status-enum";

type ResultProps = {
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
  isSinNumberValid: boolean;
};

const resultColorsMap = {
  'VALID': 'text-green-800',
  'INVALID': 'text-red-800',
}

const Result: React.FC<ResultProps> = ({ setStatus, isSinNumberValid }) => {
  const validationResult = isSinNumberValid ? 'VALID' : 'INVALID';

  return (
    <div className="result flex flex-col h-48 justify-between">
      <div className={`flex justify-center py-8 ${resultColorsMap[validationResult]}`}>
        <h1>The SIN Number entered is {validationResult}</h1>
      </div>
      <div className="flex justify-center">
        <a className="link" onClick={() => setStatus(Status.Form)}>
          Try another SIN Number
        </a>
      </div>
    </div>
  );
};

export default Result;
