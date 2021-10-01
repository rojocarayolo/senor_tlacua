import React from "react";
import { Box, Image, Heading, Text, Anchor } from 'grommet';
import mate1 from '../multimedia/text001-150x150.jpg';
import mate2 from '../multimedia/text002-150x150.jpg';
import mate3 from '../multimedia/text003-150x150.jpg';
import mate4 from '../multimedia/text004-150x150.jpg';
import mate5 from '../multimedia/text005-150x150.jpg';
import mate6 from '../multimedia/text006-150x150.jpg';

function categories(){
    return(
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
    );
}
export default categories;