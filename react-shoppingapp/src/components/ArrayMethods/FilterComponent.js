
export default function FilterComponent() {
    const categories = ["All", "Electronics", "Footwear", "Fashion"];
    return (
        <div class="container">
            <h2>Categories</h2>
            <ol>
                {
                    categories.filter(category => category.includes('A')).map(filteredName => (
                        <li>
                            {filteredName}
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}