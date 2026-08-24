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
  { id: 1, name: "VitaPlus Healing Cream 40 ml", price: 18.5, categoryId: "medical", image: "/images/photos/transparent/prod-01.svg" },
  { id: 2, name: "SafeGuard Surgical Mask 50 pcs", price: 45.5, categoryId: "medical", image: "/images/photos/transparent/prod-02.svg" },
  { id: 3, name: "PureLife Baby Shampoo 200 ml", price: 36.5, categoryId: "family", image: "/images/photos/transparent/prod-03.svg" },
  { id: 4, name: "GreenLeaf Baby Powder 100 gr", price: 9.9, categoryId: "family", image: "/images/photos/transparent/prod-04.svg" },
  { id: 5, name: "DentCare Whitening Toothpaste 75 ml", price: 12.75, categoryId: "dental", image: "/images/photos/transparent/prod-05.svg" },
  { id: 6, name: "SoftClean Toothbrush Soft 2 pcs", price: 6.4, categoryId: "dental", image: "/images/photos/transparent/prod-06.svg" },
  { id: 7, name: "PetWell Flea & Tick Drops", price: 27.9, categoryId: "veterinary", image: "/images/photos/transparent/prod-07.svg" },
  { id: 8, name: "Nordwell PestGuard Ant Granules", price: 19.49, categoryId: "veterinary", image: "/images/photos/transparent/prod-08.svg" },
  { id: 9, name: "MediCore Contactless Thermometer", price: 23.5, categoryId: "health", image: "/images/photos/transparent/prod-09.svg" },
  { id: 10, name: "FlexiGrip Blood Pressure Monitor", price: 54.0, categoryId: "health", image: "/images/photos/transparent/prod-10.svg" },
  { id: 11, name: "GlowSkin Vitamin C Serum 30 ml", price: 21.9, categoryId: "personal-care", image: "/images/photos/transparent/prod-11.svg" },
  { id: 12, name: "HerbalHair Repair Shampoo 250 ml", price: 14.25, categoryId: "personal-care", image: "/images/photos/transparent/prod-12.svg" },
  { id: 13, name: "Herbiva Echinacea Lozenges 24 pcs", price: 8.44, categoryId: "supplements", image: "/images/photos/transparent/prod-13.svg" },
  { id: 14, name: "Nordwell Omega-3 Capsules 60 pcs", price: 32.6, categoryId: "supplements", image: "/images/photos/transparent/prod-14.svg" },
  { id: 15, name: "ClearOffice A4 Paper 500 sheets", price: 11.2, categoryId: "office", image: "/images/photos/transparent/prod-15.svg" },
  { id: 16, name: "WriteWell Gel Pens Blue 10 pcs", price: 7.85, categoryId: "office", image: "/images/photos/transparent/prod-16.svg" },
];

export default productCatalog;
