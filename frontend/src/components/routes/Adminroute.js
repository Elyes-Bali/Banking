import { Outlet, Navigate } from "react-router-dom";
const Adminroute = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/" />;
};
export default Adminroute;
