import React from 'react';
import '../../Assets/Utilitarios/Utilitarios.css'
import Topbar from '../../Assets/Topbar/Topbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Assets/Footer/Footer';

export default function Index(){

    return(
        <div className="font-montserrat">       
            <Topbar />  
            <Footer/>          
        </div>
    );
    }