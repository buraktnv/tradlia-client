/**
 * Canonical static product catalog. No API — all mock data.
 * Images come from /images/photos/transparent/prod-XX.svg.
 */
export interface CatalogProduct {
  id: number;
  name: string;
  price: number;
  categoryId: string;
  image: string;
}

export const productCatalog: CatalogProduct[] = [
  { id: 1, name: "StackSafe Double-Wall Boxes 50 pcs", price: 18.5, categoryId: "packaging", image: "/images/photos/transparent/prod-01.svg" },
  { id: 2, name: "GripTight Pallet Wrap 20 µm", price: 45.5, categoryId: "packaging", image: "/images/photos/transparent/prod-02.svg" },
  { id: 3, name: "TorqueMax Wood Screws 4×40 (500)", price: 36.5, categoryId: "fasteners", image: "/images/photos/transparent/prod-03.svg" },
  { id: 4, name: "BoltCore Hex Bolts M8 (200)", price: 9.9, categoryId: "fasteners", image: "/images/photos/transparent/prod-04.svg" },
  { id: 5, name: "LinkPro CAT6 Cable 305 m", price: 12.75, categoryId: "electronics", image: "/images/photos/transparent/prod-05.svg" },
  { id: 6, name: "SenseIt Temp Sensor Module", price: 6.4, categoryId: "electronics", image: "/images/photos/transparent/prod-06.svg" },
  { id: 7, name: "HardHat Pro EN397 Helmet", price: 27.9, categoryId: "safety", image: "/images/photos/transparent/prod-07.svg" },
  { id: 8, name: "SafeGrip Cut-Resistant Gloves", price: 19.49, categoryId: "safety", image: "/images/photos/transparent/prod-08.svg" },
  { id: 9, name: "DrillMaster 18V Combi Drill", price: 23.5, categoryId: "tools", image: "/images/photos/transparent/prod-09.svg" },
  { id: 10, name: "AnglePro 115 mm Grinder", price: 54.0, categoryId: "tools", image: "/images/photos/transparent/prod-10.svg" },
  { id: 11, name: "VoltLine Circuit Breaker 16A", price: 21.9, categoryId: "electrical", image: "/images/photos/transparent/prod-11.svg" },
  { id: 12, name: "BrightWork LED High Bay 150W", price: 14.25, categoryId: "electrical", image: "/images/photos/transparent/prod-12.svg" },
  { id: 13, name: "PreciScale Digital Caliper 150 mm", price: 8.44, categoryId: "lab", image: "/images/photos/transparent/prod-13.svg" },
  { id: 14, name: "MultiCheck TRMS Multimeter", price: 32.6, categoryId: "lab", image: "/images/photos/transparent/prod-14.svg" },
  { id: 15, name: "ClearOffice A4 Paper 500 sheets", price: 11.2, categoryId: "office", image: "/images/photos/transparent/prod-15.svg" },
  { id: 16, name: "WriteWell Gel Pens Blue 10 pcs", price: 7.85, categoryId: "office", image: "/images/photos/transparent/prod-16.svg" },
];

export default productCatalog;
