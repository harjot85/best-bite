import { RedBar } from "./home-page";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.jpg";
import P3 from "../assets/p3.jpg";
import P4 from "../assets/p4.jpg";
import P5 from "../assets/p5.jpg";
import B1 from "../assets/b1.jpg";
import I1 from "../assets/i1.jpg";
import I2 from "../assets/i2.jpg";
import S1 from "../assets/s1.jpg";
import Slider from "react-slick";

const GalleryPage = () => {
  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  const images = [P1, P2, P3, P4, P5, B1, I1, I2, S1];
  return (
    <div id="gallery" className="text-slate-950 mt-20 pt-8 px-12 min-h-[75vh] lg:min-h-[75vh]">
      <div className="text-4xl">
        <p className="text-red-900 mb-4">Gallery</p>
        <RedBar height="h-1" />
        <div className="py-12 text-lg lg:text-xl min-h-[50rem]">
          <Slider {...sliderSettings}>
            {images.map((image, i) => {
              return (
                <img
                  key={i}
                  src={image}
                  alt=""
                  className="w-full object-cover rounded-md shadow-sm sm:rounded-lg min-h-[32rem] lg:min-h-[50rem]"
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
