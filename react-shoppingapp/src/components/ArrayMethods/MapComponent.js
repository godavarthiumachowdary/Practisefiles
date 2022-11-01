
export default function MapComponent() {
    const categories = ["All", "Electronics", "Fashion"];
    return (
        <div class="container">
            <h2>Categories</h2>
            <ol>
                {
                    categories.map(category =>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>
        </div>
    )
}