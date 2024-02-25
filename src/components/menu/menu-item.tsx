import Vegetarian from "../../assets/vegetarian.png";

type MenuItem = {
  item: {
    name: string;
    classification: string;
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
        <span className="text-orange-700">{item.name}</span>

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

export default MenuItem;
