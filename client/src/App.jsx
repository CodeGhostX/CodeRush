import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import SingleProblem from "./pages/SingleProblem";
import AllProblems from "./pages/AllProblems";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="sign-in" element={<Signin/>}/>
        <Route path="sign-up" element={<Signup/>}/>
        <Route path="problem/:id" element={<SingleProblem/>}/>
        {/* <Route path="problems" element={<AllProblems/>}/> */}
        <Route path="" element={<AllProblems/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
