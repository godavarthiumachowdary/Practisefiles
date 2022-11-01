

export default function DataBindingonecomponent() {
    var products = [
        { Name: "SamsungTv", price: 45005.45 },
        { Name: "casuals", price: 2500.25 }];
    return (
        <div className="container">
            <h2>Products Table</h2>
            <table className="table ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(productnm =>
                            <tr>
                                <td>{productnm.Name}</td>
                                <td>{productnm.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}

// export default function DataBindingonecomponent(){
//     var menu=[
//         {category:"Electronics",products:["Samsungtv","Mobile"]},
//         {category:"Footwear",products:["Bata","Leeboot"]}
//     ]
// return(
// <div>
// <h2>CATEGORIES</h2>
// <ol>
// {
//     menu.map(item=>
//     <li key={item.category}>{item.category}
//      <ul>
//      {
//         item.products.map(productgiven=>
//             <li key={productgiven}>{productgiven}</li>

//         )
//      }
//      </ul>
//     </li>
//     )
// }
// </ol>
// <h2>Select a product</h2>
// <select>
// {
// menu.map(item=>
// <optgroup key={item.category} label={item.category}>
// {
//     item.products.map(productgiven=>
//         <option key={productgiven}>{productgiven}</option>
//     )
// }
// </optgroup>
// )
// }
// </select>
// </div>
// )
// }
