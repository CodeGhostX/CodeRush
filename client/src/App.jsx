import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="sign-in" element={<Signin/>}/>
        <Route path="sign-up" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
