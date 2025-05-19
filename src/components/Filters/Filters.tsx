import "./Filters.styles.css";
import { useFilters } from "./Filters.hooks";
import type { Product } from "../../types/Product";

interface FiltersProps {
  products: Product[];
  onFilterChange: (filtered: Product[]) => void;
}

const Filters = ({ products, onFilterChange }: FiltersProps) => {
  const {
    categories,
    selectedCategories,
    toggleCategory,
    isDropdownOpen,
    toggleDropdown,
    dropdownRef,
  } = useFilters(products, onFilterChange);

  return (
    <div className="filter-container" ref={dropdownRef}>
      <button className="filter-toggle" onClick={toggleDropdown}>
        Filter
      </button>

      {isDropdownOpen && (
        <div className="filter-dropdown">
          {categories.map((category) => (
            <label key={category} className="filter-option">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="filter-checkbox"
              />
              {category}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;