import { RedBar } from "./home-page";
import data from "../data/data.json";

const MenuPage = () => {
  const { menu } = data.business;
  return (
    <div className="text-white mt-20 mx-12">
      <div className="text-4xl">
        <p className="text-red-900 mb-4">Menu</p>
        <RedBar height="h-1" />
      </div>

      <div className="my-6 mb-16">
        <Pill text="All" onClick={() => {}} />
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-6">
        {menu.map((item) => (
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
    <div
      className="border-solid border-gray-950 border-2 rounded-lg p-6 text-gray-400"
    >
      <div className="text-2xl lg:text-4xl mb-4">{item.name}</div>
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
    <div className="flex justify-start ">
      <span
        className="text-red-900 text-sm md:text-lg lg:text-xl 
                          border-solid border-2 border-red-900 rounded-full
                          px-6 lg:px-12 py-2 lg:py-2"
      >
        <button onClick={onClick}>{text}</button>
      </span>
    </div>
  );
};
