import { useEffect, useState } from "react";
import Estados from "../Estados/Estados";
import Campanha from "./Campanha";
import API from "../../Axios/API.js";

export default function CampanhasInicio() {
  /*let campanhas = require("../JSON/Campanha.json");*/
  const [city, setCity] = useState({});
  const [campanhas, setCampanhas] = useState();
  useEffect(() => {
    const fetchCampanhas = async () => {
      const response = await API.get("/campanha");
      const postData = await response.data;
      setCampanhas(postData);
    };
    fetchCampanhas();
  }, []);

  return (
    <div className="mt-5 mb-5">
      <h5 className="text-center c-red mb-3">Nos diga onde você está</h5>
      <div className="row text-center mt-5 mb-5 campanhas p-2">
        <Estados setCity={setCity} />
      </div>
      {campanhas.map((campanha, i) => {
        return <Campanha campanhas={campanha} key={i} />;
      })}
    </div>
  );
}