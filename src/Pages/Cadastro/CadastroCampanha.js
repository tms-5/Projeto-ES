import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import Topbar from "../../Components/Topbar/Topbar";
import { useEffect, useRef, useState } from "react";
import Toast from "../../Assets/Toast/Toast.js";
import { doc, setDoc, collection, getDoc, updateDoc } from "firebase/firestore";
import db from "../../Axios/Firebase";
import FieldCampanha from "./FieldCampanha";
import fetchNotifications from '../../Services/Notification'

const CadastroCampanha = (props) => {
  const [dados, setDados] = useState({
    nome: {
      hasError: false,
      value: "",
      errorMessage: "Campo não pode ficar em branco.",
    },
    dataInicial: {
      hasError: false,
      value: "",
      errorMessage: "Data inicial campanha não pode ficar vazia.",
    },
    dataFinal: {
      hasError: false,
      value: "",
      errorMessage: "Data final da campanha não pode ficar vazia.",
    },
    cidade: {
      hasError: false,
      value: "",
      errorMessage: "Insira uma região válida.",
    },
    endereco: {
      hasError: false,
      value: "",
      errorMessage: "",
    },
    estado: {
      hasError: false,
      value: "",
      errorMessage: "",
    },
    hemocentro: {
      hasError: false,
      value: props.location.state.hemocentro
        ? props.location.state.hemocentro
        : props.hemocentro,
      errorMessage: "",
    },
    complemento: {
      hasError: false,
      value: "",
      errorMessage: "Campo de complemento não pode ficar em branco.",
    },
    observacao: {
      hasError: false,
      value: " ",
      errorMessage: "",
    },
    horario: {
      hasError: true,
      value: "",
      errorMessage: "Campos dos horários não podem ficar em branco.",
    },
  });
  const [campanha, setCampanha] = useState({});
  const childRef = useRef();

  useEffect(() => {
    if (props.location.state.id) {
      async function importQuery() {
        const q = doc(db, "campanha", props.location.state.id);
        const docSnap = await getDoc(q);
        if (docSnap.exists()) {
          setCampanha(docSnap.data());
        } else {
          window.location.reload();
        }
      }
      importQuery();
    }
  }, []);

  useEffect(() => {
    if (props.location.state.hemocentro) {
      dados.hemocentro.value = props.location.state.hemocentro;
    }
  });

  const fieldVerification = (field, value, size) => {
    if (value === "" || value === " " || value.length <= size) {
      handleChangeDados(field, "hasError", true);
    } else {
      handleChangeDados(field, "hasError", false);
    }
  };

  const beforeSave = async () => {
    fieldVerification("nome", dados.nome.value, 1);
    fieldVerification("dataInicial", dados.dataInicial.value, 1);
    fieldVerification("dataFinal", dados.dataFinal.value, 1);
    fieldVerification("cidade", dados.cidade.value, 1);
    fieldVerification("complemento", dados.complemento.value, 1);
    fieldVerification("endereco", dados.endereco.value, 0);
    fieldVerification("estado", dados.estado.value, 0);
    fieldVerification("hemocentro", dados.hemocentro.value, 1);
    fieldVerification("horario", dados.horario.value, 0);
    if (
      dados.nome.hasError === true ||
      dados.dataInicial.hasError === true ||
      dados.dataFinal.hasError === true ||
      dados.cidade.hasError === true ||
      dados.complemento.hasError === true ||
      dados.endereco.hasError === true ||
      dados.estado.hasError === true ||
      dados.hemocentro.hasError === true ||
      dados.horario.hasError === true
    ) {
      Toast.fire({
        icon: "error",
        title: "Verifique se todos os campos foram digitados corretamente.",
      });
    } else {
      props.location.state.id ? updateCampanhas() : fetchCampanhas();
    }
  };

  const handleChangeDados = (data, field, value) => {
    setDados((prevState) => ({
      ...prevState,
      [data]: {
        ...prevState[data],
        [field]: value,
      },
    }));
    return;
  };

  const fetchCampanhas = async () => {
    await setDoc(doc(collection(db, "campanha")), {
      nome: dados.nome.value,
      dataInicial: dados.dataInicial.value,
      dataFinal: dados.dataFinal.value,
      cidade: dados.cidade.value,
      complemento: dados.complemento.value,
      horario: dados.horario.value,
      hemocentro: dados.hemocentro.value,
      endereco: dados.endereco.value,
      estado: dados.estado.value,
      observacao: dados.observacao.value,
    })
      .then(() => {
        Toast.fire({
          icon: "sucess",
          title: "Campanha cadastrado com sucesso.",
        });
        window.location.href = "/hemocentro";
      })
      .catch((error) => {
        console.log(error);
        Toast.fire({
          icon: "error",
          title:
            "Não conseguimos recuperar alguns dados. Por favor atualize a página.",
        });
      });
  };

  const updateCampanhas = async () => {
    const docUpdate = doc(db, "campanha", props.location.state.id);
    await updateDoc(docUpdate, {
      nome: dados.nome.value,
      dataInicial: dados.dataInicial.value,
      dataFinal: dados.dataFinal.value,
      cidade: dados.cidade.value,
      complemento: dados.complemento.value,
      horario: dados.horario.value,
      hemocentro: dados.hemocentro.value,
      endereco: dados.endereco.value,
      estado: dados.estado.value,
      observacao: dados.observacao.value,
    })
      .then(() => {
        Toast.fire({
          icon: "sucess",
          title: "Campanha alterada com sucesso.",
        });
        window.location.href = "/hemocentro";
      })
      .catch((error) => {
        console.log(error);
        Toast.fire({
          icon: "error",
          title:
            "Não conseguimos recuperar alguns dados. Por favor atualize a página e tente novamente.",
        });
      });
  };

  return (
    <div className="font-montserrat p-relative" id="CadastroCampanha">
      <Topbar />
      <div className="mt-5 white-space">
        <Inicio
          text={
            props.location.state.id
              ? "Altere uma campanha"
              : "Cadastre uma campanha"
          }
          ilustracao={false}
        />
      </div>
      {props.location.state.id ? (
        <FieldCampanha ref={childRef} campanha={campanha} setDados={setDados} />
      ) : (
        <FieldCampanha
          ref={childRef}
          hemocentro={props.location.state.props}
          setDados={setDados}
        />
      )}
      <div className="col text-end mt-4 mb-3 container">
        {props.location.state.id ? (
          <button
            className="btn-red f-09"
            onClick={() => {
              fetchNotifications();
              beforeSave();
            }}
          >
            Salvar
          </button>
        ) : (
          <button
            className="btn-red f-09"
            onClick={() => {
              fetchNotifications();
              beforeSave();
            }}
          >
            Cadastrar campanha
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default CadastroCampanha;
