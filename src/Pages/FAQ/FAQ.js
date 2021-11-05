import Footer from "../../Assets/Footer/Footer";
import Topbar from "../../Assets/Topbar/Topbar";
import banner from '../../Assets/Img/doacao-de-sangue-banner-1.jpg'
export default function FAQ() {

  return (
    <div className="font-montserrat">
      <Topbar />
      <img src={banner} width="100%" alt="paciente doando sangue"/>
      <Footer />
    </div>
  );
}
