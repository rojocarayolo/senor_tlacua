import React, { Component} from "react";
import {Box, Text} from "grommet"

class products extends Component{
     pci='product-category-id';
    constructor(props){
      super (props);
      this.state={
        productos:[]
      };
    }
    componentDidMount(){
      let promesa = fetch('https://app.stelorder.com/app/products?APIKEY=IPfuxZDmB0HP1n4PbV9VaYFZNjAdO78Y7AUDlT44');
    
      promesa.then(response => response.json()).then(data=>{
        this.setState({
          productos: data
        })
      })
    }

    render(){
      return(
        <Box>
            {
              this.state.productos.map((producto)=>{
                //return (
                  <Box>
                    <Text>{producto.id}</Text>
                    <br/>
                    <Text>{producto.name}</Text>
                    <br/>
                    <Text>{producto.reference}</Text>
                    <br/>
                    <Text>{producto.description}</Text>
                    <br/>
                    <Text>{}</Text>
                    <br/>
                    <br/>
                    <br/>
                  </Box>
                })
              }
          </Box>
        )};
  }
  export default products