import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CadastroCampanha from "./Pages/Cadastro/CadastroCampanha.js";
import CadastroHemocentro from "./Pages/Cadastro/CadastroHemocentro.js";
import CadastroUsuario from "./Pages/Cadastro/CadastroUsuario.js";
import FAQ from "./Pages/FAQ/FAQ.js";
import Hemocentro from "./Pages/Hemocentro/Hemocentro.js";
import Index from './Pages/Index/Index.js'
import Login from "./Pages/Login/Login.js";
import Sobre from "./Pages/Sobre/Sobre.js";

export default function Router() {   
    return (
        <BrowserRouter>
            <Route exact path="/" component={Index} />
            <Route exact path="/cadastro" component={CadastroUsuario} />
            <Route exact path="/cadastro-hemocentro" component={CadastroHemocentro} />
            <Route exact path="/cadastro-campanha" component={CadastroCampanha} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/hemocentro" component={Hemocentro} />
            <Route exact path="/sobre" component={Sobre} />
            <Route exact path="/doar-sangue" component={FAQ} />
        </BrowserRouter>
    )
}