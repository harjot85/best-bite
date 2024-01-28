import { default as Home } from "./home-page";
import { default as Menu } from "./menu-page";
import { default as Gallery } from "./gallery-page";
import { default as Testimonials } from "./testimonials-page";
import { default as About } from "./about-page";
import { default as Footer } from "./footer-page";

const BestBiteApp = () => {
  return (
    <>
      <Home />

      <Menu />

      <Gallery />

      <Testimonials />

      <About />

      <Footer />
    </>
  );
};

export default BestBiteApp;
