import React from "react"
import ProductCard from '../src/components/ProductCard/ProductCard';

export default {
  title: "Archetypes",
}

export const productCard = () => (
  <div style={{ padding: "16px", backgroundColor: "#eeeeee" }}>
    <ProductCard backgroundImage={"https://homepages.cae.wisc.edu/~ece533/images/airplane.png"}></ProductCard>
  </div>
)