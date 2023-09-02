import "./App.css";
import Login from "./Components/Login/Login";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import SharedLayOut from "./Components/SharedLayOut/SharedLayOut";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { selectUserName } from "./features/user/userSlice";
import { useSelector } from "react-redux";

function App() {
  const userName = useSelector(selectUserName);
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayOut />}>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={userName ? <Home /> : <Navigate to="/" />}
          />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
