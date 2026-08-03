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
} from "../../helpers/svgs/category";

export interface ICategoryItem {
  id: number;
  text1: string;
  text2: string;
  icon: () => FC<any>;
}

export const jsonCategoryList = [
  {
    id: 1,
    text1: "Medical",
    text2: "Products",
    icon: SvgMedical,
    align: "-left-4",
    rounded: ["rounded-br-[2rem]", "rounded-bl-[2rem]"],
  },
  {
    id: 2,
    text1: "Family",
    text2: "Medicine",
    icon: SvgFamily,
    align: "-left-4",
    rounded: ["rounded-br-[2rem]", "rounded-bl-[2rem]"],
  },
  {
    id: 3,
    text1: "Dental",
    text2: "Care",
    icon: SvgDis,
    align: "-left-4",
    rounded: ["rounded-br-[2rem]", "rounded-bl-[2rem]"],
  },
  {
    id: 4,
    text1: "Veterinary",
    text2: "Care",
    icon: SvgVet,
    align: "-left-4",
    rounded: ["rounded-br-[2rem]", "rounded-bl-[2rem]"],
  },
  {
    id: 5,
    text1: "Health",
    text2: "Products",
    icon: SvgHealthProduct,
    align: "-left-4",
    rounded: ["rounded-br-[2rem]", "rounded-bl-[2rem]"],
  },
  {
    id: 6,
    text1: "Personal Care",
    text2: "& Cosmetics",
    icon: SvgPersonalCare,
    align: "-left-4",
    rounded: ["rounded-br-[2rem]", "rounded-bl-[2rem]"],
  },
  {
    id: 7,
    text1: "Dietary",
    text2: "Supplements",
    align: "right-12 flex-row-reverse",
    icon: SvgSupplement,
    rounded: ["rounded-bl-[2rem]", "rounded-br-[2rem]"],
  },
  {
    id: 8,
    text1: "Office & Stationery",
    text2: "Hygiene",
    align: "right-20 flex-row-reverse",
    icon: SvgOfficeSupply,
    rounded: ["rounded-bl-[2rem]", "rounded-br-[2rem]"],
  },
];
