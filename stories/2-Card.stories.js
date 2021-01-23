import React from "react"
import ProductCard from '../src/components/Archetypes/ProductCard/ProductCard';

export default {
  title: "Archetypes",
}

export const productCard = () => (
  <div style={{ padding: "16px", backgroundColor: "#eeeeee" }}>
    <ProductCard backgroundImage={"bart-product.png"}></ProductCard>
  </div>
)