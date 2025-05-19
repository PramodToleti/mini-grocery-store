import type React from "react";
import Filters from "../../components/Filters/Filters";
import ProductsCatalog from "../../components/ProductsCatalog/ProductsCatalog";
import { useHomeContainer } from "./HomeContainer.hooks";
import "./HomeContainer.styles.css";

const HomeContainer: React.FC = () => {
  const { allProducts, filteredProducts, handleFilterChange } =
    useHomeContainer();

  return (
    <div className='root'>
      <div className='body'>
        <Filters products={allProducts} onFilterChange={handleFilterChange} />
        <ProductsCatalog products={filteredProducts} />
      </div>
    </div>
  );
};

export default HomeContainer;
