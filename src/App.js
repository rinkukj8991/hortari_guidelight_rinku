import React from 'react';
import logo from './logo.svg';
import './App.css';
import productTile from './Components/productTile';

const productsArr =[
  {
    "id":1,
    "title":"Realme X",
    "price":14999,
    "image":"https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/v/w/c/x-128-u-rmx1901-realme-8-original-imafgzg9yvran9r3.jpeg?q=70"
  },
  {
    "id":2,
    "title":"Infinix Hot 8", 
    "price":6999,
    "image":"https://rukminim1.flixcart.com/image/416/416/k0463rk0/mobile/e/3/p/infinix-hot-8-x650c-original-imafjz7tmamr9rje.jpeg?q=70"
  },
  {
    "id":3,
    "title":"OPPO F11 Pro", 
    "price":15990,
    "image":"https://rukminim1.flixcart.com/image/416/416/k01b8280pkrrdj/mobile/d/g/s/oppo-f11-pro-cph1969-original-imafec8h3uqk3fqw.jpeg?q=70"
  }
]

const pros=[
  {
    "id":4,
    "title":"HP Spectre x360 Core i7 8th Gen ",
    "price":"₹1,49,490",
    "image":"https://rukminim1.flixcart.com/image/416/416/jdoubgw0/computer/x/y/e/hp-na-2-in-1-laptop-original-imaf2jkzhgzfsstu.jpeg?q=70"
  },
  {
    "id":5,
    "title":"Lenovo Core i5 7th Gen ", 
    "price":"₹52,990",
    "image":"https://rukminim1.flixcart.com/image/416/416/jl41nrk0/computer/a/m/q/lenovo-na-laptop-original-imaexjhtzgtnucgz.jpeg?q=70"
  },
  {
    "id":6,
    "title":"OPPO", 
    "price":1599,
    "image":"https://rukminim1.flixcart.com/image/416/416/k01b8280pkrrdj/mobile/d/g/s/oppo-f11-pro-cph1969-original-imafec8h3uqk3fqw.jpeg?q=70"
  }
]
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstState: 'Hai Hello',
      cartCount: 0,
      alertOnCartCount: 10,
      products: []
    }
  }

  componentDidMount() {
    this.setState({
      firstState: 'Hurray'
    })
    this.loadProducts()
  }
shouldComponentUpdate(prevProps, prevState) {
    console.log(this.State)
    if (this.state.cartCount >= this.state.alertOnCartCount) {
      alert(this.state.cartCount);
      return false
    }
    return true
  }

  addCount() {
    const newCount = this.state.cartCount + 1;
    this.setState({
      cartCount: newCount
    })
  }

  loadProducts(){
    this.setState({
      products: productsArr
    })
  }
  loadPros(){
    this.setState({
      products: pros
    })
  }

  render() {
    const productsList = this.state.products.map((product)=>
   {
     return productTile(this.addCount.bind(this),product)
   } )
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
          <a className="navbar-brand" href="#">Navbar</a>
          {this.state.firstState}
          
          <button className="right" type="button">
            Cart
            (
              {this.state.cartCount}
            )
        </button>
        </nav>
        <div className="container">
          <div className="row">
            <h2>Products</h2>
          </div>
          <div className="row">
            {productsList}
            <button onClick={() =>{this.loadPros()}}>moreProducts...</button>
          </div>
          <div className="row d-flex justify-content-end">
            <button className="btn btn-primary" id="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
