import { RedBar } from "./home-page";
import BuildYourOwn from "../components/menu/menu";
import MenuItem from "../components/menu/menu-item";
import FilterPill from "../components/menu/filter-pill";

import data from "../data/data.json";
import { useState } from "react";

enum Filter {
  All = "All",
  Vegetarian = "vegetarian",
  Meat = "meat",
  Pasta = "pasta",
  CheesyFingers = "cheesy fingers",
  Wings = "wings",
  BuildYourOwn = "build your own",
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
    Filter.Pasta,
    Filter.CheesyFingers,
    Filter.Wings,
    Filter.BuildYourOwn,
    Filter.SideOrders,
    Filter.dips,
  ];

  const handleFilterPillClick = (filter: Filter) => {
    setSelectedFilter(filter);

    if (filter === Filter.All) {
      setMenuList(menu);
    } else {
      const listFilteredByUserSelection = menu.filter(
        (list) => list.category === filter || list.classification === filter
      );

      setMenuList(listFilteredByUserSelection);
    }
  };

  return (
    <div id="menu" className="text-white mt-48 mx-4 lg:mx-12">
      <div className="text-4xl">
        <p className="text-orange-700 mb-4">Menu</p>
        <RedBar height="h-1" />
      </div>

      <div className="mb-12 flex flex-wrap space-x-4">
        {filters.map((filter) => (
          <FilterPill
            key={filter}
            text={filter}
            onClick={() => handleFilterPillClick(filter)}
            isSelected={filter === selectedFilter}
          />
        ))}
      </div>

      {selectedFilter === Filter.Pasta && (
        <div className="lg:text-2xl text-lg text-slate-400 mb-4 pl-6">
          <em>
            <PastaText />
          </em>
        </div>
      )}
      {(selectedFilter === Filter.All ||
        selectedFilter === Filter.BuildYourOwn ||
        selectedFilter === Filter.Meat ||
        selectedFilter === Filter.Vegetarian) && (
        <div className="lg:text-2xl text-lg text-slate-400 mb-4 pl-6">
          <em>
            <PizzaText />
          </em>
        </div>
      )}

      {selectedFilter === Filter.BuildYourOwn && <BuildYourOwn />}

      <div className="grid lg:grid-cols-2 lg:gap-6">
        {menuList.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;

const PastaText = () => {
  return (
    <>
      All Pasta dishes are oven baked with Mozzarella, served with{" "}
      <span className="text-orange-700">Garlic Toast</span> and{" "}
      <span className="text-orange-700">Tossed Salad</span>
    </>
  );
};

const PizzaText = () => <span>*Gluten free crust available</span>;
