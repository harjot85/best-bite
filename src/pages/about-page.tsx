import { RedBar } from "./home-page";
import data from "../data/data.json";

const AboutPage = () => {
  const { lineOne, lineTwo, lineThree } = data.business.aboutText;
  return (
    <>
      <div className="text-slate-950 mt-20 pt-8 px-12 bg-red-100 h-[70vh] lg:h-[75vh]">
        <div className="text-4xl">
          <p className="text-red-900 mb-4">About</p>
          <RedBar height="h-1" />
          <div className="py-12 text-lg lg:text-xl flex flex-col space-y-8">
            <p>{lineOne}</p>
            <p>{lineTwo}</p>
            <p>{lineThree}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
