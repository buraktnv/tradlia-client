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
    text1: "Packaging",
    text2: "& Shipping",
    icon: SvgPackaging,
    align: "-left-4",
    rounded: ["rounded-br-[2rem]", "rounded-bl-[2rem]"],
  },
  {
    id: 2,
    text1: "Fasteners",
    text2: "& Fixings",
    icon: SvgFasteners,
    align: "-left-4",
    rounded: ["rounded-br-[2rem]", "rounded-bl-[2rem]"],
  },
  {
    id: 3,
    text1: "Electronics",
    text2: "Components",
    icon: SvgElectronics,
    align: "-left-4",
    rounded: ["rounded-br-[2rem]", "rounded-bl-[2rem]"],
  },
  {
    id: 4,
    text1: "Safety Gear",
    text2: "& Workwear",
    icon: SvgSafety,
    align: "-left-4",
    rounded: ["rounded-br-[2rem]", "rounded-bl-[2rem]"],
  },
  {
    id: 5,
    text1: "Power Tools",
    text2: "& Accessories",
    icon: SvgTools,
    align: "-left-4",
    rounded: ["rounded-br-[2rem]", "rounded-bl-[2rem]"],
  },
  {
    id: 6,
    text1: "Electrical",
    text2: "Supplies",
    icon: SvgElectrical,
    align: "-left-4",
    rounded: ["rounded-br-[2rem]", "rounded-bl-[2rem]"],
  },
  {
    id: 7,
    text1: "Lab & Measurement",
    text2: "Precision",
    align: "right-12 flex-row-reverse",
    icon: SvgLab,
    rounded: ["rounded-bl-[2rem]", "rounded-br-[2rem]"],
  },
  {
    id: 8,
    text1: "Office & Facility",
    text2: "Supplies",
    align: "right-20 flex-row-reverse",
    icon: SvgOffice,
    rounded: ["rounded-bl-[2rem]", "rounded-br-[2rem]"],
  },
];
