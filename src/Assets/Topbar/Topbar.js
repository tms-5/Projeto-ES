import React, { useState } from 'react';
import TopbarMobile from './Topbar-mobile'
import TopbarDesktop from './Topbar-desktop'
import './Topbar.css'

export default function Topbar(){

    return(
        <div>       
            <TopbarDesktop/>
        </div>
    );
    }