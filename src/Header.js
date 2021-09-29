import React from "react";
import { Button, Header, Image, Anchor} from 'grommet';
import {Cart, Search} from 'grommet-icons';
import spot from './multimedia/LOGO-HORIZONTAL-1-768x117.png';

function Headers(props){
  
  return(
  <Header background= "#007c9b">
    <Anchor>
      <Image
        src={spot}
        //fallback='//github.com/rojocarayolo/covid_y_tu/blob/Box/LOGO-HORIZONTAL-1-768x117.png?raw=true'
      />
    </Anchor>
    <Anchor size="large" color="ligth-1">Inicio</Anchor>
    <Anchor size="large" color="ligth-1">Tienda</Anchor>
    <Button 
      icon={<Search/>} 
      onClick={() => props.setSS2(!props.Searchs)}
    />         
    <Button
      icon={<Cart/>}
      onClick={() => props.setSS(!props.Sidebars)}
    />
    </Header>
  );
}
export default Headers;