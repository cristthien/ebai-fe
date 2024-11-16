import React from "react";

const categories = [
  "Explore (New!)",
  "Saved",
  "Electronics",
  "Motors",
  "Fashion",
  "Collectibles and Art",
  "Sports",
  "Health & Beauty",
  "Industrial equipment",
  "Home & Garden",
  "Deals",
  "Sell",
];

const CategoryMenu = () => {
  return (
    <div className=" px-6 py-4 overflow-x-auto no-scrollbar scroll-smooth   justify-center w-full">
      <div className="flex  space-x-4 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group w-fit relative cursor-pointer flex-shrink-0"
          >
            <div className="text-xs hover:text-blue-600 break-keep max-w-full">
              {category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
