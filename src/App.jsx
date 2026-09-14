import { BrowserRouter, Routes, Route } from "react-router-dom";

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
    <BrowserRouter>
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
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
