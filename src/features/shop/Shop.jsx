import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./Shop.css";

import products from "../../data/products";

import ShopHero from "./components/ShopHero/ShopHero";
import ShopSidebar from "./components/ShopSidebar/ShopSidebar";
import ShopToolbar from "./components/ShopToolbar/ShopToolbar";
import ShopGrid from "./components/ShopGrid/ShopGrid";

export default function Shop() {
    const [searchParams] = useSearchParams();

    const [sortBy, setSortBy] = useState("featured");
    const [view, setView] = useState("grid");

    const activeCategory =
        searchParams.get("category") || "all-products";

    const activeCollection =
        searchParams.get("collection") || "all-products";

    const filteredProducts = useMemo(() => {
        let result = [...products];

        /* CATEGORY */

        if (activeCategory !== "all-products") {
            result = result.filter(
                (product) =>
                    product.categoryId === activeCategory
            );
        }

        /* COLLECTION */

        if (activeCollection === "best-sellers") {
            result = result.filter(
                (product) =>
                    product.badge?.type === "best-seller"
            );
        }

        if (activeCollection === "new-arrivals") {
            result = result.filter(
                (product) => product.newArrival
            );
        }

        if (activeCollection === "deals") {
            result = result.filter(
                (product) => product.deal
            );
        }

        /* SORT */

        switch (sortBy) {
            case "newest":
                result.sort(
                    (a, b) =>
                        Number(b.newArrival) -
                        Number(a.newArrival)
                );
                break;

            case "price-low":
                result.sort(
                    (a, b) => a.price - b.price
                );
                break;

            case "price-high":
                result.sort(
                    (a, b) => b.price - a.price
                );
                break;

            case "rating":
                result.sort(
                    (a, b) => b.rating - a.rating
                );
                break;

            case "featured":
            default:
                result.sort(
                    (a, b) =>
                        Number(b.featured) -
                        Number(a.featured)
                );
                break;
        }

        return result;
    }, [
        activeCategory,
        activeCollection,
        sortBy,
    ]);

    return (
        <main className="shop-page">
            <ShopHero />

            <section className="shop-content">
                <div className="container">
                    <div className="shop-content__layout">
                        <ShopSidebar
                            activeCategory={activeCategory}
                            activeCollection={activeCollection}
                        />

                        <div className="shop-content__main">
                            <ShopToolbar
                                total={filteredProducts.length}
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                                view={view}
                                setView={setView}
                            />

                            <ShopGrid
                                products={filteredProducts}
                                view={view}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}