
import React from "react";
import { CardComponent } from "./CardComponent";

export default class ShoppingClassDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories:[],
            products: [],
            cartitems:[],
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        // this.GetHandleAddToCart = this.GetHandleAddToCart.bind(this);
    }

    GetCategories() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    categories: data
                })
            })
    }

    GetProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    products: data
                })
            })
    }

    GetHandleAddToCart(e){
        alert("Item added to Cart")
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                cartitems:data
            })
        })
    }

    GethandleDeleteFromCart(id){
        alert("Item deleted from Cart");
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then(response => response.json())
          .then(data => {
            this.setState({ 
          })
        })
    }


    componentDidMount() {
        this.GetCategories();
        this.GetProducts('https://fakestoreapi.com/products');
    }

    handleCategoryChange(e) {
        this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }

    render() {
        return (
            <div className="container-fluid">
                <header className="bg-danger p-2 text-white text-center">
                    <h2><span className="bi-bicart"></span>Shopping Cart</h2>
                </header>
                <section className="row mt-3">
                    <nav className="col-2">
                        <h2>Select Category</h2>
                        <select onChange={this.handleCategoryChange} className="form-select">
                            {
                                this.state.categories.map(category =>
                                    <option value={category} key={category}>{category}</option>

                                )
                            }

                        </select>
                    </nav>

                  
        <main className="col-6 d-flex flex-wrap overflow-auto" style={{ height: '600px' }} >
          {
           this.state.products.map(product =>
              <div key={product.id} className="card m-2 p-2" style={{ width: '200px' }}>
                <img src={product.image} alt="productimages" className="card-img-top" height="150" />

                <div className="card-header" style={{ height: '175px' }}>
                  <p>{product.title}</p>
                </div>

                <div className="card-body">
                  <dl>
                    <dt>Price</dt>
                    <dd>{product.price}</dd>
                    <dt>Rating</dt>
                    <dd>
                      <span className="bi bi-star-fill text-success"></span>
                      {product.rating.rate} <span>[{product.rating.count}]</span>
                    </dd>
                  </dl>
                </div>

                <div className="card-footer">
                  <button id={product.id} onClick={this.GetHandleAddToCart.bind(this)} className="btn btn-danger w-100">
                    <span className="bi bi-cart4"></span> Add to Cart
                  </button>
                </div>
              </div>
            )
          }
        </main>

        <aside className="col-4">
          <button className="btn btn-danger w-100">
            <span className="bi bi-cart3"></span> Your Cart Items
          </button>

          <table className="table table-hover">
            <thead>
              <tr>

                <th>Title</th>
                <th>Price</th>
                <th>Preview</th>
                <th>Delete All
                  <td>
                    <button className="btn btn-danger" >
                      <span className="bi bi-trash"></span>
                    </button>
                  </td>
                </th>

              </tr>
            </thead>

            <tbody>
            {
                this.cartitems.map(item =>
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <img src={item.image} alt="selectedimage" width="50" height="50" />
                    </td>
                    <td>
                      <button id={item.id} className="btn btn-danger" onClick={this.GethandleDeleteFromCart.bind(this)}>
                        <span className="bi bi-trash"></span>
                      </button>
                    </td>
                  </tr>
                )
              } 
            </tbody>

          </table>
          <div>
            Total  : 
          </div>
        </aside>
      </section>

            </div>
        )
    }
} 