import CategoriesList from "@/components/home/CategoriesList";
import ProperiesContainer from "@/components/home/ProperiesContainer";

function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  return (
    <div>
      <section>
        <CategoriesList
          category={searchParams.category}
          search={searchParams.search}
        />
        <ProperiesContainer
          category={searchParams.category}
          search={searchParams.search}
        />
      </section>
    </div>
  );
}

export default HomePage;
