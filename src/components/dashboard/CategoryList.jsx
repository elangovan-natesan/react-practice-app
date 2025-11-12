import CategoryCard from "./CategoryCard";

export default function CategoryList({ products }) {
  return (
    <>
      {products &&
        products.categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
    </>
  );
}
