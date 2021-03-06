import React, { Component } from "react";
import { Box, Image, Text, Footer, Anchor, Paragraph} from 'grommet';
import { Facebook, Instagram,Notes} from 'grommet-icons';
import cuca from '../multimedia/LOGO-HORIZONTAL-1-416x63.png';

class footer extends Component{
  render(){
    return(
      <Footer background= "#007c9b">  
        <Box pad="xsmall">
          <Image src={cuca}/>
          <Text>©Señor Tlacuache</Text>
        </Box>
        <Anchor href="/Legales" color="#FFFFFF"><Notes/> Avisos legales</Anchor>
        <Box align="center" pad="xsmall">
          <Paragraph size="large" >Siguenos en nuestras redes sociales</Paragraph>
          <Box direction="row">
            <Anchor icon={<Facebook size="large"/>} color="#FFFFFF" href="https://www.facebook.com/SrTlacuacheStore/"/>
            <Anchor icon={<Instagram size="large"/>} color="#FFFFFF" href="https://www.instagram.com/senor_tlacuache/"/>
          </Box>
        </Box>
      </Footer>
    );
  }
  
}
export default footer;