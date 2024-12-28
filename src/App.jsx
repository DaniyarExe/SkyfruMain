import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Activation from "./pages/Activation/Activation";
import { useEffect, useState } from "react";
import InfoPage from "./pages/InfoPage/InfoPage";
import Ticket from "./pages/Ticket/Ticket";
import Booking from "./pages/Booking/Booking";
import Profile from "./pages/Profile/Profile";
import DetailTicket from "./pages/DetailTicket/DetailTicket";
import { useSelector } from "react-redux";
import AllNews from "./pages/AllNews/AllNews";
import ReturnTicket from "./pages/ReturnTicket/ReturnTicket";
import { LanguageProvider } from "./components/UI/LangContext/LangContext";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const { picker } = useSelector((state) => state.picker);
  const navigate = useNavigate();
  const [local, setLocal] = useState();
  const location = useLocation();
  const lang = localStorage.getItem("lang");

  if (!lang) {
    localStorage.setItem("lang", "ru");
    lang = "ru";
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    setLocal(token);
  }, [location]);

  useEffect(() => {
    handleScroll();
  }, [location]);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (picker) {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [picker]);

  return (
    <LanguageProvider>
      <div className="App">
        <Header local={local} />
        <Routes>
          <Route path="/" element={<Navigate to={`/${lang}`} />} />
          <Route path={`/${lang}`} element={<Main />} />
          <Route path="/:lang/contact" element={<Contact />} />
          <Route path="/:lang/ticket" element={<Ticket />} />
          <Route path="/:lang/about" element={<About />} />
          <Route path="/:lang/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="about/:partner" element={<About />} />
          <Route path="login" element={<Login setLoginModal={setLoginModal} />} />
          <Route path="register" element={<Register />} />
          <Route
            path="activation"
            element={
              <Activation
                setLoginModal={setLoginModal}
                setRegisterModal={setRegisterModal}
              />
            }
          />
          <Route
            path="activation/:verify"
            element={
              <Activation
                setLoginModal={setLoginModal}
                setRegisterModal={setRegisterModal}
              />
            }
          />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="/:lang/info-page/:info" element={<InfoPage />} />
          <Route path="/:lang/info-page/:news/:info" element={<InfoPage />} />
          <Route path="/:lang/return" element={<ReturnTicket />} />
          <Route path="/:lang/booking" element={<Booking />} />
          <Route path="/:lang/about" element={<About />} />
          <Route path="/:lang/all-news" element={<AllNews />} />
          <Route
            path="dashboard"
            element={
              <Profile
                loginModal={loginModal}
                setLoginModal={setLoginModal}
                registerModal={registerModal}
                setRegisterModal={setRegisterModal}
              />
            }
          />
          <Route path="/:lang/detail-ticket/:ticket" element={<DetailTicket />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
