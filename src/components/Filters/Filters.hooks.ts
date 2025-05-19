import { useEffect, useRef, useState } from "react";
import type { Product } from "../../types/Product";

type UseFiltersHook = {
  categories: string[];
  selectedCategories: string[];
  isDropdownOpen: boolean;
  toggleDropdown: () => void;
  toggleCategory: (category: string) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
};

export const useFilters = (
  products: Product[],
  onFilterChange: (filtered: Product[]) => void
): UseFiltersHook => {
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      onFilterChange(products);
    } else {
      const filtered = products.filter((p) =>
        selectedCategories.includes(p.category)
      );
      onFilterChange(filtered);
    }
  }, [selectedCategories, products]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return {
    categories,
    selectedCategories,
    isDropdownOpen,
    toggleDropdown,
    toggleCategory,
    dropdownRef,
  };
};