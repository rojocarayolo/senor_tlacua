import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inicio from './components/Inicio';
import ShopC from './ShopC';

class Rutas extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Inicio} />
                    <Route path="/Tienda" component={ShopC}/>
                </Switch>
            </BrowserRouter>
        );
    }

}

export default Rutas