import { useEffect, useState } from "react";
import Estados from "../Estados/Estados";
import Campanha from "./Campanha";
import API from "../../Axios/API.js";
import Toast from "../Toast/Toast.js";

export default function CampanhasInicio() {
  /*let campanhas = require("../JSON/Campanha.json");*/
  const [city, setCity] = useState("");
  const [campanhas, setCampanhas] = useState([]);
  useEffect(() => {
    const fetchCampanhas = async () => {
      await API.get("/campanha")
        .then((resp) => {
          setCampanhas(resp.data);
        })
        .catch((erro) => {
          Toast.fire({
            icon: "error",
            title:
              "Não conseguimos recuperar alguns dados. Por favor atualize a página.",
          });
        });
    };
    fetchCampanhas();
  }, []);

  return (
    <div className="mt-5 mb-5">
      <h5 className="text-center c-red mb-3">Nos diga onde você está</h5>
      <div className="row text-center mt-5 mb-5 campanhas p-2">
        <Estados setCity={setCity} />
      </div>
      <div style={{ minHeight: "20vh" }}>
        {city === ""
          ? campanhas.map((campanha, i) => {
              return <Campanha campanhas={campanha} key={i} />;
            })
          : campanhas.map((campanha, i) => {
              if (campanha.cidade === city) {
                return <Campanha campanhas={campanha} />;
              }
            })}
      </div>
    </div>
  );
}
