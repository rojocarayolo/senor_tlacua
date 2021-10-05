import React from "react";
import { Box, Button, Collapsible, Carousel, Video, Heading, TextInput,} from 'grommet';
import {Search,} from 'grommet-icons';

import video from '../multimedia/tlacuache_spot_2.mp4';
import video2 from '../multimedia/video-disco.mp4';

import Categories from "./Categories";


import Cards from "./Cards";

function InicioS(props){
    return(
        <Box>
            <Collapsible  open={props.search}>
                <Box background="#00637c" pad="medium">
                <TextInput placeholder="Busca algun producto" icon={<Search/>}/>
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
            <Cards/>
            
            <Box align="center">
                <Heading color="#004D75" level="2">Conoce nuestros productos</Heading>
            </Box>            
            <Categories/>
        </Box>
        
    );
    
}

export default InicioS