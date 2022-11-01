
import { useState, useEffect } from "react";

export default function FakeShoppingComponentAgain() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    //const [TotalPrice,SetTotalPrice]=useState(0);

    function GetCartItemsCount(cartItems) {
        setItemsCount(cartItems.length);
    }

    function calculateTotalPrice() {
        let total = 0;

        for (const item of cartItems) {
            total = total + item.price;
        }
        return total;
    }

    function handleDeleteAll() {
        alert("Delete All Items from Cart");
        setCartItems(current =>
            current.filter(product => {
                return product.id === undefined;
            })
        );
        GetCartItemsCount();
        calculateTotalPrice();
        LoadCategories();
    }

    function LoadCategories() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => {
                data.unshift('all');
                setCategories(data);
            })
    }

    function LoadProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products');
    }, [cartItems])


    function handleCategoryChange(e) {
        if (e.target.value == 'all') {
            LoadProducts('https://fakestoreapi.com/products');
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    let handleAddtoCart = (e) => {
        alert("Item Added to Cart");
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                cartItems.push(data);
                console.log(data, "This is data debugger");
                GetCartItemsCount(cartItems);
                LoadCategories();
                console.log(cartItems, "present items count")
            })

    }


    let updateCartData = (data) => {
        let items = cartItems.filter(product => {
            return product.id !== data.id;
        })
        setCartItems(items);
    }


    let handleDeleteFromCart = (id) => {
        alert("Item deleted from Cart")
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                updateCartData(data);
                GetCartItemsCount();
                LoadCategories();
                calculateTotalPrice();

            })
    }


    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
            </header>
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label>Select a Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                                {
                                    categories.map(category =>
                                        <option value={category} key={category}>{category.toUpperCase()}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-6 d-flex flex-wrap overflow-auto" style={{ height: '600px' }} >
                    {
                        products.map(product =>
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
                                    <button id={product.id} onClick={handleAddtoCart} className="btn btn-danger w-100">
                                        <span className="bi bi-cart4"></span> Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </main>
                <aside className="col-4">
                    <button className="btn btn-danger w-100">
                        <span className="bi bi-cart3"></span> [{itemsCount}] Your Cart Items
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
                                        <button className="btn btn-danger" onClick={handleDeleteAll} >
                                            <span className="bi bi-trash"></span>
                                        </button>
                                    </td>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <img src={item.image} width="50" height="50" />
                                        </td>
                                        <td>
                                            <button id={item.id} onClick={handleDeleteFromCart.bind(this, item.id)} className="btn btn-danger">
                                                <span className="bi bi-trash"></span>
                                            </button>
                                        </td>

                                    </tr>
                                )
                            }
                            <tr>
                                <td>
                                    Total: {calculateTotalPrice()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </section>
        </div>
    )
}