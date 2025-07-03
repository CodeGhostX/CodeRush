import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const AllProblems = () => {
  const navigate = useNavigate();
  const [problems, setProblems] = useState([]);
  const [alltags, setAllTags] = useState([]);
  const getAllProblems = async ()=>{
    const result = await axios.get("http://localhost:3000/api/problem/all-problems");
    const allProblems = result.data.data;
    const tempAlltags = [];
    for(let i=0;i<allProblems.length;i++){
      const tagResult = await axios.get(`http://localhost:3000/api/problem/problem-tag/${allProblems[i].id}`);
      tempAlltags.push(tagResult.data.data);
    }
    setAllTags(tempAlltags);
    setProblems(allProblems);
  }
  const redirectSingleProblem = (idx) => {
    navigate(`/problem/${idx}`);
  };
  useEffect(()=>{
    getAllProblems()
  }, []);
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4 text-3xl font-bold mx-12">
        All Problems
      </div>
      <div className="grid grid-cols-4 border-2 mt-4 mx-12 rounded-xl place-items-center">
        <span className="text-2xl font-bold">Serial No.</span>
        <span className="text-2xl font-bold">Title</span>
        <span className="text-2xl font-bold">Tags</span>
        <span className="text-2xl font-bold">Level</span>
      </div>
      {problems?.map((problem, idx) => {
        return (
          <div
            key={problem.id}
            onClick={() => redirectSingleProblem(problem.id)}
            className="grid grid-cols-4 rounded-xl py-2 place-items-center cursor-pointer border-2 border-gray-600 mt-4 mx-12"
          >
            <div className="text-2xl">{idx + 1}</div>
            <div className="text-2xl">{problem.title}</div>
            <div className="flex gap-2">
              {
                alltags[idx].map((singleTag, index)=>{
                  return <span key={index} className="border-1 rounded-lg p-0.5 text-xs">{singleTag}</span>
                })
              }
            </div>
            <div className="text-2xl">{problem.level}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProblems;
