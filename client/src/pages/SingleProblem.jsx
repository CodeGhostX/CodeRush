import React from "react";
import CodeEditor from "../components/CodeEditor";
import ProblemDetails from "../components/ProblemDetails";
import { useParams } from "react-router-dom";

const SingleProblem = () => {
  const { id } = useParams();
  return (
    <div className="md:grid md:grid-cols-10 mt-5 mx-2 ">
      {/* Left Part */}
      <ProblemDetails problemId={id} />

      {/* Right Part */}
      <div className="col-span-6">
        <div className="flex justify-between">
          <select name="languages" className="border-2 rounded-lg bg-amber-200">
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="py">Python</option>
            <option value="js">JavaScript</option>
          </select>
          <div className="flex gap-2">
            <button className="border border-yellow-200 py-2 rounded-xl bg-yellow-500 hover:bg-yellow-300 px-4">
              Run
            </button>
            <button className="border border-green-300 py-2 rounded-xl bg-green-500 hover:bg-green-300 px-4">
              Submit
            </button>
          </div>
          <div className="border-2 rounded-full h-12 w-12 bg-blue-500 text-3xl text-center">
            A
          </div>
        </div>
        <CodeEditor />
      </div>
    </div>
  );
};

export default SingleProblem;
