
import React from "react";

export default class OneWayDemo extends React.Component
{
constructor(props){
super(props)
this.state={
title:'Product Details',
Name:'Samsung Tv',
Price:'50650.55',
Stock:false,
Cities:['Delhi','Hyd','chennai'],
Rating:{rate:4.5,count:6500}

}
}
render(){
    return(
    <div className="container-fluid">
    <h2>{this.state.title}</h2>
    <dl>
    <dt>Name</dt>    
    <dd>{this.state.Name}</dd>
    <dt>Price</dt>
    <dd>{this.state.Price}</dd>
    <dt>Stock</dt>
    <dd>{(this.state.Stock==true)?"Available":"Out of Stock"}</dd>
    <dt>Cities</dt>
    <dd>
       <ol>
        {
            this.state.Cities.map(city=>
                <li key={city}>{city}</li>
                )
        }
        </ol> 
    </dd>
    <dt>Rating</dt>
    <dd>
        <span className="bi bi-star-fill text-success"></span>{this.state.Rating.rate} [{this.state.Rating.count}]
    </dd>
    </dl>
    </div>
    )   
}
}