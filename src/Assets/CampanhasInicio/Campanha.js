import React, { useEffect, useState } from "react";
import pin from "../Img/pin.png";
import complemento from "../Img/home-address.png";
import calendar from '../Img/calendar.png'
import clock from '../Img/clock.png'

export default function Campanha(props) {
  const [campanha, setCampanha] = useState({});

  useEffect(() => {
    setCampanha(props.campanhas);
  }, [campanha]);

  return (
    <div className="mt-3">
        <div className="linha-horizontal mb-3"></div>
      <h5 className="c-red fw-500">{campanha.nome}</h5>
      <div className="row pt-2 mb-1 f-08">
        <div className="col">
          <img src={pin} width="12px" />
          &nbsp;&nbsp;&nbsp;{campanha.endereço}
        </div>
        <div className="col">
          <img src={complemento} width="12px" />
          &nbsp;&nbsp;&nbsp;{campanha.complemento}
        </div>
      </div>
      <div className="row pt-2 mb-1 f-08">
        <div className="col c-red">
          <img src={calendar} width="12px" />
          &nbsp;&nbsp;&nbsp;{campanha.data}
        </div>
        <div className="col">
          <img src={clock} width="12px" />
          &nbsp;&nbsp;&nbsp;{campanha.complemento}
        </div>
      </div>
    </div>
  );
}
