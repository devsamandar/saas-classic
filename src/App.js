import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./containers/Navbar";
import Hero from "./containers/Hero";
import Features from "./containers/Features";
import Clients from "./containers/Clients";
import Feedback from "./containers/Feedback";
import Pricing from "./containers/Pricing";
import FAQ from "./containers/FAQ";
import Footer from "./containers/Footer";

const handleBackToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function App() {
  return (
    <>
    <Helmet>
        <script src="assets/js/theme.min.js"></script>
    </Helmet>

    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Clients />
      <Feedback />
      <Pricing />
      <FAQ />
      <Footer />
      <button
      data-toggle="back-to-top"
      className="fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center"
      onClick={handleBackToTop}
    >
      <i className="fa-solid fa-arrow-up text-base"></i>
    </button>
    </div>
    </>
  );
}

export default App;
