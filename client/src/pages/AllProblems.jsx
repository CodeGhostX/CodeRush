import React from "react";
import { useNavigate } from "react-router-dom";

const problems = [
  {
    title: "Sum of two numbers",
    description: "Given two integers a and b, return their sum.",
    level: 1,
  },
  {
    title: "Check Prime Number",
    description: "Determine whether a given number n is a prime number.",
    level: 2,
  },
  {
    title: "Reverse a String",
    description:
      "Reverse the given string without using built-in reverse methods.",
    level: 1,
  },
  {
    title: "Find Largest Element in Array",
    description: "Given an array of integers, return the largest element.",
    level: 1,
  },
  {
    title: "Two Sum",
    description:
      "Given an array of integers and a target, return the indices of two numbers that add up to the target.",
    level: 2,
  },
];

const AllProblems = () => {
  const navigate = useNavigate();
  const redirectSingleProblem = (idx)=>{
    navigate(`/problem/${idx}`);
  }
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4 text-3xl font-bold mx-12">All Problems</div>
      <div className="grid grid-cols-4 border-2 mt-4 mx-12 rounded-xl place-items-center">
        <span className="text-2xl font-bold">Serial No.</span>
        <span className="text-2xl font-bold">Title</span>
        <span className="text-2xl font-bold">Tags</span>
        <span className="text-2xl font-bold">Level</span>
      </div>
      {problems.map((problem, idx) => {
        return (
          <div onClick={()=>redirectSingleProblem(idx+1)} className="grid grid-cols-4 rounded-xl py-2 place-items-center cursor-pointer border-2 border-gray-600 mt-4 mx-12">
            <span className="text-2xl">{idx + 1}</span>
            <span className="text-2xl">{problem.title}</span>
            <div className="flex gap-2">
              <span className="border-1 rounded-lg p-0.5 text-xs">Array </span>
              <span className="border-1 rounded-lg p-0.5 text-xs">String</span>
              <span className="border-1 rounded-lg p-0.5 text-xs">Math</span>
            </div>
            <span className="text-2xl">{problem.level}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AllProblems;
