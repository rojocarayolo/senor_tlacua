import React from "react";
import batea1 from '../multimedia/demo/batea-demo.png'
import batea2 from '../multimedia/demo/Batea-650.png'
import batea3 from '../multimedia/demo/Batea-600.png'
import batea4 from '../multimedia/demo/batea-arbol.png'
import { Box, Button, Carousel, Heading, Image } from "grommet";

function article() {
    return (
        <Box gap="medium">
            <Box align="center"><Heading>Batea</Heading></Box>
            <Box direction="row" pad="medium" gap="large">
                <Box width="large">
                    <Carousel play="100000" fill="true" margin="small">
                        <Image fit="contain" src={batea1} />
                        <Image fit="contain" src={batea2} />
                        <Image fit="contain" src={batea3} />
                        <Image fit="contain" src={batea4} />
                    </Carousel>
                </Box>
                <Box alignContent="end">
                    <Heading>$950.00 mx</Heading>
                    <Heading>30cmx10cm</Heading>
                    <Button primary label="Agregar al carrito" />
                </Box>
            </Box>
            <Box direction="row" width="medium" pad="medium" gap="medium" alignContent="end">
                <Image fit="over" src={batea1} />
                <Image fit="over" src={batea2} />
                <Image fit="over" src={batea3} />
                <Image fit="over" src={batea4} />
            </Box>
        </Box>
    );
}
export default article