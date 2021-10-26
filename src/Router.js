import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Index from './Pages/Index/Index.js'

export default function Router() {   
    return (
        <BrowserRouter>
            <Route exact path="/" component={Index} />
            <Route exact path="/cadastro" component={Index} />
            <Route exact path="/login" component={Index} />
            <Route exact path="/inicio" component={Index} />
            <Route exact path="/sobre" component={Index} />
            <Route exact path="/doar-sangue" component={Index} />
        </BrowserRouter>
    )
}