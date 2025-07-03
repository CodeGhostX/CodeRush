import { useEffect, useState } from "react";
import axios from "axios";

const ProblemDetails = ({ problemId }) => {
  const [problem, setProblem] = useState({}); 
  const [allConstraints, setAllConstraints] = useState([]);
  const [demoExamples, setDemoExamples] = useState([]);
  const getSingleProblemWithDetails = async () => {
    const result = await axios.get(
      `http://localhost:3000/api/problem/${problemId}`
    );
    const resultDemo = await axios.get(
      `http://localhost:3000/api/problem/problem-examples/${problemId}`
    );
    const currProblem = result.data.data;
    const constraints = currProblem.constraints.split("||");
    setAllConstraints(constraints);
    setProblem(currProblem);
    setDemoExamples(resultDemo.data.data);
  };
  useEffect(() => {
    getSingleProblemWithDetails();
  }, []);

  return (
    <div className="col-span-4 mb-6">
      <div className="text-3xl font-bold text-center">{problem.title}</div>
      <div className="font-bold text-xl">Description</div>
      <div className="text-lg mt-2">{problem.description}</div>
      {/* Examples */}
      <div className="mt-4 flex flex-col gap-4 ">
        <div className="text-xl font-bold">Examples</div>
        {demoExamples.map((item, idx) => {
          return (
            <div key={idx}>
              <div>
                <span className="font-semibold text-lg">Input : </span>
                <span className="text-lg">{item.test}</span>
              </div>
              <div>
                <span className="font-semibold text-lg">Output : </span>
                <span className="text-lg">{item.output}</span>
              </div>
            </div>
          );
        })}
      </div>
      {/* Constranits */}
      <div className="flex flex-col mt-4">
        <div className="font-bold text-xl">Constraints</div>
        <ul className="list-disc pl-5 pt-1">
          {allConstraints.map((item, idx) => {
            return (
              <li key={idx}>
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProblemDetails;
