import React from "react";
import { Box, Heading, Card, CardHeader, CardBody, Paragraph, Text, Image } from 'grommet';
import patio from '../multimedia/patio.jpeg';
import vista from '../multimedia/vista.jpeg';

const missionHead= "Con tu ayuda podemos hacer un mundo más sustentable y comprometido con los recursos producidos y su reciclaje.";
const misssionBody= "Nos mueve el respeto y la responsabilidad por nuestro entorno, por ese motivo reunimos para ti antigüedades y objetos que te permitan revivir el pasado y darle una nueva perspectiva al ahora. Nuestro espacio reúne una selecta colección de artesanías, manualidades y productos de segunda mano que serán reutilizados, con la finalidad de dar un toque alternativo e innovador a la decoración de hogares y establecimientos comerciales de nuestra región y de todo el país.";
const usBody= "Estamos ubicados en el corazón de la Riviera Maya en Tulum, Quintana Roo; un lugar donde el pasado y el presente se combinan para dar forma a nuevos significados, imágenes y sensaciones. Hemos diseñado un espacio creativo en donde recolectamos, imaginamos y le devolvemos la vida útil a una serie de artículos que algunos pueden llegar a considerar basura o desperdicio.";

function Cards(){
    return(
        <Box align="center">
            <Heading size="large" color="#004D75">Sobre nosotros</Heading>
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
                        <br /><Box width="large"><Image fit="cover" src={vista}/></Box>
                    </CardBody>
                </Card>
                </Box>
            </Box>
        </Box>
    );
}

 export default Cards;