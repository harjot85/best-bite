import { RedBar } from "./home-page";
import Image1 from "../assets/images/1.jpg";
import Image2 from "../assets/images/2.jpg";
import Image3 from "../assets/images/3.jpg";
import Image4 from "../assets/images/4.jpg";
import Image5 from "../assets/images/5.jpg";
import Image6 from "../assets/images/6.jpg";
import Image7 from "../assets/images/7.jpg";
import Image8 from "../assets/images/8.jpg";
import Image9 from "../assets/images/9A.jpg";
import Image10 from "../assets/images/9B.jpg";
import Image11 from "../assets/images/9C.jpg";
import Image12 from "../assets/images/9D.jpg";
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

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
  ];
  return (
    <div id="gallery" className="text-slate-950 mt-20 pt-8 px-12">
      <div className="text-4xl">
        <p className="text-red-900 mb-4">Gallery</p>
        <RedBar height="h-1" />
        <div className="py-12 text-lg lg:text-xl">
          <Slider {...sliderSettings}>
            {images.map((image, i) => {
              return (
                <img
                  key={i}
                  src={image}
                  alt=""
                  className="w-full object-cover rounded-md shadow-sm sm:rounded-lg"
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
