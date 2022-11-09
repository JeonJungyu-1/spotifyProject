import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Main from "../pages/main/Main";
import SearchDetailPage from "../pages/search/SearchDetailPage";
import SearchPage from "../pages/search/SearchPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Main />}>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="search/:genre" element={<SearchDetailPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
