import { FC } from "react";
import {
  SvgPackaging,
  SvgFasteners,
  SvgElectronics,
  SvgSafety,
  SvgTools,
  SvgElectrical,
  SvgLab,
  SvgOffice,
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
    id: "packaging",
    name: "Packaging",
    subtitle: "& Shipping",
    icon: SvgPackaging,
    subCategories: [
      { id: "boxes", name: "Boxes" },
      { id: "pallet-wrap", name: "Pallet Wrap" },
      { id: "mailers", name: "Mailers" },
      { id: "labels", name: "Labels" },
    ],
  },
  {
    id: "fasteners",
    name: "Fasteners",
    subtitle: "& Fixings",
    icon: SvgFasteners,
    subCategories: [
      { id: "screws", name: "Screws" },
      { id: "bolts", name: "Bolts" },
      { id: "anchors", name: "Anchors" },
      { id: "rivets", name: "Rivets" },
    ],
  },
  {
    id: "electronics",
    name: "Electronics",
    subtitle: "Components",
    icon: SvgElectronics,
    subCategories: [
      { id: "cables", name: "Cables" },
      { id: "connectors", name: "Connectors" },
      { id: "sensors", name: "Sensors" },
      { id: "power-supplies", name: "Power Supplies" },
    ],
  },
  {
    id: "safety",
    name: "Safety Gear",
    subtitle: "& Workwear",
    icon: SvgSafety,
    subCategories: [
      { id: "helmets", name: "Helmets" },
      { id: "gloves", name: "Gloves" },
      { id: "goggles", name: "Goggles" },
      { id: "hi-vis-vests", name: "Hi-Vis Vests" },
    ],
  },
  {
    id: "tools",
    name: "Power Tools",
    subtitle: "& Accessories",
    icon: SvgTools,
    subCategories: [
      { id: "drills", name: "Drills" },
      { id: "grinders", name: "Grinders" },
      { id: "saws", name: "Saws" },
      { id: "bits-blades", name: "Bits & Blades" },
    ],
  },
  {
    id: "electrical",
    name: "Electrical",
    subtitle: "Supplies",
    icon: SvgElectrical,
    subCategories: [
      { id: "wiring", name: "Wiring" },
      { id: "breakers", name: "Breakers" },
      { id: "lighting", name: "Lighting" },
      { id: "conduit", name: "Conduit" },
    ],
  },
  {
    id: "lab",
    name: "Lab & Measurement",
    subtitle: "Precision",
    icon: SvgLab,
    subCategories: [
      { id: "multimeters", name: "Multimeters" },
      { id: "calipers", name: "Calipers" },
      { id: "microscopes", name: "Microscopes" },
      { id: "test-kits", name: "Test Kits" },
    ],
  },
  {
    id: "office",
    name: "Office",
    subtitle: "& Facility",
    icon: SvgOffice,
    subCategories: [
      { id: "paper", name: "Paper" },
      { id: "printing", name: "Printing" },
      { id: "cleaning", name: "Cleaning" },
      { id: "breakroom", name: "Breakroom" },
    ],
  },
];

export function getCategoryById(id?: string | string[]) {
  return categories.find((c) => c.id === id) ?? null;
}

export default categories;
