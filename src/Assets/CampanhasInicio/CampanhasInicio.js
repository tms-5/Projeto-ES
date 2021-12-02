import { useEffect, useState } from "react";
import Estados from "../Estados/Estados";
import Campanha from "./Campanha";
import { collection, query, getDocs } from "firebase/firestore";
import db from "../../Axios/Firebase";

export default function CampanhasInicio() {
  const [city, setCity] = useState("");
  const [campanha, setCampanha] = useState([]);

  useEffect(() => {
    async function importQuery() {
      const q = query(collection(db, "campanha"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        handleChangeDados(doc.data());
      });
    }
    importQuery();
  }, []);

  const handleChangeDados = (data) => {
    setCampanha((prevState) => [...prevState, data]);
  };

  return (
    <div className="mt-5 mb-5">
      <h5 className="text-center c-red mb-3">Nos diga onde você está</h5>
      <div className="row text-center mt-5 mb-5 campanhas p-2">
        <Estados setCity={setCity} />
      </div>
      <div style={{ minHeight: "20vh" }}>
        {city === ""
          ? campanha.map((campanha, i) => {
              return <Campanha campanhas={campanha} key={i} />;
            })
          : campanha.map((campanha, i) => {
              if (campanha.cidade === city) {
                return <Campanha campanhas={campanha} key={i} />;
              }
              return;
            })}
      </div>
    </div>
  );
}
