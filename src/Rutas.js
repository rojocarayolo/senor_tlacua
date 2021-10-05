import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inicio from './components/Inicio';
import ShopC from './components/ShopC';
import Legal from './components/legals'

class Rutas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route path="/Tienda" component={ShopC}/>
                    <Route path="/Legales" component={Legal}/>
                </Switch>
            </BrowserRouter>
        );
    }

}

export default Rutas