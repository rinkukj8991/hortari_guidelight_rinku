import React from "react";
import productTile from '../Components/productTile';
export default class Cart extends React.Component{
constructor(props){
    super(props);
    this.state = {
        cart:[]
}
}
componentDidMount() {
   this.initCart()
}

initCart(){
    let myCart = localStorage.getItem('cart')
    myCart = JSON.parse(myCart)
    this.setState({
        cart: myCart || []
      })
    }

clearCart(){
    localStorage.setItem('cart',JSON.stringify([]))
    this.setState({
        cart: []
      })
}
   
    render(){
        const prodList = this.state.cart.map((product)=>
   {
     return productTile(null,null,product)
   } )
        return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
         <a className="navbar-brand" href="#">My_Cart</a>
         <button className="btn btn-primary" type="button" onClick={() =>{
            this.clearCart();
          }}>
            Clear_Cart
        </button>
        </nav>
        <div className="row">
        {prodList}
        </div>
        </div>
        )
    }
}