import Navbar from "../components/navigation/Navbar";
import Cover from "../assets/images/3.jpg";
import data from "../data/data.json";

const HomePage = () => {
  return (
    <>
      <RedBar height="h-1" />
      <Navbar />
      <MainCover
        phoneNumber={data.business.phoneNumber}
        image={Cover}
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

type MainCover = { image: string; phoneNumber: string; subText: string };

const MainCover = ({ phoneNumber, image, subText }: MainCover) => {
  return (
    <div id="main-image flex">
      <img src={image} className="w-full h-[90vh] object-cover" />
      <div className="text-orange-400 flex justify-start -mt-24 lg:-mt-24 ml-8 lg:ml-28">
        <em>{subText}</em>
      </div>

      <span className="flex justify-start -mt-28 lg:-mt-28 ml-8 lg:ml-16 ">
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
