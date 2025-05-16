import type React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import ProductsCatalog from "../../components/ProductsCatalog/ProductsCatalog";

const HomeContainer: React.FC = () => {
  return (
    <div className='root'>
      <Navbar />
      <div className='body'>
        <Filters />
        <ProductsCatalog />
      </div>
      <Footer />
    </div>
  );
};

export default HomeContainer;
