import { RedBar } from "./home-page";
import data from "../data/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { reponsiveSliderSettings } from "../configuration/config";

const TestimonialsPage = () => {
  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: reponsiveSliderSettings,
  };

  const { testimonials } = data.business;

  return (
    <>
      <div id="testimonials" className="text-slate-950 mt-20 pt-8 px-12 min-h-[75vh] lg:min-h-[75vh]">
        <div className="text-4xl">
          <p className="text-orange-700 mb-4">Testimonials</p>
          <RedBar height="h-1" />
          <div className="py-12 text-lg lg:text-xl ">
            <Slider {...sliderSettings}>
              {testimonials &&
                testimonials.map((t) => (
                  <Testimonial key={t} testimonial={t} />
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;

const Testimonial = ({ testimonial }: { testimonial: string }) => {
  return (
    <div className=" border-solid border-2 border-orange-700 pt-8 m-2 min-h-[32rem]">
      <div className="grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="col-span-10">
          <RedBar height="h-1" />
        </div>
      </div>

      <div className="p-6 py-24">
        <p className="text-slate-300 italic">"{testimonial}"</p>
      </div>
    </div>
  );
};
