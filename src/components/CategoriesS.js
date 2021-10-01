import React from "react";
import { Box, Image, Heading, Text, Anchor } from 'grommet';
import mate7 from '../multimedia/text001-100x100.jpg';
import mate8 from '../multimedia/text002-100x100.jpg';
import mate9 from '../multimedia/text003-100x100.jpg';
import mate10 from '../multimedia/text004-100x100.jpg';
import mate11 from '../multimedia/text005-100x100.jpg';
import mate12 from '../multimedia/text006-100x100.jpg';

function CategoriesS(){
    return(
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
    );
}

export default CategoriesS;
