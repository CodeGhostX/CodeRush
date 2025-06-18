import { useRef } from "react";
import axios from "axios";

const Signin = () => {
  const first = useRef();
  const password = useRef();
  const handleSubmit = async () => {
    const firstValue = first.current.value;
    const passwordValue = password.current.value;
    const firstKey = firstValue.includes("@") ? "email" : "username";
    const result = await axios.post(
      "http://localhost:3000/api/auth/sign-in",
      { [firstKey]: firstValue, password: passwordValue },
      { withCredentials: true }
    );
    console.log(result.data.message);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-amber-900 rounded-xl w-100">
        <div className="text-center text-4xl p-2">
          Sign in Here
        </div>
        <div>
          <div className="flex flex-col justify-between gap-1 p-2">
            <span className="text-xl ">Email/Username </span>
            <input
              type="text"
              ref={first}
              className="border-2 rounded-md p-1.5"
              placeholder="username"
            />
          </div>
          <div className="flex flex-col justify-between gap-1 p-2">
            <span className="text-xl ">Password </span>
            <input
              type="password"
              ref={password}
              className="border-2 rounded-md p-1"
              placeholder="password"
            />
          </div>
          <div className="flex justify-between gap-4 items-center p-2">
            <button
              onClick={handleSubmit}
              className="w-full border-2 rounded-md p-2 hover:bg-[#000000] hover:"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
