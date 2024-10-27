import { useState } from "react";
import Result from "./components/Result";
import Form from "./components/Form";
import { Status } from "./models/status-enum";

function App() {
  const [status, setStatus] = useState<Status>(Status.Form);

  const handleValidation = (sinNumber: string) => {
    console.log("Sin Number is", sinNumber);
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
          <Result setStatus={setStatus} />
        )}
      </div>
    </div>
  );
}

export default App;
