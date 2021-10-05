import React from "react";
import { Heading, Box, Image, Card, CardHeader, CardBody, CardFooter, Button, Tip} from "grommet";

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

function ShopC(){
    return(
        <Box pad="medium" width="xxlarge">
            <Heading>Catalogo</Heading>
            <Box direction="row-responsive">
                <Box pad="medium">
                    <Card align="center" width="medium" background="light-4" 
                        border={{ color: '#007c9b', size: 'medium' }}>
                        <CardHeader height="small"><Image fill="true" src={batea1}/></CardHeader>
                        
                        <CardBody>
                            <Tip background='#007c9b' content={<Box ><Heading level="3">$950</Heading>
                            <Heading level="4">30X10</Heading></Box>}>
                                <Heading level="2" color="light-1">Batea</Heading>
                            </Tip>
                            
                        </CardBody>
                        
                        <CardFooter pad="medium">
                            <Button primary label="Agregar al carrito" color='#f2c900'/>
                        </CardFooter>
                    </Card>
                </Box>
                <Box pad="medium">
                    <Card align="center" width="medium" background="light-4" border={{ color: '#007c9b', size: 'medium' }}>
                        <CardHeader height="small"><Image fill="true" src={batea2}/></CardHeader>
                        <CardBody>
                            <Heading level="2" color="light-1">Batea</Heading>
                            <Heading level="3">$950</Heading>
                            <Heading level="4">30X10</Heading>
                        </CardBody>
                        <CardFooter pad="medium">
                            <Button primary label="Agregar al carrito" color='#f2c900'/>
                        </CardFooter>
                    </Card>
                </Box>
                <Box pad="medium">
                    <Card align="center" width="medium" background="light-4" border={{ color: '#007c9b', size: 'medium' }}>
                        <CardHeader height="small"><Image fill="true" src={batea3}/></CardHeader>
                        <CardBody>
                            <Heading level="2" color="light-1">Batea</Heading>
                            <Heading level="3">$950</Heading>
                            <Heading level="4">30X10</Heading>
                        </CardBody>
                        <CardFooter pad="medium">
                            <Button primary label="Agregar al carrito" color='#f2c900'/>
                        </CardFooter>
                    </Card>
                </Box>
                <Box pad="medium">
                    <Card align="center" width="medium" background="light-4" border={{ color: '#007c9b', size: 'medium' }}>
                        <CardHeader height="small"><Image fill="true" src={batea4}/></CardHeader>
                        <CardBody>
                            <Heading level="2" color="light-1">Batea</Heading>
                            <Heading level="3">$950</Heading>
                            <Heading level="4">30X10</Heading>
                        </CardBody>
                        <CardFooter pad="medium">
                            <Button primary label="Agregar al carrito" color='#f2c900'/>
                        </CardFooter>
                    </Card>
                </Box>
            </Box>
            <Box direction="row-responsive">
                <Box pad="medium">
                    <Card align="center" width="medium" background="light-4" border={{ color: '#007c9b', size: 'medium' }}>
                        <CardHeader height="small"><Image fill="true" src={batea5}/></CardHeader>
                        <CardBody>
                            <Heading level="2" color="light-1">Batea</Heading>
                            <Heading level="3">$950</Heading>
                            <Heading level="4">30X10</Heading>
                        </CardBody>
                        <CardFooter pad="medium">
                            <Button primary label="Agregar al carrito" color='#f2c900'/>
                        </CardFooter>
                    </Card>
                </Box>
                <Box pad="medium">
                    <Card align="center" width="medium" background="light-4" border={{ color: '#007c9b', size: 'medium' }}>
                        <CardHeader><Image fill="true" src={batea6}/></CardHeader>
                        <CardBody>
                            <Heading level="2" color="light-1">Batea</Heading>
                            <Heading level="3">$950</Heading>
                            <Heading level="4">30X10</Heading>
                        </CardBody>
                        <CardFooter pad="medium">
                            <Button primary label="Agregar al carrito" color='#f2c900'/>
                        </CardFooter>
                    </Card>
                </Box>
                <Box pad="medium">
                    <Card align="center" width="medium" background="light-4" border={{ color: '#007c9b', size: 'medium' }}>
                        <CardHeader height="small"><Image fill="true" src={batea7}/></CardHeader>
                        <CardBody>
                            <Heading level="2" color="light-1">Batea</Heading>
                            <Heading level="3">$950</Heading>
                            <Heading level="4">30X10</Heading>
                        </CardBody>
                        <CardFooter pad="medium">
                            <Button primary label="Agregar al carrito" color='#f2c900'/>
                        </CardFooter>
                    </Card>
                </Box>
                <Box pad="medium">
                    <Card align="center" width="medium" background="light-4" border={{ color: '#007c9b', size: 'medium' }}>
                        <CardHeader height="small"><Image fill="true" src={batea8}/></CardHeader>
                        <CardBody>
                            <Heading level="2" color="light-1">Batea</Heading>
                            <Heading level="3">$950</Heading>
                            <Heading level="4">30X10</Heading>
                        </CardBody>
                        <CardFooter pad="medium">
                            <Button primary label="Agregar al carrito" color='#f2c900'/>
                        </CardFooter>
                    </Card>
                </Box>
            </Box>
            <Box direction="row-responsive">
                <Box pad="medium">
                    <Card align="center" width="medium" background="light-4" border={{ color: '#007c9b', size: 'medium' }}>
                        <CardHeader height="small"><Image fill="true" src={batea9}/></CardHeader>
                        <CardBody>
                            <Heading level="2" color="light-1">Batea</Heading>
                            <Heading level="3">$950</Heading>
                            <Heading level="4">30X10</Heading>
                        </CardBody>
                        <CardFooter pad="medium">
                            <Button primary label="Agregar al carrito" color='#f2c900'/>
                        </CardFooter>
                    </Card>
                </Box>
                <Box pad="medium">
                    <Card align="center" width="medium" background="light-4" border={{ color: '#007c9b', size: 'medium' }}>
                        <CardHeader height="small"><Image fill="true" src={batea10}/></CardHeader>
                        <CardBody>
                            <Heading level="2" color="light-1">Batea</Heading>
                            <Heading level="3">$950</Heading>
                            <Heading level="4">30X10</Heading>
                        </CardBody>
                        <CardFooter pad="medium">
                            <Button primary label="Agregar al carrito" color='#f2c900'/>
                        </CardFooter>
                    </Card>
                </Box>
                <Box pad="medium">
                    <Card align="center" width="medium" background="light-4" border={{ color: '#007c9b', size: 'medium' }}>
                        <CardHeader height="small"><Image fill="true" src={batea11}/></CardHeader>
                        <CardBody>
                            <Heading level="2" color="light-1">Batea</Heading>
                            <Heading level="3">$950</Heading>
                            <Heading level="4">30X10</Heading>
                        </CardBody>
                        <CardFooter pad="medium">
                            <Button primary label="Agregar al carrito" color='#f2c900'/>
                        </CardFooter>
                    </Card>
                </Box>
                <Box pad="medium">
                    <Card align="center" width="medium" background="light-4" border={{ color: '#007c9b', size: 'medium' }}>
                        <CardHeader height="small"><Image fill="true" src={batea12}/></CardHeader>
                        <CardBody>
                            <Heading level="2" color="light-1">Batea</Heading>
                            <Heading level="3">$950</Heading>
                            <Heading level="4">30X10</Heading>
                        </CardBody>
                        <CardFooter pad="medium">
                            <Button primary label="Agregar al carrito" color='#f2c900'/>
                        </CardFooter>
                    </Card>
                </Box>
            </Box>            
        </Box>
    );
}

 export default ShopC;