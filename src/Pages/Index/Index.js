import React from "react";
import Topbar from "../../Assets/Topbar/Topbar.js";
import Footer from "../../Assets/Footer/Footer";
import Inicio from "../Inicio/Inicio";

export default function Index() {
  return (
    <div className="font-montserrat">
      <Topbar />
      <Inicio />
      <Footer />
    </div>
  );
}
