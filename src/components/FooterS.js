import React, { Component } from "react";
import { Box, Image, Text, Footer, Anchor} from 'grommet';
import { Facebook, Instagram,Notes} from 'grommet-icons';
import cuca2 from '../multimedia/logo-tlacuache_Mesa-de-trabajo-1.png';

class footerS extends Component{
  render(){
    return(
      <Footer background= "#007c9b">  
        <Box pad="xsmall">
          <Image src={cuca2}/>
        </Box>
        <Anchor href="/Legales" color="#FFFFFF"><Notes/> Avisos legales</Anchor>
        <Box align="center" pad="xsmall">
          <Text>Siguenos en nuestras redes sociales</Text>
          <Box direction="row">
            <Anchor icon={<Facebook/>} color="#FFFFFF" href="https://www.facebook.com/SrTlacuacheStore/"/>
            <Anchor icon={<Instagram/>} color="#FFFFFF" href="https://www.instagram.com/senor_tlacuache/"/>
          </Box>
        </Box>
      </Footer>
    );
  }
      
}
export default footerS;