import React from 'react';
import TopbarMobile from './Topbar-mobile'
import TopbarDesktop from './Topbar-desktop'
import './Topbar.css'

export default function Topbar(){

    return(
        <div id="Topbar">       
            <TopbarDesktop/>
            <TopbarMobile/>
        </div>
    );
    }