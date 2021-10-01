import React from "react";
import { Box, Heading, Card, CardHeader, CardBody, Paragraph, Text, Image } from 'grommet';
import patio from '../multimedia/patio.jpeg';
import vista from '../multimedia/vista.jpeg';

const missionHead= "Con tu ayuda podemos hacer un mundo más sustentable y comprometido con los recursos producidos y su reciclaje.";
const misssionBody= "Nos mueve el respeto y la responsabilidad por nuestro entorno, por ese motivo reunimos para ti antigüedades y objetos que te permitan revivir el pasado y darle una nueva perspectiva al ahora. Nuestro espacio reúne una selecta colección de artesanías, manualidades y productos de segunda mano que serán reutilizados, con la finalidad de dar un toque alternativo e innovador a la decoración de hogares y establecimientos comerciales de nuestra región y de todo el país.";
const usBody= "Estamos ubicados en el corazón de la Riviera Maya en Tulum, Quintana Roo; un lugar donde el pasado y el presente se combinan para dar forma a nuevos significados, imágenes y sensaciones. Hemos diseñado un espacio creativo en donde recolectamos, imaginamos y le devolvemos la vida útil a una serie de artículos que algunos pueden llegar a considerar basura o desperdicio.";

function cardsS(){
    return(
        <Box align="center">
            <Heading  color="#004D75">Sobre nosotros</Heading>
            <Box  background= "#007c9b" pad="xlarge">
                <Box pad="medium">
                    <Card  width="medium" background="#e2ae34" align="center" pad="large">
                        <CardHeader><Heading color="light-1">Nosotros</Heading></CardHeader>
                        <CardBody>
                            <Text color="#004D75" size="small">{usBody}</Text> 
                            <br/><Image src={patio}/>
                        </CardBody>
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
        </Box>
    );
}

 export default cardsS;