import React, {useState} from "react";
import {
  Box,
  Button,
  Collapsible,
  Grommet,
  ResponsiveContext,
  Carousel,
  Video,
  Heading,
  TextInput
  } from 'grommet';
import {Search} from 'grommet-icons';

import video from './multimedia/tlacuache_spot_2.mp4';
import video2 from './multimedia/video-disco.mp4'

//import shopcart from "./shopcart";
//import shopcartS from "./shopcartS";

import categories from "./Categories"
import categoriesS from "./CategoriesS"

import cards from "./cards"
import cardsS from "./CardsS"

//import headers from "./header";
//import headerS from "./headreS";

import footers from "./Footer";
import footerS from "./FooterS";

const theme = {
  colors: {
         brand: '#228BE6',
       },
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const backprp ={
  image: "url('https://github.com/rojocarayolo/senor_tlacua/blob/master/src/multimedia/fondo-yute-cafe.jpg?raw=true')"
};

//const texti={color: '#f2c900'}

function App() {
  const [showSidebar] = useState(false);
  const [showSearch] = useState(false);
  return (
    <Grommet theme={theme} full background={backprp}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box>
            
            ///////////////Header////////////////////////
            {(size !== 'small')?(<headers/>):(<headerS/>)}
            /////////////////////////////////////
            <Box direction="row">
              <Box>
                <Collapsible  open={showSearch}>
                  <Box
                    background="#00637c"
                    pad="medium"
                  >
                    <TextInput placeholder="Busca algun producto" icon={<Search/>} 
                      //theme={texti}
                    />
                    <br/> 
                    <Button primary label="Buscar" color="#f2c900"/>
                  </Box>
                </Collapsible>
                <Carousel play="45000">
                  <Video controls="false" autoPlay loop mute>
                      <source key="video" src={video} type="video/mp4"/>    
                  </Video>
                  <Video controls="false" autoPlay loop mute>
                      <source key="video" src={video2} type="video/mp4"/>    
                  </Video>
                </Carousel>
                ////////////////Cards//////////////////
                {(size !== 'small')?(<cards/>):(<cardsS/>)}
                ///////////////////////////////////////////////////////////
                {(size === 'small')?(
                  <Box align="center">
                    <Heading color="#004D75" level="2">Conoce nuestros productos</Heading>
                  </Box>
                ):(
                  <Box align="center">
                    <Heading color="#004D75">Conoce nuestros productos</Heading>
                  </Box>
                )}
                ////////////////////////categories///////////////
                {(size !== 'small')?(<categories/>):(<categoriesS/>)}
                /////////////////////////////////////////////                
              </Box>
              ////////Shoping Cart////////
              {(!showSidebar || size !== 'small')?(<shopcart/>):(<shopcartS/>)}
              ////////////////////////////////////  
            </Box>
            ////////Footer////////
            {(size !== 'small')?(<footers/>):(<footerS/>)}
            ////////////////////////////////////      
          </Box>   
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;