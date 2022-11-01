

import React from "react";

export default class ShoppingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: [],
            cartItems: [],
            itemsCount: 0,
            totalPrice: 0
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleAddtoCart = this.handleAddtoCart.bind(this);
        this.calculateTotalPrice = this.calculateTotalPrice.bind(this);
        // this.handleDeleteAll = this.handleDeleteAll.bind(this);
    }

    GetCategories() {
        fetch('http://fakestoreapi.com/products/categories')
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

    GetCartItemsCount() {
        this.setState({
            itemsCount: this.state.cartItems.length
        })
    }

    handleAddtoCart(e) {
        alert("Item Added to Cart");
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                let items=this.state.cartItems;
                items.push(data);
                this.setState({
                    cartItems: items
                })
                // this.cartItems.push(data);
                console.log(data, "This is data debugger" );

                this.GetCategories();
                this.calculateTotalPrice();
                this.GetCartItemsCount();

            })
    }

    updateCartData(data) {
        let items = this.state.cartItems.filter(product => {
            return product.id !== data.id;
        })
        this.setState({
            cartItems: items
        })
    }


    handleDeleteFromCart(id) {
        alert("Item deleted from Cart")
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                this.updateCartData(data);
                this.GetCartItemsCount();
                this.LoadCategories();
                this.calculateTotalPrice();

            })
    }

    handleDeleteAll() {
        alert("Items deleted from Cart");
        let products=this.state.cartItems.filter(product => {
                return product.id === undefined;})
                console.log(products);
        this.setState({
            cartItems:  products
        })
    
        this.GetCartItemsCount();
        this.calculateTotalPrice();
        this.loadcategories();
    }

    calculateTotalPrice() {
        let total = 0;

        for (const item of this.state.cartItems) {
            total = total + item.price
        }
        this.setState({
            totalPrice: total
        })
    }

    componentDidMount() {
        this.GetCategories();
        this.GetProducts('http://fakestoreapi.com/products');
    }

    handleCategoryChange(e) {
        this.GetProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
    }

    render() {
        return (
            <div className="container-fluid">
                <header className="bg-danger p-2 text-white text-center">
                    <h2><span className="bi bi-cart"></span> Shopping Cart</h2>
                </header>
                <section className="row">
                    <nav className="col-3">
                        <h2>Select Category</h2>
                        <select onChange={this.handleCategoryChange} className="form-select">
                            {
                                this.state.categories.map(category =>
                                    <option key={category}>{category}</option>
                                )
                            }
                        </select>
                    </nav>
                    <main className="col-9">
                        <div className="d-flex flex-wrap">
                            {
                                this.state.products.map(product =>
                                    <div key={product.id} className="card m-2 p-2" style={{ width: '200px' }}>
                                        <img src={product.image} className="card-img-top" height="150" />
                                        <div className="card-header" style={{ height: '160px' }}>
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
                                            <button id={product.id} onClick={this.handleAddtoCart} className="btn btn-danger w-100">
                                                <span className="bi bi-cart4"></span> Add to Cart
                                            </button>
                                        </div>

                                    </div>

                                )
                            }
                        </div>
                    </main>
                    <aside className="col-4">
                        <button className="btn btn-danger w-100">
                            <span className="bi bi-cart3"></span> {this.state.itemsCount} Your Cart Items
                        </button>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Preview</th>
                                    <th>
                                        Delete All
                                        <td>
                                            <button className="btn btn-danger" onClick={this.handleDeleteAll} >
                                                <span className="bi bi-trash"></span>
                                            </button>
                                        </td>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.cartItems.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <img src={item.image} width="50" height="50" />
                                        </td>
                                        <td>
                                            <button id={item.id}
                                                onClick={this.handleDeleteFromCart.bind(this, item.id)}
                                                className="btn btn-danger">
                                                <span className="bi bi-trash"></span>
                                            </button>
                                        </td>

                                    </tr>
                                )
                                }
                                <tr>
                                    <td>
                                        Total: {this.calculateTotalPrice()}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </aside>
                </section>
            </div>
        )
    }
}
