
export default function SliceComponent(){
    const categories=["All","Electronics","Footwear"];
    return(
        <div class="container">
            <h2>Categories</h2>
            <ol>
                {
                    categories.slice(0,2).map((category) =>{
                     return(
                        <li>{category}</li>
                     );
                    }
                    )  
                }
            </ol>
        </div>
    )
}