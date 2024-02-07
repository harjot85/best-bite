import Navbar from "../components/navigation/Navbar";
import data from "../data/data.json";
import Slider from "react-slick";
import Image1 from "../assets/images/1.jpg";
import Image2 from "../assets/images/3.jpg";
import Image3 from "../assets/images/4.jpg";
import Image4 from "../assets/images/5.jpg";
import Image5 from "../assets/images/7.jpg";
import Image6 from "../assets/images/9C.jpg";

const HomePage = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];
  return (
    <>
      <RedBar height="h-1" />
      <Navbar />
      <MainCover
        phoneNumber={data.business.phoneNumber}
        images={images}
        subText={data.business.servingYou}
      />
    </>
  );
};

export default HomePage;

type RedBar = { height: string };
export const RedBar = ({ height }: RedBar) => {
  return <div className={`w-full ${height} bg-orange-800`} />;
};

type MainCover = { images: string[]; phoneNumber: string; subText: string };

const MainCover = ({ phoneNumber, images, subText }: MainCover) => {
  const sliderSettings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    arrows: false,
    infinite: true,

  };

  return (
    <div id="main-image flex">
      <Slider {...sliderSettings}>
        {images.map((image, i) => {
          return (
            <img
              key={i}
              src={image}
              alt=""
              className="w-full h-[87vh] object-cover"
            />
          );
        })}
      </Slider>
      <div className="text-orange-400 flex justify-start -mt-24 lg:-mt-24 ml-8 lg:ml-28 relative">
        <span className="bg-black px-4 py-2 rounded-md">
          <em>{subText}</em>
        </span>
      </div>

      <span className="flex justify-start -mt-28 lg:-mt-28 ml-8 lg:ml-16 relative">
        <PhoneNumber phoneNumber={phoneNumber} />
      </span>
    </div>
  );
};

type Phone = { phoneNumber: string };
const PhoneNumber = ({ phoneNumber }: Phone) => {
  return (
    <span
      className=" bg-orange-700 text-lg font-semibold md:text-2xl
                           rounded-full
                          px-6 lg:px-16 py-2 lg:py-4"
    >
      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
    </span>
  );
};
