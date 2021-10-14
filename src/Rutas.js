import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inicio from './components/Inicio';
import ShopC from './components/APIS';
import Legal from './components/legals';
import Article from './components/article'

class Rutas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route path="/Tienda" component={ShopC}/>
                    <Route path="/Legales" component={Legal}/>
                    <Route path="/Articulo" component={Article}/>
                </Switch>
            </BrowserRouter>
        );
    }

}

export default Rutas