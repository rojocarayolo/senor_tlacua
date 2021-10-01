import React, {useState} from "react";
import { Box, Button, Collapsible, Grommet, ResponsiveContext, Carousel,
  Video, Heading, TextInput,} from 'grommet';
import {Search,} from 'grommet-icons';

import video from './multimedia/tlacuache_spot_2.mp4';
import video2 from './multimedia/video-disco.mp4'

import Shopcart from "./componets/Shopcart";
import ShopcartS from "./components/ShopcartS";

import Categories from "./componets/Categories"
import CategoriesS from "./componets/CategoriesS"

import Cards from "./componets/Cards"
import CardsS from "./componets/CardsS"

import Headers from "./componets/Header";
import HeaderS from "./componets/HeadreS";

import Footers from "./componets/Footer";
import FooterS from "./componets/FooterS";

//import yute from "./multimedia/fondo-yute-cafe.jpg"

const theme = {
  colors: {
         brand: '#228BE6',
       },
  global: {
    font: {
      family: 'oswald',
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
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Grommet theme={theme} full background={backprp}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box>
            {(size!=='small')?(
              <Headers 
                setSS={setShowSidebar}
                setSS2={setShowSearch}
                Searchs={showSearch} 
                Sidebars={showSidebar}
              />
              ):(
              <HeaderS
                setSS={setShowSidebar}
                setSS2={setShowSearch}
                Searchs={showSearch} 
                Sidebars={showSidebar}
              />)}
            <Box direction="row">
              <Box>
                <Collapsible  open={showSearch}>
                  <Box background="#00637c" pad="medium">
                    <TextInput placeholder="Busca algun producto" icon={<Search/>}/>
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
                {(size!=='small')?(<Cards/>):(<CardsS/>)}
                {(size === 'small')?(
                  <Box align="center">
                    <Heading color="#004D75" level="2">Conoce nuestros productos</Heading>
                  </Box>
                ):(
                  <Box align="center">
                    <Heading color="#004D75">Conoce nuestros productos</Heading>
                  </Box>
                )}
                {(size!=='small')?(<Categories/>):(<CategoriesS/>)}    
              </Box>
              {(!showSidebar || size !== 'small')
                ?(<Shopcart Sidebars={showSidebar}/>)
                :(<ShopcartS setSS={setShowSidebar}/>)
              }   
            </Box>
            {(size!=='small')?(<Footers/>):(<FooterS/>)}        
          </Box>   
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;