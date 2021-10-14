import React, { useState } from "react";
import { Heading, Box, Image, Button, Collapsible } from "grommet";
import { CircleInformation } from 'grommet-icons';
import batea1 from '../multimedia/demo/batea-demo.png'
import batea2 from '../multimedia/demo/Batea-650.png'
import batea3 from '../multimedia/demo/Batea-600.png'
import batea4 from '../multimedia/demo/batea-arbol.png'
import batea5 from '../multimedia/demo/Batea-Cola-de-pato.png'
import batea6 from '../multimedia/demo/Batea-cuadrada-mediana.png'
import batea7 from '../multimedia/demo/Batea-Corazon-M.png'
import batea8 from '../multimedia/demo/Imagen-corazon-m.png'
import batea9 from '../multimedia/demo/Batea-de-corazon-mini.png'
import batea10 from '../multimedia/demo/Batea-escalera.png'
import batea11 from '../multimedia/demo/Batea-grande-lavabo.png'
import batea12 from '../multimedia/demo/Batea-larga.png'

function ShopC() {
    const [show, setShow] = useState(false);
    return (
        <Box pad="medium" width="xxlarge">
            <Heading>Catalogo</Heading>
            <Box direction="row">
                <Box pad="medium" width="medium" align="center">
                    <Box height="small">
                        <Image fit="over" src={batea1} />
                    </Box>
                    <Heading level="2" color="light-1">Batea</Heading>
                    <Button
                        icon={<CircleInformation />}
                        onClick={() => setShow(!show)}
                        hoverIndicator
                    />
                    <Collapsible open={show}>
                        <Heading level="3">$950</Heading>
                        <Heading level="4">30X10</Heading>
                    </Collapsible>
                    <Button primary label="Agregar al carrito" color='#f2c900' />
                </Box>
                <Box pad="medium" width="medium" align="center">
                    <Box height="small">
                        <Image fit="over" src={batea2} />
                    </Box>
                    <Heading level="2" color="light-1">Batea</Heading>
                    <Button
                        icon={<CircleInformation />}
                        onClick={() => setShow(!show)}
                        hoverIndicator
                    />

                    <Button primary label="Agregar al carrito" color='#f2c900' />
                </Box>
            </Box>
            <Box direction="row">
                <Box pad="medium" width="medium" align="center">
                    <Box height="small">
                        <Image fit="over" src={batea3} />
                    </Box>
                    <Heading level="2" color="light-1">Batea</Heading>

                    <Button
                        icon={<CircleInformation />}
                        onClick={() => setShow(!show)}
                        hoverIndicator
                    />

                    <Button primary label="Agregar al carrito" color='#f2c900' />
                </Box>
                <Box pad="medium" width="medium" align="center">
                    <Box height="small">
                        <Image fit="over" src={batea4} />
                    </Box>
                    <Heading level="2" color="light-1">Batea</Heading>
                    <Button
                        icon={<CircleInformation />}
                        onClick={() => setShow(!show)}
                        hoverIndicator
                    />
                    <Button primary label="Agregar al carrito" color='#f2c900' />
                </Box>
            </Box>
            <Box direction="row">
                <Box pad="medium" width="medium" align="center">
                    <Box height="small">
                        <Image fit="over" src={batea5} />
                    </Box>
                    <Heading level="2" color="light-1">Batea</Heading>
                    <Button
                        icon={<CircleInformation />}
                        onClick={() => setShow(!show)}
                        hoverIndicator
                    />
                    <Button primary label="Agregar al carrito" color='#f2c900' />
                </Box>
                <Box pad="medium" width="medium" align="center">
                    <Box height="small">
                        <Image fit="over" src={batea6} />
                    </Box>
                    <Heading level="2" color="light-1">Batea</Heading>
                    <Button
                        icon={<CircleInformation />}
                        onClick={() => setShow(!show)}
                        hoverIndicator
                    />
                    <Button primary label="Agregar al carrito" color='#f2c900' />
                </Box>
            </Box>
            <Box direction="row">
                <Box pad="medium" width="medium" align="center">
                    <Box height="small">
                        <Image fit="over" src={batea7} />
                    </Box>
                    <Heading level="2" color="light-1">Batea</Heading>
                    <Button
                        icon={<CircleInformation />}
                        onClick={() => setShow(!show)}
                        hoverIndicator
                    />
                    <Button primary label="Agregar al carrito" color='#f2c900' />
                </Box>
                <Box pad="medium" width="medium" align="center">
                    <Box height="small">
                        <Image fit="over" src={batea8} />
                    </Box>
                    <Heading level="2" color="light-1">Batea</Heading>
                    <Button
                        icon={<CircleInformation />}
                        onClick={() => setShow(!show)}
                        hoverIndicator
                    />
                    <Button primary label="Agregar al carrito" color='#f2c900' />
                </Box>
            </Box>
            <Box direction="row">
                <Box pad="medium" width="medium" align="center">
                    <Box height="small">
                        <Image fit="over" src={batea9} />
                    </Box>
                    <Heading level="2" color="light-1">Batea</Heading>
                    <Button
                        icon={<CircleInformation />}
                        onClick={() => setShow(!show)}
                        hoverIndicator
                    />
                    <Button primary label="Agregar al carrito" color='#f2c900' />
                </Box>
                <Box pad="medium" width="medium" align="center">
                    <Box height="small">
                        <Image fit="over" src={batea10} />
                    </Box>
                    <Heading level="2" color="light-1">Batea</Heading>
                    <Button
                        icon={<CircleInformation />}
                        onClick={() => setShow(!show)}
                        hoverIndicator
                    />
                    <Button primary label="Agregar al carrito" color='#f2c900' />
                </Box>
            </Box>
            <Box direction="row">
                <Box pad="medium" width="medium" align="center">
                    <Box height="small">
                        <Image fit="over" src={batea11} />
                    </Box>
                    <Heading level="2" color="light-1">Batea</Heading>
                    <Button
                        icon={<CircleInformation />}
                        onClick={() => setShow(!show)}
                        hoverIndicator
                    />
                    <Button primary label="Agregar al carrito" color='#f2c900' />
                </Box>
                <Box pad="medium" width="medium" align="center">
                    <Box height="small">
                        <Image fit="over" src={batea12} />
                    </Box>
                    <Heading level="2" color="light-1">Batea</Heading>
                    <Button
                        icon={<CircleInformation />}
                        onClick={() => setShow(!show)}
                        hoverIndicator
                    />
                    <Button primary label="Agregar al carrito" color='#f2c900' />
                </Box>
            </Box>
        </Box>
    );
}

export default ShopC;