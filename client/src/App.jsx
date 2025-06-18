import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import SingleProblem from "./pages/singleProblem";
import AllProblems from "./pages/AllProblems";
import ProblemDetails from "./components/ProblemDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="sign-in" element={<Signin/>}/>
        <Route path="sign-up" element={<Signup/>}/>
        <Route path="problem/:id" element={<SingleProblem/>}/>
        <Route path="problems" element={<AllProblems/>}/>
        <Route path="" element={<ProblemDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
