import { Box, Heading, Image,Button} from "grommet";
import { CircleInformation } from "grommet-icons";
import React, { Component } from "react";

class APIS extends Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        let promesa = fetch('https://app.stelorder.com/app/products?APIKEY=IPfuxZDmB0HP1n4PbV9VaYFZNjAdO78Y7AUDlT44');
        promesa.then(Response => Response.json()).then(data=>{
            this.setState({
                products:data
            })
        })
    }
    render(){
        return(
            <Box pad="medium" width="xxlarge">
                <Heading>Catalogo</Heading>
                <Box>
                {this.state.products.map((products)=>{
                    return  <Box pad="medium" width="medium" align="center">
                                {products['item-images'].map((images)=>{
                                    return <Box height="xsmall">
                                                <Image src={images['item-image-path']}/>
                                            </Box>
                                })}
                                <Heading level="2" color="light-1">{products.name}</Heading>
                                <Button
                                    icon={<CircleInformation />}
                                    onClick={() =>{}}
                                    hoverIndicator
                                />
                                <Heading level="3">{products.description}</Heading>
                                <Heading level="3">{products['sales-price']}</Heading>
                                
                                <br/>
                            </Box>
                })}
                </Box>
            </Box>
        );
    }
}
export default APIS