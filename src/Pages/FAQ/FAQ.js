import Footer from "../../Components/Footer/Footer";
import Topbar from "../../Components/Topbar/Topbar";
import banner from "../../Assets/Img/doacao-de-sangue-banner-1.jpg";
import FAQBody from "../../Assets/FAQ/FAQBody.js";


export default function FAQ() {
  return (
    <div className="font-montserrat">
      <Topbar />
      <img src={banner} width="100%" alt="paciente doando sangue" />
      <div className="container">
        <FAQBody />
      </div>
      
      <Footer />
    </div>
  );
}
