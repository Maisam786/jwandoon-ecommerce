import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop/ScrollToTop";

import AnnouncementBar from "./components/layout/AnnouncementBar/AnnouncementBar";
import Header from "./components/layout/Header/Header";
import Navigation from "./components/layout/Navigation/Navigation";
import Footer from "./components/layout/Footer/Footer";

import ShowcaseHero from "./features/home/components/ShowcaseHero/ShowcaseHero";
import HeroBenefits from "./features/home/components/HeroBenefits/HeroBenefits";
import CategoryShowcase from "./features/home/components/CategoryShowcase/CategoryShowcase";
import FeaturedProducts from "./features/home/components/FeaturedProducts/FeaturedProducts";
import PromoBanner from "./features/home/components/PromoBanner/PromoBanner";
import NewArrivals from "./features/home/components/NewArrivals/NewArrivals";
import GrandOpeningBanner from "./features/home/components/GrandOpeningBanner/GrandOpeningBanner";
import DealsSection from "./features/home/components/DealsSection/DealsSection";
import Newsletter from "./features/home/components/Newsletter/Newsletter";

import ProductDetails from "./features/product/ProductDetails";

import Shop from "./features/shop/Shop";
import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import Shipping from "./features/shipping/Shipping";
import Returns from "./features/returns/Returns";
import FAQs from "./features/faqs/FAQs";
import Privacy from "./features/privacy/Privacy";
import Terms from "./features/terms/Terms";

import { CartProvider } from "./context/CartContext";
import CartNotification from "./components/common/CartNotification/CartNotification";
import Cart from "./features/cart/Cart";

import { WishlistProvider } from "./context/WishlistContext";
import WishlistNotification from "./components/common/WishlistNotification/WishlistNotification";
import Wishlist from "./features/wishlist/Wishlist";

import Checkout from "./features/checkout/Checkout";

import Store from "./features/store/Store";

function Home() {
  return (
    <main className="page-content">
      <ShowcaseHero />
      <HeroBenefits />
      <CategoryShowcase />
      <FeaturedProducts />
      <PromoBanner />
      <NewArrivals />
      <GrandOpeningBanner />
      <DealsSection />
      <Newsletter />
    </main>
  );
}

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="app">
            <header>
              <AnnouncementBar />
              <Header />
              <Navigation />
            </header>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              <Route path="/store" element={<Store />} />
              
              <Route path="/checkout" element={<Checkout />} />
            </Routes>

            <Footer />
            <CartNotification />
            <WishlistNotification />
          </div>
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
