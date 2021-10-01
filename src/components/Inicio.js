import React from "react";
import { Box, Carousel, Video, Heading, } from 'grommet';


import video from '../multimedia/tlacuache_spot_2.mp4';
import video2 from '../multimedia/video-disco.mp4';

import Categories from "./Categories";

import Cards from "./Cards";


function Inicio(){
    return(
        <Box>
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
                <Heading color="#004D75">Conoce nuestros productos</Heading>
            </Box>
            <Categories/>
        </Box>
        
    );
    
}

export default Inicio