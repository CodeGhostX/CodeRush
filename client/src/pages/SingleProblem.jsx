import { useState } from "react";
import CodeEditor from "../components/CodeEditor";
import ProblemDetails from "../components/ProblemDetails";
import { useParams } from "react-router-dom";
import { defaultCode } from "../constants/constants";
import axios from "axios";

const SingleProblem = () => {
  const { id } = useParams();
  const [currCode, setCurrCode] = useState(defaultCode.cpp);
  const [currLang, setCurrLang] = useState("cpp");
  const handleRunCode = async () => {
    const data = {
      userId: 1,
      problemId: id,
      code: currCode,
      extension: currLang,
      type: "run",
    };
    const result = await axios.post(
      "http://localhost:3000/api/judge/run",
      data
    );
    console.log(result.data);
  };
  const handleSubmitCode = async () => {
    const data = {
      userId: 1,
      problemId: id,
      code: currCode,
      extension: currLang,
      type: "submit",
    };
    const result = await axios.post(
      "http://localhost:3000/api/judge/run",
      data
    );
    console.log(result.data);
  };
  return (
    <div className="md:grid md:grid-cols-10 mt-5 mx-2 ">
      {/* Left Part */}
      <ProblemDetails problemId={id} />

      {/* Right Part */}
      <div className="col-span-6">
        <div className="flex justify-between">
          <select
            onChange={(e) => setCurrLang(e.target.value)}
            className="border-2 rounded-lg bg-amber-200"
          >
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="py">Python</option>
            <option value="js">JavaScript</option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={handleRunCode}
              className="border border-yellow-200 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-300 px-4"
            >
              Run
            </button>
            <button
              onClick={handleSubmitCode}
              className="border border-green-300 py-2 rounded-xl bg-green-500 hover:bg-green-300 px-4"
            >
              Submit
            </button>
          </div>
          <div className="border-2 rounded-full h-12 w-12 bg-blue-500 text-3xl text-center">
            A
          </div>
        </div>
        <CodeEditor currLang={currLang} setCurrCode={setCurrCode} />
      </div>
    </div>
  );
};

export default SingleProblem;
