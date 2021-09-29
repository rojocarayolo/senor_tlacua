import React from "react";
import { Button, Header, Image, Anchor} from 'grommet';
import {Shop, Cart, Home, Search} from 'grommet-icons';
import spot2 from './multimedia/image4229.png';

function HeaderS(props){
  return(
    <Header pad="xsmall" background= "#007c9b">
        <Anchor>
          <Image
            src={spot2}
            //fallback='//github.com/rojocarayolo/covid_y_tu/blob/Box/LOGO-HORIZONTAL-1-768x117.png?raw=true'
          />
        </Anchor>  
        
        <Anchor icon={<Home/>} color="#ffff"/>
        <Anchor icon={<Shop/>} color="#ffff"/>
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
export default HeaderS;