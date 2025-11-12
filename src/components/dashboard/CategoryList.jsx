import { useEffect } from "react";
import CategoryCard from "./CategoryCard";

export default function CategoryList({ products }) {
  useEffect(() => {
    console.log("Category List component is mounted");
    return () => {
      console.log("Category List component is unmounted");
    };
  });
  return (
    <>
      {products &&
        products.categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
    </>
  );
}
