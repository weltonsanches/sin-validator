import { useState } from "react";

type FormProps = {
  handleValidation: (sinNumber: string) => void;
};

const Form: React.FC<FormProps> = ({ handleValidation }) => {
  const [sinNumber, setSinNumber] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        placeholder="SIN Number"
        value={sinNumber}
        onChange={(e) => setSinNumber(e.target.value)}
        className="input input-bordered input-primary w-full max-w-xs m-5"
      />
      <button
        className="btn btn-primary btn-outline"
        onClick={() => handleValidation(sinNumber)}
      >
        Validate
      </button>
    </div>
  );
};

export default Form;
