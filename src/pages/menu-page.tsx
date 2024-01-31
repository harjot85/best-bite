import { RedBar } from "./home-page";
import data from "../data/data.json";
import Vegetarian from "../assets/vegetarian.png";
import { MouseEventHandler, useState } from "react";

enum Filter {
  All = "All",
  Vegetarian = "vegetarian",
  Meat = "meat",
  TomatoSauceBased = "Tomato-sauce based",
  WhiteSauceBased = "White-sauce based",
  Wings = "wings",
  SideOrders = "side orders",
  dips = "dips",
}

const MenuPage = () => {
  const { menu } = data.business;

  const [menuList, setMenuList] = useState(menu);
  const [selectedFilter, setSelectedFilter] = useState<Filter | null>(
    Filter.All
  );

  const filters: Filter[] = [
    Filter.All,
    Filter.Vegetarian,
    Filter.Meat,
    Filter.TomatoSauceBased,
    Filter.WhiteSauceBased,
    Filter.Wings,
    Filter.SideOrders,
    Filter.dips,
  ];

  const handlePillClick = (filter: Filter) => {
    setSelectedFilter(filter);

    if (filter === Filter.All) {
      setMenuList(menu);
    } else {
      const listFilteredByUserSelection = menu.filter(
        (list) =>
          list.category === filter ||
          list.classification === filter ||
          list.baseSauce === filter
      );

      setMenuList(listFilteredByUserSelection);
    }
  };

  return (
    <div id="menu" className="text-white mt-32 mx-4 lg:mx-12">
      <div className="text-4xl">
        <p className="text-red-900 mb-4">Menu</p>
        <RedBar height="h-1" />
      </div>

      <div className=" mb-24 flex flex-wrap space-x-4">
        {filters.map((filter) => (
          <Pill
            key={filter}
            text={filter}
            onClick={() => handlePillClick(filter)}
            isSelected={filter === selectedFilter}
          />
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
    <div className="border-b-2 border-slate-800 md:border-slate-950 p-6 text-slate-400">
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
            <span key={size.name}>{`${size.name}  ${size.price}`}</span>
          ))}
      </div>
    </div>
  );
};

type Pill = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSelected: boolean;
};
const Pill = ({ text, onClick, isSelected }: Pill) => {
  let classes = [
    "text-lg",
    "font-semibold",
    "md:text-lg",
    "border-solid",
    "border-2",
    "border-red-900",
    "rounded-full",
    "px-6",
    "lg:px-12",
    "py-2",
    "lg:py-2",
    "mt-4",
  ];

  if (isSelected) {
    classes.push("bg-red-800");
  }

  const textColor = isSelected ? "text-black" : "text-red-800";

  return (
    <button onClick={onClick} className={classes.join(" ")}>
      <p className={textColor}>
        {text.charAt(0).toUpperCase() + text.slice(1)}
      </p>
    </button>
  );
};
