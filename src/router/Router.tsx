import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
