import React, {useState} from "react";
import { Button, Header, Image, Anchor, Box, TextInput,} from 'grommet';
import {Cart, Close, Search} from 'grommet-icons';
import spot from '../multimedia/LOGO-HORIZONTAL-1-416x63.png';

function Headers(props){
  const [showSearchs, setShowSearchs] = useState(false);
  return(
    <Box background= "#007c9b">
      <Header pad="small">
        <Anchor href="./">
          <Image
            src={spot}
            //fallback='//github.com/rojocarayolo/covid_y_tu/blob/Box/LOGO-HORIZONTAL-1-768x117.png?raw=true'
          />
        </Anchor>
        <Box align="end">
            
            <Button
              icon={<Cart/>}
              onClick={() => props.setSS(!props.Sidebars)}
              hoverIndicator
            />
            {(!showSearchs)?(
              <Button
              icon={<Search/>}
              onClick={() => setShowSearchs(!showSearchs)}
              hoverIndicator
            />
            ):(
            <Box direction="row">
            <Box background="light-4" direction="row">
              <TextInput placeholder="Busca algun producto" icon={<Search/>}/>  
            </Box>
            <Button
              icon={<Close size="small"/>}
              onClick={() => setShowSearchs(!showSearchs)}
              hoverIndicator
              />
            </Box>
            )}
            
        </Box>           
      </Header>
      <Box direction="row" pad={{horizontal:"xlarge",vertical:"medium"}} gap="large">
        <Anchor size="large" color="#FFFFFF" href="./" label="Inicio"/>
        <Anchor size="large" color="#FFFFFF" href="./Tienda" label="Tienda"/>
      </Box> 
    </Box>
  );
}
export default Headers;