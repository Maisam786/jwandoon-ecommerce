import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./Shop.css";

import products from "../../data/products";

import ShopHero from "./components/ShopHero/ShopHero";
import ShopSidebar from "./components/ShopSidebar/ShopSidebar";
import ShopToolbar from "./components/ShopToolbar/ShopToolbar";
import ShopGrid from "./components/ShopGrid/ShopGrid";

const PRODUCTS_PER_PAGE = 6;

export default function Shop() {
  const [searchParams] = useSearchParams();

  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);

  const activeCategory = searchParams.get("category") || "all-products";

  const activeCollection = searchParams.get("collection") || "all-products";

  const filteredProducts = useMemo(() => {
    let result = [...products];

    /* CATEGORY */

    if (activeCategory !== "all-products") {
      result = result.filter(
        (product) => product.categoryId === activeCategory,
      );
    }

    /* COLLECTION */

    if (activeCollection === "best-sellers") {
      result = result.filter(
        (product) => product.badge?.type === "best-seller",
      );
    }

    if (activeCollection === "new-arrivals") {
      result = result.filter((product) => product.newArrival);
    }

    if (activeCollection === "deals") {
      result = result.filter((product) => product.deal);
    }

    /* SORT */

    switch (sortBy) {
      case "newest":
        result.sort((a, b) => Number(b.newArrival) - Number(a.newArrival));
        break;

      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      case "featured":
      default:
        result.sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }

    return result;
  }, [activeCategory, activeCollection, sortBy]);

  /* =========================================
     PAGINATION
  ========================================= */

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  /* =========================================
     RESET PAGE
  ========================================= */

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activeCollection, sortBy]);

  /* =========================================
     PAGINATION HANDLERS
  ========================================= */

  const handlePreviousPage = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
              />

              <ShopGrid products={paginatedProducts} />

              {/* PAGINATION */}

              {totalPages > 1 && (
                <div className="shop-pagination">
                  <button
                    type="button"
                    className="shop-pagination__button shop-pagination__button--arrow"
                    disabled={currentPage === 1}
                    onClick={handlePreviousPage}
                    aria-label="Previous page"
                  >
                    ←
                  </button>

                  <div className="shop-pagination__pages">
                    {/* FIRST PAGE */}

                    {currentPage > 3 && (
                      <>
                        <button
                          type="button"
                          className="shop-pagination__button"
                          onClick={() => handlePageChange(1)}
                        >
                          1
                        </button>

                        {currentPage > 4 && (
                          <span className="shop-pagination__dots">…</span>
                        )}
                      </>
                    )}

                    {/* PAGE RANGE */}

                    {Array.from({ length: totalPages }, (_, index) => index + 1)
                      .filter((page) => {
                        if (totalPages <= 5) {
                          return true;
                        }

                        if (currentPage <= 3) {
                          return page <= 4;
                        }

                        if (currentPage >= totalPages - 2) {
                          return page >= totalPages - 3;
                        }

                        return (
                          page >= currentPage - 1 && page <= currentPage + 1
                        );
                      })
                      .map((page) => (
                        <button
                          key={page}
                          type="button"
                          className={`shop-pagination__button ${
                            currentPage === page
                              ? "shop-pagination__button--active"
                              : ""
                          }`}
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </button>
                      ))}

                    {/* LAST PAGE */}

                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && (
                          <span className="shop-pagination__dots">…</span>
                        )}

                        <button
                          type="button"
                          className="shop-pagination__button"
                          onClick={() => handlePageChange(totalPages)}
                        >
                          {totalPages}
                        </button>
                      </>
                    )}
                  </div>

                  <button
                    type="button"
                    className="shop-pagination__button shop-pagination__button--arrow"
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                    aria-label="Next page"
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
