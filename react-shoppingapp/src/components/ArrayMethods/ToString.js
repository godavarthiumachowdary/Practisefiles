
export default function ToStringComponent() {
    const categories = ["All", "Electronics", "Fashion"];
    return (
        <div class="container">
            <h2>Categories</h2>
            <ol>
                {
                    categories.toString()
                    
                }
            </ol>
        </div>
    )
}