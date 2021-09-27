import React, { useState } from "react";
import {
  Box,
  Button,
  Collapsible,
  Header,
  Image,
  Grommet,
  Layer,
  ResponsiveContext,
  Carousel,
  Video,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Paragraph,
  Text,
  Footer,
  Anchor,
  TextInput,
  //Accordion,
  //AccordionPanel,
  //Menu
  } from 'grommet';
import { Facebook, FormClose, Instagram, Shop, Cart, Home, Search,Notes} from 'grommet-icons';
import spot from './multimedia/LOGO-HORIZONTAL-1-768x117.png';
import video from './multimedia/tlacuache_spot_2.mp4';
import video2 from './multimedia/video-disco.mp4'
import spot2 from './multimedia/image4229.png';
import cuca from './multimedia/LOGO-HORIZONTAL-1-416x63.png';
import cuca2 from './multimedia/logo-tlacuache_Mesa-de-trabajo-1.png';
import patio from './multimedia/patio.jpeg';
import vista from './multimedia/vista.jpeg';
import mate1 from './multimedia/text001-150x150.jpg';
import mate2 from './multimedia/text002-150x150.jpg';
import mate3 from './multimedia/text003-150x150.jpg';
import mate4 from './multimedia/text004-150x150.jpg';
import mate5 from './multimedia/text005-150x150.jpg';
import mate6 from './multimedia/text006-150x150.jpg';
import mate7 from './multimedia/text001-100x100.jpg';
import mate8 from './multimedia/text002-100x100.jpg';
import mate9 from './multimedia/text003-100x100.jpg';
import mate10 from './multimedia/text004-100x100.jpg';
import mate11 from './multimedia/text005-100x100.jpg';
import mate12 from './multimedia/text006-100x100.jpg';



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
  image: "url('https://github.com/rojocarayolo/grom-test/blob/master/src/multimedia/fondo-yute-cafe.jpg?raw=true')"
};

const texti={
  
  color: '#f2c900'
  
}
/*const backprp2 ={
  size:"cover",
  image: "url(https://github.com/rojocarayolo/covid_y_tu/blob/main/fondo-yute-cafe.jpg?raw=true)"
};
<Accordion>
                    <AccordionPanel label="Tenda">
                      <Box pad="medium" background="light-2">
                        <Text>Todos los productos</Text>
                      </Box>
                      <Box>
                      
                      </Box>
                    </AccordionPanel>
                  </Accordion>
<Accordion>
                        <AccordionPanel label="Materiales">
                          <Box pad="medium" background="light-2">
                            <Text>Priedra</Text>
                          </Box>
                          <Box pad="medium" background="light-2">
                            <Text>Ceramica</Text>
                          </Box>
                          <Box pad="medium" background="light-2">
                            <Text>Madera</Text>
                          </Box>
                          <Box pad="medium" background="light-2">
                            <Text>Metal</Text>
                          </Box>
                          <Box pad="medium" background="light-2">
                            <Text>Plastico</Text>
                          </Box>
                          <Box pad="medium" background="light-2">
                            <Text>Vidrio</Text>
                          </Box>
                        </AccordionPanel>
                        
                      </Accordion>
*/


const missionHead= "Con tu ayuda podemos hacer un mundo más sustentable y comprometido con los recursos producidos y su reciclaje.";
const misssionBody= "Nos mueve el respeto y la responsabilidad por nuestro entorno, por ese motivo reunimos para ti antigüedades y objetos que te permitan revivir el pasado y darle una nueva perspectiva al ahora. Nuestro espacio reúne una selecta colección de artesanías, manualidades y productos de segunda mano que serán reutilizados, con la finalidad de dar un toque alternativo e innovador a la decoración de hogares y establecimientos comerciales de nuestra región y de todo el país.";
const usBody= "Estamos ubicados en el corazón de la Riviera Maya en Tulum, Quintana Roo; un lugar donde el pasado y el presente se combinan para dar forma a nuevos significados, imágenes y sensaciones. Hemos diseñado un espacio creativo en donde recolectamos, imaginamos y le devolvemos la vida útil a una serie de artículos que algunos pueden llegar a considerar basura o desperdicio.";
/*const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );
  background="url(https://github.com/rojocarayolo/covid_y_tu/blob/main/fondo-yute-cafe.jpg?raw=true)"
  */

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Grommet theme={theme} full background={backprp}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box>
            {(size === 'small')?(
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
                    onClick={() => setShowSearch(!showSearch)}
                  />
                  
                  <Button
                   icon={<Cart/>}
                   onClick={() => setShowSidebar(!showSidebar)}
                  />
              </Header>
            ):(
              <Header background= "#007c9b">
                  <Anchor>
                    <Image
                      src={spot}
                      //fallback='//github.com/rojocarayolo/covid_y_tu/blob/Box/LOGO-HORIZONTAL-1-768x117.png?raw=true'
                    />
                  </Anchor>
                  <Anchor size="large" color="ligth-1">Inicio</Anchor>
                  <Anchor size="large" color="ligth-1">Tienda</Anchor>
                  <Button 
                    icon={<Search/>} 
                    onClick={() => setShowSearch(!showSearch)}
                  />         
                  <Button
                   icon={<Cart/>}
                   onClick={() => setShowSidebar(!showSidebar)}
                  />
              </Header>
            )}        
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
                <Box align="center">
                  {(size === 'small')
                    ?(<Heading  color="#004D75">Sobre nosotros</Heading>)
                    :(<Heading size="large" color="#004D75">Sobre nosotros</Heading>)
                  }
                  {(size === 'small')?(
                    <Box  background= "#007c9b" pad="xlarge">
                      <Box pad="medium">
                        <Card  width="medium" background="#e2ae34" align="center" pad="large">
                          <CardHeader><Heading color="light-1">Nosotros</Heading></CardHeader>
                          <CardBody><Text color="#004D75" size="small">{usBody}</Text> <br/><Image src={patio}/></CardBody>
                        </Card>
                      </Box>
                      <Box pad="medium" align="center">
                        <Card width="medium" background="light-1" align="center" pad="large">
                            <CardHeader ><Paragraph color="#f2c900">{missionHead}</Paragraph></CardHeader>
                            <CardBody>
                              <Text color="#004D75" size="small">{misssionBody}</Text>
                              <br/><Image src={vista}/>
                              </CardBody>
                        </Card>
                      </Box>
                    </Box>
                  ):(
                    <Box direction="row" background= "#007c9b" pad="large">
                      <Box pad="large" align="center">
                        <Card  width="large" background="#e2ae34" align="center"pad="large">
                          <CardHeader><Heading color="light-1" >Nosotros</Heading></CardHeader>
                          <CardBody>
                            <Text color="#004D75" size="large">{usBody}</Text>
                            <br />
                            <Box width="large"><Image fit="cover" src={patio}/></Box>
                          </CardBody>
                        </Card>
                      </Box>
                      <Box pad="large" align="center">
                        <Card width="large" background="light-1" align="center" pad="large">
                            <CardHeader ><Paragraph color="#f2c900" size="xlarge">{missionHead}</Paragraph></CardHeader>
                            <CardBody>
                              <Text color="#004D75">{misssionBody}</Text>
                              <br /><Box width="large"><Image fit="cover" src={vista}/>
                              </Box></CardBody>
                        </Card>
                      </Box>
                    </Box>
                  )}
                </Box>
                {(size === 'small')?(
                  <Box align="center">
                    <Heading color="#004D75" level="2">Conoce nuestros productos</Heading>
                  </Box>
                ):(
                  <Box align="center">
                    <Heading color="#004D75">Conoce nuestros productos</Heading>
                  </Box>
                )}
                {(size === 'small')?(
                  <Box align="center">
                    <Heading color="#004D75" level="1">Busca por categoria</Heading>
                    <Box direction="row">
                      <Anchor color="light-1">
                        <Box align="center" pad="medium">
                          <Image src={mate7}/>
                          <br/><Text>Piedra</Text>
                        </Box>
                      </Anchor>
                      <Anchor color="light-1">
                        <Box align="center" pad="medium">
                          <Image src={mate8}/>
                          <br/><Text>Vidrio</Text>
                        </Box>
                      </Anchor>                     
                      <Anchor color="light-1">
                        <Box align="center" pad="medium">
                          <Image src={mate9}/>
                          <br/><Text>Plastico</Text>
                        </Box>
                      </Anchor>
                      </Box>
                      <Box direction="row">
                      <Anchor color="light-1">
                        <Box align="center" pad="medium">
                          <Image src={mate10}/>
                          <br/><Text>Metal</Text>
                        </Box>
                      </Anchor>
                      <Anchor color="light-1">
                        <Box align="center" pad="medium">
                          <Image src={mate11}/>
                          <br/><Text>Madera</Text>
                        </Box>
                      </Anchor>                      
                      <Anchor color="light-1">
                        <Box align="center" pad="medium">
                          <Image src={mate12}/>
                          <br/><Text>Ceramica</Text>
                        </Box>
                      </Anchor>
                    </Box>
                  </Box>
                ):(
                  <Box align="center">
                    <Heading color="#004D75">Busca por categoria</Heading>
                    <Box direction="row">
                      <Anchor color="light-1">
                        <Box align="center" pad="medium">
                          <Image src={mate1}/>
                          <br/><Text>Piedra</Text>
                        </Box>
                      </Anchor>
                      <Anchor color="light-1">
                        <Box align="center" pad="medium">
                          <Image src={mate2}/>
                          <br/><Text>Vidrio</Text>
                        </Box>
                      </Anchor>                     
                      <Anchor color="light-1">
                        <Box align="center" pad="medium">
                          <Image src={mate3}/>
                          <br/><Text>Plastico</Text>
                        </Box>
                      </Anchor>
                      <Anchor color="light-1">
                        <Box align="center" pad="medium">
                          <Image src={mate4}/>
                          <br/><Text>Metal</Text>
                        </Box>
                      </Anchor>
                      <Anchor color="light-1">
                        <Box align="center" pad="medium">
                          <Image src={mate5}/>
                          <br/><Text>Madera</Text>
                        </Box>
                      </Anchor>                      
                      <Anchor color="light-1">
                        <Box align="center" pad="medium">
                          <Image src={mate6}/>
                          <br/><Text>Ceramica</Text>
                        </Box>
                      </Anchor>
                    </Box>
                  </Box>
                )}                
              </Box>
              {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='small'
                      align='center'
                      justify='center'
                    >
                    sidebar
                    </Box>
                </Collapsible>
              ): (
                  <Layer>
                    <Box
                      background='light-2'
                      tag='header'
                      justify='end'
                      align='center'
                      direction='row'
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => setShowSidebar(false)}
                      />
                    </Box>
                    <Box
                      fill
                      background='light-2'
                      align='center'
                      justify='center'
                    >
                      sidebar
                    </Box>
                  </Layer>
              )}  
            </Box>
            {(size==='small')?(
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
            ):(
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
            )}    
          </Box>   
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;