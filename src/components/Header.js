import React from "react";
import { Button, Header, Image, Anchor} from 'grommet';
import {Cart, Search} from 'grommet-icons';
import spot from '../multimedia/LOGO-HORIZONTAL-1-768x117.png';

function Headers(props){
  return(
    <Header background= "#007c9b">
      <Anchor href="./">
        <Image
          src={spot}
          //fallback='//github.com/rojocarayolo/covid_y_tu/blob/Box/LOGO-HORIZONTAL-1-768x117.png?raw=true'
        />
      </Anchor>
      <Anchor size="large" color="#FFFFFF" href="./" reverse="true">Inicio</Anchor>
      <Anchor size="large" color="#FFFFFF" href="./Tienda" >Tienda</Anchor>
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