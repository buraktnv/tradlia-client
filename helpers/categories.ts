import { FC } from "react";
import {
  SvgMedical,
  SvgFamily,
  SvgDis,
  SvgVet,
  SvgHealthProduct,
  SvgPersonalCare,
  SvgSupplement,
  SvgOfficeSupply,
} from "./svgs/category";

export interface ISubCategory {
  id: string;
  name: string;
}

export interface ICategory {
  /** URL slug used in /category?cat=… */
  id: string;
  /** Display name (first line) */
  name: string;
  /** Optional second display line */
  subtitle?: string;
  icon: FC<any>;
  subCategories: ISubCategory[];
}

/**
 * Single source of truth for categories and their subcategories.
 * Used by TopCategories (navbar dropdown), DashboardNavigation (mobile menu),
 * the category page sidebar, AltCategories and Stories.
 */
export const categories: ICategory[] = [
  {
    id: "medical",
    name: "Medical",
    subtitle: "Products",
    icon: SvgMedical,
    subCategories: [
      { id: "diagnostics", name: "Diagnostics" },
      { id: "first-aid", name: "First Aid" },
      { id: "medical-devices", name: "Medical Devices" },
      { id: "surgery-supplies", name: "Surgery Supplies" },
    ],
  },
  {
    id: "family",
    name: "Family",
    subtitle: "Medicine",
    icon: SvgFamily,
    subCategories: [
      { id: "otc-medicines", name: "OTC Medicines" },
      { id: "baby-care", name: "Baby Care" },
      { id: "vitamins", name: "Vitamins" },
      { id: "cold-flu", name: "Cold & Flu" },
    ],
  },
  {
    id: "dental",
    name: "Dental",
    subtitle: "Care",
    icon: SvgDis,
    subCategories: [
      { id: "toothpaste", name: "Toothpaste" },
      { id: "brushes", name: "Brushes" },
      { id: "mouthwash", name: "Mouthwash" },
      { id: "dental-equipment", name: "Dental Equipment" },
    ],
  },
  {
    id: "veterinary",
    name: "Veterinary",
    subtitle: "Care",
    icon: SvgVet,
    subCategories: [
      { id: "pet-food", name: "Pet Food" },
      { id: "pet-health", name: "Pet Health" },
      { id: "grooming", name: "Grooming" },
      { id: "vet-supplies", name: "Vet Supplies" },
    ],
  },
  {
    id: "health",
    name: "Health",
    subtitle: "Products",
    icon: SvgHealthProduct,
    subCategories: [
      { id: "monitors", name: "Monitors" },
      { id: "therapy", name: "Therapy" },
      { id: "mobility-aids", name: "Mobility Aids" },
      { id: "personal-safety", name: "Personal Safety" },
    ],
  },
  {
    id: "personal-care",
    name: "Personal Care",
    subtitle: "& Cosmetics",
    icon: SvgPersonalCare,
    subCategories: [
      { id: "skin-care", name: "Skin Care" },
      { id: "hair-care", name: "Hair Care" },
      { id: "makeup", name: "Makeup" },
      { id: "mens-care", name: "Men's Care" },
    ],
  },
  {
    id: "supplements",
    name: "Dietary",
    subtitle: "Supplements",
    icon: SvgSupplement,
    subCategories: [
      { id: "protein", name: "Protein" },
      { id: "omega", name: "Omega" },
      { id: "herbal", name: "Herbal" },
      { id: "multivitamins", name: "Multivitamins" },
    ],
  },
  {
    id: "office",
    name: "Office &",
    subtitle: "Stationery",
    icon: SvgOfficeSupply,
    subCategories: [
      { id: "paper", name: "Paper" },
      { id: "writing", name: "Writing" },
      { id: "desk", name: "Desk Supplies" },
      { id: "hygiene", name: "Hygiene Supplies" },
    ],
  },
];

export function getCategoryById(id?: string | string[]) {
  return categories.find((c) => c.id === id) ?? null;
}

export default categories;
