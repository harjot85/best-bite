import Navbar from "../components/navigation/Navbar";
import wings from "../assets/wings-min.jpg";
import data from "../data/data.json";

const HomePage = () => {
  return (
    <>
      <RedBar height="h-1" />
      <Navbar />
      <MainCover phoneNumber={data.business.phoneNumber} image={wings} />
    </>
  );
};

export default HomePage;

type RedBar = { height: string };
export const RedBar = ({ height }: RedBar) => {
  return <div className={`w-full ${height} bg-red-900`} />;
};

type MainCover = { image: string; phoneNumber: string };

const MainCover = ({ phoneNumber, image }: MainCover) => {
  return (
    <div id="main-image">
      <img src={image} className="w-full h-[90vh] object-cover" />
      <PhoneNumber phoneNumber={phoneNumber} />
    </div>
  );
};

type Phone = { phoneNumber: string };
const PhoneNumber = ({ phoneNumber }: Phone) => {
  return (
    <div className="flex justify-start -mt-32 lg:-mt-24 ml-8 lg:ml-16 ">
      <span
        className=" text-red-800 text-lg font-semibold md:text-lg
                          border-solid border-2 border-red-900 rounded-full
                          px-6 lg:px-12 py-2 lg:py-3"
      >
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </span>
    </div>
  );
};
