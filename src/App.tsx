import { useState } from "react";
import Result from "./components/Result";
import Form from "./components/Form";
import { Status } from "./models/status-enum";

const sinNumberValidation = (sinNumber: string) => {
  if (sinNumber === '123') return true;
  return false;
};

function App() {
  const [status, setStatus] = useState<Status>(Status.Form);
  const [isSinNumberValid, setIsSinNumberValid] = useState<boolean>(false);

  const handleValidation = (sinNumber: string) => {
    const sinNumberValidationResult = sinNumberValidation(sinNumber);

    setIsSinNumberValid(sinNumberValidationResult);
    setStatus(Status.Result);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container min-h-80 bg-violet-200 text-center align-middle rounded-lg">
        <h1 className="text-3xl text-center align-middle m-10	text-violet-950">
          SIN Number Validator
        </h1>

        {status === Status.Form ? (
          <Form handleValidation={handleValidation} />
        ) : (
          <Result setStatus={setStatus} isSinNumberValid={isSinNumberValid} />
        )}
      </div>
    </div>
  );
}

export default App;
