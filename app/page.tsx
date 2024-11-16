import CategoryMenu from "@/components/Home/SuggestionCategory";
import MainLayout from "./layouts/main";

export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto text-blue">
        <CategoryMenu />
      </div>
    </MainLayout>
  );
}
