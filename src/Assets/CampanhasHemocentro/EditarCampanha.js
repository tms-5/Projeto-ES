import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import Topbar from "../../Components/Topbar/Topbar";
import { useRef, useState } from "react";
import Toast from "../../Assets/Toast/Toast.js";
import { doc, setDoc, collection } from "firebase/firestore";
import db from "../../Axios/Firebase";
import FieldCampanha from "./FieldCampanha";

const EditarCampanha = (props) => {
  const [dados, setDados] = useState({
    nome: {
      hasError: false,
      value: "",
      errorMessage: "Campo não pode ficar em branco.",
    },
    data: {
      hasError: false,
      value: "",
      errorMessage: "Data da campanha não pode ficar vazia.",
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
      value: props.hemocentro,
      errorMessage: "",
    },
    complemento: {
      hasError: false,
      value: "",
      errorMessage: "Campo de complemento não pode ficar em branco.",
    },
    observacao: {
      hasError: false,
      value: "",
      errorMessage: "",
    },
    horario: {
      hasError: true,
      value: "",
      errorMessage: "Campos dos horários não podem ficar em branco.",
    },
  });
  const childRef = useRef();

  const fetchCampanhas = async () => {
    await setDoc(doc(collection(db, "campanha")), {
      nome: dados.nome.value,
      data: dados.data.value,
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

  const fieldVerification = (field, value, size) => {
    if (value === "" || value === " " || value.length <= size) {
      handleChangeDados(field, "hasError", true);
    } else {
      handleChangeDados(field, "hasError", false);
    }
  };

  const beforeSave = () => {
    fieldVerification("nome", dados.nome.value, 1);
    fieldVerification("data", dados.data.value, 1);
    fieldVerification("cidade", dados.cidade.value, 1);
    fieldVerification("complemento", dados.complemento.value, 1);
    fieldVerification("endereco", dados.endereco.value, 0);
    fieldVerification("estado", dados.estado.value, 0);
    fieldVerification("hemocentro", dados.hemocentro.value, 0);
    fieldVerification("horario", dados.horario.value, 0);
    if (
      dados.nome.hasError === true ||
      dados.data.hasError === true ||
      dados.cidade.hasError === true ||
      dados.complemento.hasError === true ||
      dados.endereco.hasError === true ||
      dados.estado.hasError === true ||
      dados.hemocentro.hasError === true ||
      dados.horario.hasError === true ||
      document.querySelector("#DataFinalCampanha").value === "" ||
      document.querySelector("#DataInicioCampanha").value === ""
    ) {
      Toast.fire({
        icon: "error",
        title: "Verifique se todos os campos foram digitados corretamente.",
      });
    } else {
      fetchCampanhas();
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

  return (
    <div className="font-montserrat p-relative" id="CadastroCampanha">
      <Topbar />
      <div className="mt-5 white-space">
        <Inicio text={"Cadastre uma campanha"} ilustracao={false} />
      </div>
      <FieldCampanha
        ref={childRef}
        hemocentro={props.location.state.props}
        setDados={setDados}
      />
      <div className="col text-end mt-4 mb-3 container">
        <button
          className="btn-red f-09"
          onClick={async () => {
            beforeSave();
          }}
        >
          Salvar
        </button>
      </div>
      <Footer />
    </div>
  );
};
export default EditarCampanha;
