import React, {Component} from "react";
import { Box, Carousel, Video, Heading, ResponsiveContext, } from 'grommet';


import video from '../multimedia/tlacuache_spot_2.mp4';
import video2 from '../multimedia/video-disco.mp4';

import Categories from "./Categories";
import CategoriesS from "./CategoriesS"

import Cards from "./Cards";
import CardsS from "./CardsS";


class Inicio extends Component{
    render(){return(
        <ResponsiveContext>
            {size=>(
                <Box>
                    <Carousel play="45000">
                        <Video controls="over" autoPlay loop mute>
                            <source key="video" src={video} type="video/mp4"/>    
                        </Video>
                        <Video controls="over" autoPlay loop mute>
                            <source key="video" src={video2} type="video/mp4"/>    
                        </Video>
                    </Carousel>
                    {(size!=='small')?(<Cards/>):(<CardsS/>)}
                    {(size === 'small')?(
                    <Box align="center">
                        <Heading color="#004D75" level="2">Conoce nuestros productos</Heading>
                    </Box>
                    ):(
                    <Box align="center">
                        <Heading color="#004D75">Conoce nuestros productos</Heading>
                    </Box>
                    )}
                    {(size!=='small')?(<Categories/>):(<CategoriesS/>)}
                </Box>
            )}
        </ResponsiveContext>
        
        
    );}
    
    
}

export default Inicio