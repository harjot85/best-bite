import { RedBar } from "./home-page";
import data from "../data/data.json";
import Vegetarian from "../assets/vegetarian.png";
import { useState } from "react";

const MenuPage = () => {
  const { menu } = data.business;

  const [menuList, setMenuList] = useState(menu);

  const filters = [
    "All",
    "Vegetarian",
    "Meat",
    "Tomato-sauce based",
    "White-sauce based",
  ];

  const handlePillClick = () => {
    console.log("Pill Click handler");
    // temporary-fix for failing deployment
    setMenuList(menu);
  };

  return (
    <div className="text-white mt-20 mx-4 lg:mx-12">
      <div className="text-4xl">
        <p className="text-red-900 mb-4">Menu</p>
        <RedBar height="h-1" />
      </div>

      <div className=" mb-24 flex flex-wrap space-x-4">
        {filters.map((filter) => (
          <Pill key={filter} text={filter} onClick={handlePillClick} />
        ))}
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-6">
        {menuList.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;

type MenuItem = {
  item: {
    name: string;
    classification: string;
    baseSauce: string;
    ingredients: string[];
    sizes: {
      name: string;
      price: string;
    }[];
  };
};
const MenuItem = ({ item }: MenuItem) => {
  const {} = item;

  return (
    <div className="border-solid border-slate-950 border-2 rounded-lg px-2 lg:px-6 py-6 text-slate-400 my-4">
      <div className="text-2xl lg:text-4xl mb-4 flex space-x-12 items-start">
        <span>{item.name}</span>

        {item.classification === "vegetarian" && (
          <span>
            <img src={Vegetarian} width={36} />
          </span>
        )}
      </div>
      <div className="text-lg lg:text-xl mb-6">
        {item.ingredients.join(", ")}
      </div>
      <div className="text-lg lg:text-xl font-semibold flex space-x-6">
        {item.sizes &&
          item.sizes.map((size) => (
            <span key={size.name}>{`${size.name}: ${size.price}`}</span>
          ))}
      </div>
    </div>
  );
};

type Pill = { text: string; onClick: () => void };
const Pill = ({ text, onClick }: Pill) => {
  return (
    <button
      onClick={onClick}
      className="text-red-900 text-sm md:text-lg 
    border-solid border-2 border-red-900 rounded-full
    px-6 lg:px-12 py-2 lg:py-2 mt-4"
    >
      <p>{text}</p>
    </button>
  );
};
