import Navbar from "../components/navigation/Navbar";
import wings from "../assets/wings-min.jpg";

const HomePage = () => {
  return (
    <>
      <RedBar />
      <Navbar />
      <MainCover />
    </>
  );
};

export default HomePage;

const RedBar = () => {
  return <div className="w-full h-1 bg-red-900" />;
};

const MainCover = () => {
  return (
    <div id="main-image" className="h-screen">
      <img
        src={wings}
        className="object-cover max-h-screen w-full"
        style={{ maxHeight: "90vh" }}
      />
      <PhoneNumber />
    </div>
  );
};

const PhoneNumber = () => {
  return (
    <div className="flex justify-start -mt-16 lg:-mt-24 ml-8 lg:ml-16 ">
      <span
        className="text-red-800 text-sm md:text-lg lg:text-xl 
                          border-solid border-2 border-red-900 rounded-full
                          px-6 lg:px-12 py-2 lg:py-3"
      >
        (604) 701-3334
      </span>
    </div>
  );
};
