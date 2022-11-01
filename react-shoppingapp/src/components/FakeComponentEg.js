import { useState, useEffect } from "react";

export default function FakeComponentEg() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);

    function GetCartItemsCount(cartItems) {
        setItemsCount(cartItems.length);
    }

    function calculateTotalPrice(){
        let total=0;

        for(const item of cartItems)
        {
            total=total+item.price;
        }

        return total;
    }

    function deleteall(){
        alert("Items deleted from cart");

        setCartItems(current => 
                current.filter(product => {
                        return product.id === undefined;
                }),
            )
        
        GetCartItemsCount();
        calculateTotalPrice();
        LoadCategories();
    }

    function LoadCategories() {
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => {
                data.unshift("all");
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
        LoadProducts("https://fakestoreapi.com/products");
    }, [cartItems])

    function handleCategoryChange(e) {
        if (e.target.value === 'all') {
            LoadProducts("https://fakestoreapi.com/products");
        }
        else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    function handleAddtoCart(e) {
        alert("Item added to cart");
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                cartItems.push(data);
                console.log(data, "This is data debugger");
                // setCartItems((currentCart) => [...currentCart,data]
                GetCartItemsCount(cartItems);
                LoadCategories();
                console.log(cartItems, "Present items count");
            })
    }

    function updateCartData(e) {
        // let CartItems = cartItems;
        // console.log(CartItems,"display items");
        // let items = CartItems.filter(product => {
        //         return product.id !== e.id;
        //     });
        // console.log(items,"Update display");
        // setCartItems(this.items);

        // let CartItems = [...cartItems];
        // CartItems = CartItems.filter((product) => product.id !== e.id);
        // console.log(CartItems, "Update cart data");
        // setCartItems(CartItems);

        setCartItems((currentCart) => {
            const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === e.id);

            if (indexOfItemToRemove === -1) {
                return currentCart;
            }

            return [
                ...currentCart.slice(0, indexOfItemToRemove),
                ...currentCart.slice(indexOfItemToRemove + 1),
            ];
        })
    }


    function handleRemovefromCart(id) {
        alert("Item removed from cart");
        console.log(id, "this is")
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                updateCartData(data);
                GetCartItemsCount(cartItems);
                LoadCategories();
                console.log(cartItems, "Present items count");
            })
    }

    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-centre p-2">
                <h1><span className="bi bi-cart"></span>Shopping Home</h1>
            </header>
            <section className="row  mt-3">
                <nav className="col-0 mb-3">
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

                <main className="col-7 d-flex flex-wrap overflow-auto" style={{ height: '600px' }}>
                    {
                        products.map(product =>
                            <div key={product.id} className="card m-1 p-1" style={{ width: '200px' }}>
                                <img src={product.image} className="card-img-top" alt="img" height="150" />

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
                                            {product.rating.rate}<span>[{product.rating.count}]</span>
                                        </dd>
                                    </dl>
                                </div>

                                <div className="card-footer">
                                    <button id={product.id} onClick={handleAddtoCart} className="btn btn-danger w-100">
                                        <span className="bi bi-cart4"></span>Add to Cart
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </main>

                <aside className="col-5">
                    <button className="btn btn-danger w-100">
                        <span className="bi bi-cart4"></span>[{itemsCount}]Your Cart Items
                    </button>

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Preview</th>
                                <th className="btn btn-danger bi-trash w-75 ms-2 mt-1" id="deleteall" onClick={deleteall} style={{ height: '40px' }}></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                cartItems.map(item =>
                                            <tr key={item.id}>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                            
                                                <td>
                                                    <img src={item.image} alt="img" width="50" height="50"/>
                                                </td>

                                                <td>
                                                    <button className="btn btn-danger" id={item.id} onClick={handleRemovefromCart.bind(this,item.id)}>
                                                        <span className="bi bi-trash"></span>
                                                    </button>
                                                </td>
                                            </tr>
                                )
                            }
                                <tr>
                                    <td>Total: {calculateTotalPrice()}</td>
                                </tr>
                        </tbody>

                    </table>
                </aside>
            </section>
        </div>
    )
}