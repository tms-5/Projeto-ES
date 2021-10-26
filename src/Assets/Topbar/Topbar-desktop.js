import React, { useState } from 'react';
import logo from '../Img/hemo.loc.png'
import menu from '../Img/menu-branco.png'

export default function TopbarDesktop(){

    return(
        <div className="row m-0">       
            <div className="col-2 bg-white">
                <img src={logo} className="w-web"/>
            </div>
            <div className="col bg-red detalhe-topbar c-white d-flex pl-0">
                <div className="bg-white" style={{width: "15px"}}> </div>
                <a>Início</a>
                <a>O que é hemo.loc?</a>
                <a>Posso doar sangue?</a>
                <a>Cadastre-se</a>
                <button>Entrar</button>
            </div>
        </div>
    );
    }