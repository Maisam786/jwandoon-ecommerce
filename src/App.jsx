import Navbar from "./components/layout/Navbar";

function App() {
    return (
        <div className="app">
            <Navbar />

            <main>
                <section
                    style={{
                        minHeight: "100vh",
                        display: "grid",
                        placeItems: "center",
                    }}
                >
                    <div style={{ textAlign: "center" }}>
                        <p
                            style={{
                                color: "var(--color-primary)",
                                fontWeight: 700,
                                marginBottom: "12px",
                            }}
                        >
                            JWANDOON
                        </p>

                        <h1 className="heading-font">
                            Premium Products.
                            <br />
                            Better Prices.
                        </h1>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;