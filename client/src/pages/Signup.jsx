import axios from "axios";
import { useRef } from "react";

const Signup = () => {
  const fullname = useRef(),
    username = useRef(),
    email = useRef(),
    password = useRef();
  const handleSubmit = async () => {
    const userData = {
      fullname: fullname.current.value,
      username: username.current.value,
      password: password.current.value,
      email: email.current.value,
    };
    const result = await axios.post(
      "http://localhost:3000/api/auth/sign-up",
      userData,
      { withCredentials: true }
    );
    console.log(result.data);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-amber-900 rounded-xl w-100">
        <div className="text-center text-4xl p-2">
          Sign Up Here
        </div>
        <div>
          <div className="flex flex-col justify-between gap-1 p-2">
            <span className="text-xl ">Fullname </span>
            <input
              type="text"
              ref={fullname}
              className="border-2 rounded-md p-1.5"
              placeholder="fullname"
            />
          </div>
          <div className="flex flex-col justify-between gap-1 p-2">
            <span className="text-xl">Username </span>
            <input
              type="text"
              ref={username}
              className="border-2 rounded-md p-1.5"
              placeholder="username"
            />
          </div>
          <div className="flex flex-col justify-between gap-1 p-2">
            <span className="text-xl">Email </span>
            <input
              type="email"
              ref={email}
              className="border-2 rounded-md p-1.5"
              placeholder="email"
            />
          </div>
          <div className="flex flex-col justify-between gap-1 p-2">
            <span className="text-xl ">Password </span>
            <input
              type="password"
              ref={password}
              className="border-2 rounded-md p-1.5"
              placeholder="password"
            />
          </div>
          <div className="flex justify-between gap-4 items-center p-2">
            <button
              onClick={handleSubmit}
              className="w-full border-2 rounded-md p-2 hover:bg-black hover:text-white"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
