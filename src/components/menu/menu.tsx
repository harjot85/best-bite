import data from "../../data/data.json";

const BuildYourOwn = () => {
  const menu = data.business.buildYourOwn;

  return (
    <div>
      <div className="mt-8 text-slate-300 text-lg lg:text-xl grid grid-cols-1 gap-1">
        <div>
          <span>{menu.crust.title.toUpperCase()}: </span>
          <span className="text-slate-400 ml-2">{menu.crust.options}</span>
        </div>
        <div>
          <span>{menu.sauce.title.toUpperCase()}: </span>
          <span className="text-slate-400 ml-2">{menu.sauce.options}</span>
        </div>
        <div>
          <span>{menu.specialSauce.title.toUpperCase()}: </span>
          <span className="text-slate-400 ml-2">{menu.specialSauce.options}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-12">
        {menu.toppings.map((topping) => (
          <BuildYourOwnCategory key={topping.type} topping={topping} />
        ))}
      </div>
    </div>
  );
};

type ToppingProps = {
  type: string;
  options: string[];
};
const BuildYourOwnCategory = (topping: { topping: ToppingProps }) => {
  return (
    <div>
      <div className="mb-4 text-xl lg:text-2xl text-slate-300">
        {topping.topping.type.toUpperCase()}
      </div>
      <ul>
        {topping.topping.options.map((t) => (
          <li>
            <span className="text-slate-400 text-lg lg:text-lg">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuildYourOwn;
