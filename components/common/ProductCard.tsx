// Import library and external component
import ImageFrame from "../ui/ImageFrame";

const ProductCard = () => {
  return (
    <a href="#" className="group w-full">
      <div className="relative w-full">
        {/* Product Image with hover zoom effect */}
        <ImageFrame
          src="/slider1.png"
          alt="San Pham Son Lotus"
          ImageClassName="object-contain "
          className="h-[220px] w-full mx-auto "
          quality={100}
        />

        {/* Product Info with title visible, and details link appearing on hover */}
        <div className="bg-white bg-opacity-90 mt-2 transition-all duration-300 transform group-hover:-translate-y-3">
          <h2 className="text-base font-medium text-[#191919] line-clamp-2">
            Sơn Phủ Bóng Cứng Cao Cấp Lotus Hard Shield
          </h2>
          <p className="text-xl font-semibold mt-1">11,399,661.00 VND</p>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
