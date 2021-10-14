import { Box, ResponsiveContext } from "grommet";
import React, { Component } from "react";

import ShopA from './ShopC'
import ShopB from './ShopCs'

class ShopRea extends Component{
    render(){
        return(
            <ResponsiveContext>
                {size=>(
                    <Box>
                        {(size!=='small')?(<ShopA/>):(<ShopB/>)}
                    </Box>                    
                )}
            </ResponsiveContext>
        );
    }
}
export default ShopRea;
