import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Formulaire from "./components/formule/Formulaire";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { useEffect, useState } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Adminroute from "./components/routes/Adminroute";
import ProtectedRoutes from "./components/routes/ProtectedRoute";
import Errorpage from "./components/error/Errorpage";
import Chartes from "./components/dashboard/Chartes";
import Formulaire2 from "./components/formule2/Formulaire2";
import Performance1 from "./components/performance1/Performance1";
import SideBar from "./components/dashboard/SideBar";
import Bloc1 from "./components/performance3/Bloc1";
import Signaletique from "./components/formule3/Signalitique";
import Reglementation from "./components/regilmentation/Reglementation";
import Bloc2 from "./components/performance3/Bloc2";
import Bloc3 from "./components/performance3/Bloc3";
import Bloc4 from "./components/performance3/Bloc4";
import Bloc5 from "./components/performance3/Bloc5";
import Certification from "./components/certification/Certification";
import { useDispatch } from "react-redux";
import { currentUser } from "./redux/UserSlice/userslice";
import Gestion from "./components/gestion/Gestion";
import Test from "./components/test/Test";
import Synthese from "./components/synthese/Synthese";
import Personnel from "./components/personnel/Personnel";
import Plan from "./components/plan/Plan";
import { getform } from "./redux/FormSlice/formslice";
import Questinsadd from "./components/dashboard/Questinsadd";
import { getquest } from "./redux/QuestSlice/questslice";
import Questions from "./components/myquestios/Questions";
import Gestionhumaine from "./components/humaine/Gestionhumaine";
import Performance22 from "./components/performance2/Performance22";
import Performance222 from "./components/performance22/Performance222";
import Performance5678 from "./components/performances/Performance5678";
import Performance4 from "./components/performance4/Performance4";
import Questioncli from "./components/climatique/Questioncli";
import Page1 from "./components/page1/Page1";
import UserData from "./components/dashboard/UserData";

function App() {
  const [ping, setPing] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin");

  useEffect(() => {
    if (token) {
      dispatch(currentUser());
      dispatch(getform());
      dispatch(getquest());
    }
  }, [dispatch]);

  return (
    <div>
      <Navbar ping={ping} />
      {token && isAdmin && <SideBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Errorpage />} />

        <Route element={<Adminroute />}>
          <Route
            path="/form1"
            element={<Formulaire ping={ping} setPing={setPing} />}
          />
          <Route path="/form2" element={<Formulaire2 />} />
          <Route path="/form3" element={<Signaletique />} />
          <Route path="/regle" element={<Reglementation />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/per1" element={<Performance1 />} />
          <Route path="/gestion" element={<Gestion />} />
          <Route path="/test" element={<Test />} />
          <Route path="/sythese" element={<Synthese />} />
          <Route path="/persone" element={<Personnel />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/adder" element={<Questions />} />
          <Route path="/gesthum" element={<Gestionhumaine />} />
          <Route path="/per2" element={<Performance22 />} />
          <Route path="/per22" element={<Performance222 />} />
          <Route path="/per4" element={<Performance4 />} />
          <Route path="/performances" element={<Performance5678 />} />
          <Route path="/climatique" element={<Questioncli />} />

          <Route path="/bloc1" element={<Bloc1 />} />
          <Route path="/bloc2" element={<Bloc2 />} />
          <Route path="/bloc3" element={<Bloc3 />} />
          <Route path="/bloc4" element={<Bloc4 />} />
          <Route path="/bloc5" element={<Bloc5 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/userdata" element={<UserData />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* <Route path="/logout" element={<Logout />} /> */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quest" element={<Questinsadd />} />

        <Route path="/chart" element={<Chartes />} />
      </Routes>
    </div>
  );
}

export default App;
