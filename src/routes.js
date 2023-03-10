import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { getItem } from "./utils/storage";
import Home from "./pages/Home"


const MainRoutes = () => {
  const ProtectedRoutes = ({ redirectTo }) => {
    const isAuthenticated = getItem("token");

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
  };
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/cadastrar" element={<Register />} />
      <Route element={<ProtectedRoutes redirectTo="/login" />}>
        <Route path="/home" element={<Home/>} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
