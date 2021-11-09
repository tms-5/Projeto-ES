import ViaCep from "react-via-cep/dist/components/ViaCep";
import Footer from "../../Components/Footer/Footer";
import Inicio from "../../Assets/Inicio/Inicio";
import Topbar from "../../Components/Topbar/Topbar";
import { useState } from "react";

export default function CadastroCampanha() {
  const [endereco, setEndereco] = useState({});
  const [cep, setCep] = useState("");
  return (
    <div className="font-montserrat p-relative" id="CadastroCampanha">
      <Topbar />
      <div className="mt-5">
        <Inicio text={"Cadastre uma campanha"} ilustracao={false} />
      </div>
      <div className="container" style={{ minHeight: "58vh" }}>
        <div className="row">
          <div className="col">
            <div>Nome da campanha</div>
            <input
              type="text"
              className="form-control f-09"
              placeholder="Digite o nome da campanha"
            />
          </div>
          <div className="col">
            <div>Data da campanha</div>
            <div className="d-flex align-center">
              <input
                type="date"
                className="form-control f-09 w-50 mr-1r"
                placeholder="Digite o complemento do endereço"
              />
              até
              <input
                type="date"
                className="form-control f-09 w-50 ml-1r"
                placeholder="Digite o complemento do endereço"
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <ViaCep cep={cep} lazy>
              {({ data, fetch }) => {
                if (data) {
                  setEndereco(data);
                }
                return (
                  <div>
                    CEP{" "}
                    <input
                      type="number"
                      className="form-control f-09"
                      placeholder="Digite seu CEP"
                      onBlur={fetch}
                      onChange={(e) => setCep(e.target.value)}
                    />
                  </div>
                );
              }}
            </ViaCep>
            <div>Endereço da campanha</div>
            <input
              type="text"
              className="form-control f-09"
              value={endereco.logradouro}
              readOnly
            />
          </div>
          <div className="col">
            <div>Complemento do endereço</div>
            <input
              type="text"
              className="form-control f-09"
              placeholder="Digite o complemento do endereço"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div>Horário da campanha</div>
          <div className="col">
            <div className="d-flex mt-1">
              <div class="circle mr-1r">
                <p class="circle-content f-09 fw-500">SEG</p>
              </div>
              <input
                type="number"
                className="form-control f-09 w-25 mr-1r"
                placeholder="Das"
              />
              -
              <input
                type="number"
                className="form-control f-09 w-25 ml-1r"
                placeholder="às"
              />
            </div>
            <div className="d-flex mt-1">
              <div class="circle mr-1r">
                <p class="circle-content f-09 fw-500">TER</p>
              </div>
              <input
                type="number"
                className="form-control f-09 w-25 mr-1r"
                placeholder="Das"
              />
              -
              <input
                type="number"
                className="form-control f-09 w-25 ml-1r"
                placeholder="às"
              />
            </div>
            <div className="d-flex mt-1">
              <div class="circle mr-1r">
                <p class="circle-content f-09 fw-500">QUA</p>
              </div>
              <input
                type="number"
                className="form-control f-09 w-25 mr-1r"
                placeholder="Das"
              />
              -
              <input
                type="number"
                className="form-control f-09 w-25 ml-1r"
                placeholder="às"
              />
            </div>
            <div className="d-flex mt-1">
              <div class="circle mr-1r">
                <p class="circle-content f-09 fw-500">QUI</p>
              </div>
              <input
                type="number"
                className="form-control f-09 w-25 mr-1r"
                placeholder="Das"
              />
              -
              <input
                type="number"
                className="form-control f-09 w-25 ml-1r"
                placeholder="às"
              />
            </div>
            <div className="d-flex mt-1">
              <div class="circle mr-1r">
                <p class="circle-content f-09 fw-500">SEX</p>
              </div>
              <input
                type="number"
                className="form-control f-09 w-25 mr-1r"
                placeholder="Das"
              />
              -
              <input
                type="number"
                className="form-control f-09 w-25 ml-1r"
                placeholder="às"
              />
            </div>
          </div>
          <div className="col">
            <div className="d-flex mt-1">
              <div class="circle mr-1r">
                <p class="circle-content f-09 fw-500">SÁB</p>
              </div>
              <input
                type="number"
                className="form-control f-09 w-25 mr-1r"
                placeholder="Das"
              />
              -
              <input
                type="number"
                className="form-control f-09 w-25 ml-1r"
                placeholder="às"
              />
            </div>
            <div className="d-flex mt-2">
              <div class="circle mr-1r">
                <p class="circle-content f-09 fw-500">DOM</p>
              </div>
              <input
                type="number"
                className="form-control f-09 w-25 mr-1r"
                placeholder="Das"
              />
              -
              <input
                type="number"
                className="form-control f-09 w-25 ml-1r"
                placeholder="às"
              />
            </div>
          </div>
        </div>
        <div className="col text-end mt-4 mb-3">
          <button className="btn-red f-09">Cadastrar campanha</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
