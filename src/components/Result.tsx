import React from "react";
import { Status } from "../models/status-enum";

type ResultProps = {
  setStatus: React.Dispatch<React.SetStateAction<Status>>
};

const Result: React.FC<ResultProps> = ({ setStatus }) => {
  return (
    <div>
      <h1>Result Here</h1>
      <a className="link end-1" onClick={() => setStatus(Status.Form)}>
        Try another SIN Number
      </a>
    </div>
  );
};

export default Result;
