import { Heart, Bell, User, Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Divider from "./ui/Divider";
import Image from "next/image";

export default function Header() {
  return (
    <div className="">
      <div className="container mx-auto text-sm flex items-center justify-between font-semibold px-6">
        <div className="flex ">
          <span className="">
            Hi!{" "}
            <a href="/sign-in" className="underline text-[#0654ba] ">
              Sign in
            </a>
            &nbsp;
            <span className="hidden lg:inline-block">
              or{" "}
              <a href="/register" className="underline text-[#0654ba] ">
                Register
              </a>
            </span>
          </span>
          <a href="#" className="  hidden md:block px-2">
            Daily Deals
          </a>
          <a href="#" className="  hidden md:block px-2">
            Help & Contact
          </a>
        </div>
        <div className="flex flex-row justify-center items-center mr-2 sm:mr-0 ">
          <MyEbayAccount />
          <Bell className="w-5 h-5 mx-4" />
          {/* Cart Icon */}
          <Heart className="w-5 h-5  mx-4 hidden sm:block" />
        </div>
      </div>
      <Divider className="h-[1px] w-[100%] bg-gray-300 " />
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Section */}
        <div className="flex items-center ">
          <Image
            src="/ebai.svg" // Đường dẫn tương đối từ thư mục public
            alt="Example SVG"
            width={80} // Đặt kích thước
            height={32}
            className="mr-2"
          />
          <Categories />
        </div>
        {/* Search Bar */}
        <div className="flex items-center justify-between hidden min-[350px]:flex w-[230px] md:w-[360px]  shadow-md rounded-full bg-white border border-gray-300">
          {/* Ô nhập */}
          <input
            type="text"
            placeholder="Search for anything"
            className=" p-2 flex-grow  text-sm text-gray-700 placeholder-gray-400 focus:outline-none rounded-l-full"
          />

          {/* Nút kính lúp */}
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3665f3] text-white hover:bg-blue-700 focus:outline-none m-1"
            aria-label="Search"
          >
            <Search size={20} /> {/* Kích thước biểu tượng */}
          </button>
        </div>
        <a className="block min-[350px]:hidden" href="/products/search">
          <Search></Search>
        </a>
      </div>
      <Divider className="h-[1px] w-[100%] bg-gray-300 " />
    </div>
  );
}

const MyEbayAccount = () => {
  const menuItems = [
    "Summary",
    "Recently Viewed",
    "Bids/Offers",
    "Watchlist",
    "Purchase History",
    "Buy Again",
    "Selling",
    "Saved Searches",
    "Saved Sellers",
    "Messages",
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="text-sm font-semibold hidden md:block">My eBay</div>
            <User className="block md:hidden w-5 h-5" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[200px] bg-red">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavigationMenuLink href="#">{item}</NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
const Categories = () => {
  const techCategories: string[] = [
    "Smartphones & Accessories",
    "Laptops & Computers",
    "Gaming & Consoles",
    "Wearable Technology",
    "Home Appliances & Smart Devices",
    "Audio & Headphones",
    "Cameras & Photography",
    "Drones & RC Devices",
    "Networking & Smart Home Devices",
    "Tech Gadgets & Accessories",
  ];
  return (
    <NavigationMenu className="hidden sm:block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="text-sm font-semibold ">Shop my category</div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[200px] bg-red">
              {techCategories.map((item, index) => (
                <li key={index} className="px-4 py-2">
                  <NavigationMenuLink href="#">{item}</NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
