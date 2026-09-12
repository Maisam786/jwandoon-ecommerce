import AnnouncementBar from "./components/layout/AnnouncementBar/AnnouncementBar";
import Header from "./components/layout/Header/Header";
import Navigation from "./components/layout/Navigation/Navigation";
import ShowcaseHero from "./features/home/components/ShowcaseHero/ShowcaseHero";
import HeroBenefits from "./features/home/components/HeroBenefits/HeroBenefits";

function App() {
    return (
        <div className="app">
            <header>
                <AnnouncementBar />
                <Header />
                <Navigation />
            </header>

            <main>
                <ShowcaseHero />
                <HeroBenefits />
            </main>
        </div>
    );
}

export default App;