import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id || product.name} product={product} />
        ))}
    </>
  );
}
