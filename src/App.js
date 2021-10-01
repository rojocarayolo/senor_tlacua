import React, {useState} from "react";
import { Box, Grommet, ResponsiveContext, Collapsible, TextInput, Button} from 'grommet';
import {Search,} from 'grommet-icons';
import Rutas from "./Rutas";

import Shopcart from "./components/Shopcart";
import ShopcartS from "./components/ShopcartS";

import Headers from "./components/Header";
import HeaderS from "./components/HeadreS";

import Footers from "./components/Footer";
import FooterS from "./components/FooterS";

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
                <Rutas/>
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