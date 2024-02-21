import Vegetarian from "../assets/vegetarian.png";
import { MouseEventHandler } from "react";

type FilterPill = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSelected: boolean;
};
const FilterPill = ({ text, onClick, isSelected }: FilterPill) => {
  let classes = [
    "text-lg",
    "font-semibold",
    "md:text-lg",
    "border-solid",
    "border-2",
    "border-orange-700",
    "rounded-full",
    "px-6",
    "lg:px-12",
    "py-2",
    "lg:py-2",
    "mt-4",
  ];

  if (isSelected) {
    classes.push("bg-orange-700");
  }

  const textColor = isSelected ? "text-black" : "text-orange-700";

  return (
    <button onClick={onClick} className={classes.join(" ")}>
      <p className={`${textColor} flex`}>
        {text.charAt(0).toUpperCase() + text.slice(1)}

        {text === "vegetarian" && (
          <span className="ml-2">
            <img src={Vegetarian} width={24} />
          </span>
        )}
      </p>
    </button>
  );
};

export default FilterPill;
