// Import the library

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
// Import the file and component
import ProductCard from "./ProductCard";

export default function SimilarProductTab({
  className,
  products,
}: {
  className?: string;
  products: any;
}) {
  return (
    <div className={className}>
      <div className="">
        <h2 className="leading-7 font-bold text-2xl ">Apple Laptops</h2>
        <p className="text-xs">Recommended for you</p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="h-full mt-4  md:mt-4 px-4"
      >
        <CarouselContent className="h-full flex">
          <CarouselItem className="basis-1/2 sm:basis-1/4 lg:basis-1/5 ">
            <ProductCard />
          </CarouselItem>
          <CarouselItem className=" basis-1/2 sm:basis-1/4 lg:basis-1/5 ">
            <ProductCard />
          </CarouselItem>
          <CarouselItem className=" basis-1/2 sm:basis-1/4 lg:basis-1/5 ">
            <ProductCard />
          </CarouselItem>
          <CarouselItem className=" basis-1/2 sm:basis-1/4 lg:basis-1/5 ">
            <ProductCard />
          </CarouselItem>
          <CarouselItem className=" basis-1/2 sm:basis-1/4 lg:basis-1/5 ">
            <ProductCard />
          </CarouselItem>
          <CarouselItem className=" basis-1/2 sm:basis-1/4 lg:basis-1/5 ">
            <ProductCard />
          </CarouselItem>
          <CarouselItem className=" basis-1/2 sm:basis-1/4 lg:basis-1/5 ">
            <ProductCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 z-10 p-4 text-gray-800 bg-dark rounded-full shadow-lg hover:bg-dark transition-colors duration-200 flex items-center justify-center"></CarouselPrevious>
        <CarouselNext className="absolute right-0 z-10 p-4   text-gray-800 bg-dark rounded-full shadow-lg hover:bg-dark transition-colors duration-200 flex items-center justify-center"></CarouselNext>
      </Carousel>
    </div>
  );
}
