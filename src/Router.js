import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CadastroHemocentro from "./Pages/Cadastro/CadastroHemocentro.js";
import CadastroUsuario from "./Pages/Cadastro/CadastroUsuario.js";
import Index from './Pages/Index/Index.js'
import Login from "./Pages/Login/Login.js";

export default function Router() {   
    return (
        <BrowserRouter>
            <Route exact path="/" component={Index} />
            <Route exact path="/cadastro" component={CadastroUsuario} />
            <Route exact path="/cadastro-hemocentro" component={CadastroHemocentro} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/inicio" component={Index} />
            <Route exact path="/sobre" component={Index} />
            <Route exact path="/doar-sangue" component={Index} />
        </BrowserRouter>
    )
}