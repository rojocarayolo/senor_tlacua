import React from "react";
import { Box, Image, Text, Footer, Anchor} from 'grommet';
import { Facebook, Instagram,Notes} from 'grommet-icons';
import cuca2 from './multimedia/logo-tlacuache_Mesa-de-trabajo-1.png';

function footerS(){
  return(
    <Footer background= "#007c9b">  
      <Box pad="xsmall">
        <Image src={cuca2}/>
      </Box>
      <Anchor color="ligth-1"><Notes/> Avisos legales</Anchor>
      <Box align="center" pad="xsmall">
        <Text>Siguenos en nuestras redes sociales</Text>
        <Box direction="row">
          <Anchor icon={<Facebook/>} color="#FFFF" href="https://www.facebook.com/SrTlacuacheStore/"/>
          <Anchor icon={<Instagram/>} color="#FFFF" href="https://www.instagram.com/senor_tlacuache/"/>
        </Box>
      </Box>
    </Footer>
  );    
}
export default footerS;