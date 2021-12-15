import Footer from "../../Components/Footer/Footer";
import Topbar from "../../Components/Topbar/Topbar";
import banner from "../../Assets/Img/doacao-de-sangue-banner-1.jpg";
import FAQBody from "../../Assets/FAQ/FAQBody.js";
import { useContext } from "react";
import AuthContext from "../../contexts/auth";
import UserTopbar from "../../Components/Topbar/UserTopbar";
import AcessoTopbar from "../../Components/Topbar/AcessoTopbar";

export default function FAQ() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser ? <UserTopbar /> : <AcessoTopbar />}
      <img src={banner} width="100%" alt="paciente doando sangue" />
      <div className="container">
        <FAQBody />
      </div>

      <Footer />
    </>
  );
}
