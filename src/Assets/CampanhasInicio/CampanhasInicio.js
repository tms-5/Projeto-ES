import { useState } from "react";
import Estados from "../Estados/Estados";
import Campanha from "./Campanha";

export default function CampanhasInicio() {
  let campanhas = require("../JSON/Campanha.json");
  const [city, setCity] = useState({})  

  return (
    <div className="mt-5 mb-5">
      <h5 className="text-center c-red mb-3">Nos diga onde você está</h5>
      <div className="row text-center mt-5 mb-5 campanhas p-2">
       <Estados setCity={setCity}/>
      </div>
      {campanhas.map((campanha, i) => {
        return <Campanha campanhas={campanha} key={i} />;
      })}
    </div>
  );
}
