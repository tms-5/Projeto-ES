import React, { useState } from 'react';
import logo from '../Img/hemo.loc-branco.png'
import menu from '../Img/menu-branco.png'

export default function TopbarMobile(){

    return(
        <div className="row bg-red">       
            <div className="col-3">
                <img src={logo} />
            </div>
            <div className="col">
                <button><img src={menu}/></button>
            </div>
        </div>
    );
    }