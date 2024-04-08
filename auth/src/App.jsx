import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./signup";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./login";
import { Home } from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
