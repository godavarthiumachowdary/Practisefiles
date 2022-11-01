
import { useState, useEffect } from "react";

export default function FakeComponent() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartitems, setCartitems] = useState([]);
  const [itemscount, setItemscount] = useState(0);
  const [TotalPrice, SetTotalPrice] = useState(0);

  function GetCartItemsCount() {
    setItemscount(cartitems.length);
  }

  function loadcategories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => {
        data.unshift('all');
        setCategories(data);
      })
  }

  function loadproducts(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
  }

  useEffect(() => {
    loadcategories();
    loadproducts('https://fakestoreapi.com/products');
  }, [cartitems.length])


  let handleAddtocart=(e)=> {
    alert("Item added to Cart")
    fetch(`https://fakestoreapi.com/products/${e.target.id}`)
      .then(response => response.json())
      .then(data => {
        cartitems.push(data);
        GetCartItemsCount();
        calculateTotalPrice();
        loadcategories();
      })
  }


  let calculateTotalPrice = () => {
    let total = 0;

    for (const item of cartitems) {
      total = total + item.price
    }
    return SetTotalPrice(total);
  }


  function handleCategoryChange(e) {
    if (e.target.value === "all") {
      loadproducts('https://fakestoreapi.com/products');
    } else {
      loadproducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
    }
  }


  let updateCartData=(data)=>{
    let Cartitems= cartitems
    let items=Cartitems.filter(product => {
     return product.id !== data.id;
     });
    setCartitems(items);
  }

  
  let handleDeleteFromCart=(id)=> {
    alert("Item deleted from Cart");
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
       updateCartData(data);
        calculateTotalPrice();
        GetCartItemsCount();
        loadcategories();
       
      })

  }

  let handleDeleteAll=()=> {
    alert("Items deleted from Cart");
    setCartitems(current =>
      current.filter(product => {
        return product.id === undefined;
      }),
    );
    GetCartItemsCount();
    calculateTotalPrice();
    loadcategories();
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
                  <button id={product.id} onClick={handleAddtocart} className="btn btn-danger w-100">
                    <span className="bi bi-cart4"></span> Add to Cart
                  </button>
                </div>
              </div>
            )
          }
        </main>

        <aside className="col-4">
          <button className="btn btn-danger w-100">
            <span className="bi bi-cart3"></span> [{itemscount}] Your Cart Items
          </button>

          <table className="table table-hover">
            <thead>
              <tr>

                <th>Title</th>
                <th>Price</th>
                <th>Preview</th>
                <th>Delete All
                  <td>
                    <button className="btn btn-danger" onClick={handleDeleteAll}>
                      <span className="bi bi-trash"></span>
                    </button>
                  </td>
                </th>

              </tr>
            </thead>

            <tbody>
              {
                cartitems.map(item =>
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <img src={item.image} alt="selectedimage" width="50" height="50" />
                    </td>
                    <td>
                      <button id={item.id} className="btn btn-danger" onClick={handleDeleteFromCart.bind(this, item.id)}>
                        <span className="bi bi-trash"></span>
                      </button>
                    </td>
                  </tr>
                )
              }
            </tbody>

          </table>
          <div>
            Total  : {TotalPrice}
          </div>
        </aside>
      </section>
    </div>
  )
}
