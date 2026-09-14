import "./ShopHero.css";

export default function ShopHero() {
    return (
        <section className="shop-hero">
            <div className="shop-hero__background" />

            <div className="container">
                <div className="shop-hero__content">
                    <span className="shop-hero__eyebrow">
                        JWANDOON STORE
                    </span>

                    <h1>
                        Shop
                        <span> Everything.</span>
                    </h1>

                    <p>
                        Discover carefully selected products,
                        everyday essentials, and the latest arrivals
                        — all in one place.
                    </p>

                    <div className="shop-hero__breadcrumb">
                        <span>Home</span>
                        <span>/</span>
                        <strong>Shop</strong>
                    </div>
                </div>
            </div>
        </section>
    );
}