import React from "react";
import { Box, Image, Text, Footer, Anchor, Paragraph} from 'grommet';
import { Facebook, Instagram,Notes} from 'grommet-icons';
import cuca from '../multimedia/LOGO-HORIZONTAL-1-416x63.png';

function footer(){
  return(
    <Footer background= "#007c9b">  
      <Box pad="xsmall">
        <Image src={cuca}/>
        <Text>©Señor Tlacuache</Text>
      </Box>
      <Anchor color="ligth-1"><Notes/> Avisos legales</Anchor>
      <Box align="center" pad="xsmall">
        <Paragraph size="large">Siguenos en nuestras redes sociales</Paragraph>
        <Box direction="row">
          <Anchor icon={<Facebook size="large"/>} color="#FFFF" href="https://www.facebook.com/SrTlacuacheStore/"/>
          <Anchor icon={<Instagram size="large"/>} color="#FFFF" href="https://www.instagram.com/senor_tlacuache/"/>
        </Box>
      </Box>
    </Footer>
  );
}
export default footer;