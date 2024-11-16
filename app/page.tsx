import CategoryMenu from "@/components/Home/SuggestionCategory";
import MainLayout from "./layouts/main";
import Slider from "@/components/ui/Slider";
import SimilarProductTab from "@/components/common/SimilarProductTab";
import Divider from "@/components/ui/Divider";
import DiscountBanner from "@/components/Home/DiscountBanner";
import DiscoverBanner from "@/components/Home/DiscoverBanner";

export default function Home() {
  const products = {};
  return (
    <MainLayout>
      <div className="container mx-auto">
        <CategoryMenu />
        <Slider />
        <SimilarProductTab products className="mt-8 ml-6"></SimilarProductTab>
        <DiscountBanner className="py-10 px-4" />
        <SimilarProductTab products className="mt-2 ml-6"></SimilarProductTab>
        <DiscoverBanner className="px-4 py-10" />
      </div>
    </MainLayout>
  );
}
