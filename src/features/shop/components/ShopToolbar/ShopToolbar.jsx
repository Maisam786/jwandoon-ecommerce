import "./ShopToolbar.css";

export default function ShopToolbar({
    total = 0,
    sortBy = "featured",
    setSortBy,
}) {
    return (
        <div className="shop-toolbar">
            <div className="shop-toolbar__result">
                <span>Showing</span>

                <strong>{total}</strong>

                <span>products</span>
            </div>

            <div className="shop-toolbar__controls">
                <div className="shop-toolbar__sort">
                    <label htmlFor="shop-sort">
                        Sort by
                    </label>

                    <select
                        id="shop-sort"
                        value={sortBy}
                        onChange={(event) =>
                            setSortBy(event.target.value)
                        }
                    >
                        <option value="featured">
                            Featured
                        </option>

                        <option value="newest">
                            Newest
                        </option>

                        <option value="price-low">
                            Price: Low to High
                        </option>

                        <option value="price-high">
                            Price: High to Low
                        </option>

                        <option value="rating">
                            Highest Rated
                        </option>
                    </select>
                </div>
            </div>
        </div>
    );
}