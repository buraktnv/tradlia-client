import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PortalModal from "../shared/PortalModal";
import { categories } from "../../helpers/categories";
import type { ICategory } from "../../helpers/categories";

interface StoryProduct {
  name: string;
  brand: string;
  price: number;
  image: string;
}

// Small static catalog used to populate the story overlay per category.
const storyProducts: Record<string, StoryProduct[]> = {
  packaging: [
    { name: "Double-Wall Boxes 50 pcs", brand: "StackSafe - 400×300×300 mm", price: 18.5, image: "/images/photos/transparent/prod-01.svg" },
    { name: "Pallet Wrap 20 µm", brand: "GripTight - 500 m Roll", price: 45.5, image: "/images/photos/transparent/prod-02.svg" },
    { name: "Shipping Labels A4", brand: "StackSafe - 100 Sheets", price: 9.99, image: "/images/photos/transparent/prod-15.svg" },
  ],
  fasteners: [
    { name: "Wood Screws 4×40", brand: "TorqueMax - 500 Count", price: 36.5, image: "/images/photos/transparent/prod-03.svg" },
    { name: "Hex Bolts M8", brand: "BoltCore - 200 Count", price: 9.9, image: "/images/photos/transparent/prod-04.svg" },
    { name: "Universal Anchors", brand: "BoltCore - 100 Count", price: 12.49, image: "/images/photos/transparent/prod-05.svg" },
  ],
  electronics: [
    { name: "CAT6 Cable 305 m", brand: "LinkPro - Solid Copper", price: 12.75, image: "/images/photos/transparent/prod-06.svg" },
    { name: "Temp Sensor Module", brand: "SenseIt - ±0.5°C", price: 6.4, image: "/images/photos/transparent/prod-10.svg" },
    { name: "Power Supply 24V 5A", brand: "LinkPro - Industrial", price: 21.99, image: "/images/photos/transparent/prod-11.svg" },
  ],
  safety: [
    { name: "EN397 Safety Helmet", brand: "HardHat Pro - White", price: 27.9, image: "/images/photos/transparent/prod-07.svg" },
    { name: "Cut-Resistant Gloves", brand: "SafeGrip - Level D Pair", price: 19.49, image: "/images/photos/transparent/prod-08.svg" },
    { name: "Hi-Vis Vest Class 2", brand: "SafeGrip - Yellow XL", price: 8.99, image: "/images/photos/transparent/prod-09.svg" },
  ],
  tools: [
    { name: "18V Combi Drill", brand: "DrillMaster - 2 Batteries", price: 23.5, image: "/images/photos/transparent/prod-09.svg" },
    { name: "115 mm Angle Grinder", brand: "AnglePro - 900 W", price: 54.0, image: "/images/photos/transparent/prod-10.svg" },
    { name: "Circular Saw Blade Set", brand: "DrillMaster - 10 Pieces", price: 16.75, image: "/images/photos/transparent/prod-12.svg" },
  ],
  electrical: [
    { name: "Circuit Breaker 16A", brand: "VoltLine - Type B DIN", price: 21.9, image: "/images/photos/transparent/prod-11.svg" },
    { name: "LED High Bay 150W", brand: "BrightWork - IP65", price: 14.25, image: "/images/photos/transparent/prod-14.svg" },
    { name: "H07RN-F Cable 3×2.5", brand: "VoltLine - 50 m Drum", price: 39.99, image: "/images/photos/transparent/prod-05.svg" },
  ],
  lab: [
    { name: "Digital Caliper 150 mm", brand: "PreciScale - IP54", price: 8.44, image: "/images/photos/transparent/prod-13.svg" },
    { name: "TRMS Multimeter", brand: "MultiCheck - CAT III", price: 32.6, image: "/images/photos/transparent/prod-14.svg" },
    { name: "USB Microscope 1000×", brand: "PreciScale - LED Ring", price: 24.99, image: "/images/photos/transparent/prod-15.svg" },
  ],
  office: [
    { name: "A4 Paper 500 sheets", brand: "ClearOffice - 80 gsm", price: 11.2, image: "/images/photos/transparent/prod-15.svg" },
    { name: "Gel Pens Blue 10 pcs", brand: "WriteWell - 0.7 mm", price: 7.85, image: "/images/photos/transparent/prod-16.svg" },
    { name: "Facial Tissue Box", brand: "ClearOffice - 100 Sheets", price: 4.25, image: "/images/photos/transparent/prod-08.svg" },
  ],
};

// Safety net for categories without a dedicated entry.
const fallbackProducts: StoryProduct[] = [
  { name: "Tradlia Bestseller Bundle", brand: "Assorted - Top Rated", price: 24.99, image: "/images/photos/transparent/prod-01.svg" },
  { name: "Workshop Essentials Pack", brand: "Assorted - Top Rated", price: 29.99, image: "/images/photos/transparent/prod-07.svg" },
];

const getFullName = (cat: ICategory) => (cat.subtitle ? `${cat.name} ${cat.subtitle}` : cat.name);

const Stories: FC = () => {
  const [openCategory, setOpenCategory] = useState<ICategory | null>(null);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const products = openCategory ? storyProducts[openCategory.id] ?? fallbackProducts : [];
  const current = products[slideIndex] ?? products[0];

  // Restart the progress bar animation for the active slide.
  useEffect(() => {
    setProgress(0);
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setProgress(100));
    });
    return () => cancelAnimationFrame(raf);
  }, [slideIndex, openCategory]);

  // Auto-advance the story every 4 seconds (matches the progress bar duration).
  useEffect(() => {
    if (!openCategory || products.length === 0) return;
    const timer = setTimeout(() => {
      setSlideIndex((i) => (i + 1) % products.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [openCategory, slideIndex, products.length]);

  const handleTap = (e: React.MouseEvent) => {
    if (!openCategory || products.length === 0) return;
    const x = e.clientX;
    const mid = window.innerWidth / 2;
    if (x < mid) setSlideIndex((i) => (i - 1 + products.length) % products.length);
    else setSlideIndex((i) => (i + 1) % products.length);
  };

  return (
    <section className="bg-white">
      <div className="container flex gap-4 px-4 py-6 mx-auto overflow-x-auto hiddenScroll xl:px-0">
        {categories.map((cat) => (
          <button
            type="button"
            key={cat.id}
            onClick={() => {
              setSlideIndex(0);
              setOpenCategory(cat);
            }}
            className="flex flex-col items-center shrink-0 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 rounded-full"
          >
            <span className="p-[2.5px] rounded-full bg-gradient-to-tr from-brand-300 via-brand-400 to-brand-600 transition-transform duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:scale-105">
              <span className="flex items-center justify-center w-14 h-14 xl:w-[72px] xl:h-[72px] bg-surface rounded-full">
                <span className="flex items-center justify-center w-full h-full bg-canvas rounded-full">
                  <span className="w-8 h-8 xl:w-9 xl:h-9 text-ink-soft">
                    <cat.icon isActive={false} />
                  </span>
                </span>
              </span>
            </span>
            <span className="mt-1.5 text-[10px] leading-3 xl:text-xs text-center max-w-[72px] text-ink-soft font-medium transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:text-brand-600">
              {getFullName(cat)}
            </span>
          </button>
        ))}
      </div>
      <PortalModal
        open={!!openCategory}
        onClose={() => setOpenCategory(null)}
        panelClassName="!max-h-full !h-screen !w-screen !max-w-full !rounded-none !bg-black !p-0 !overflow-hidden"
      >
        {openCategory && (
          <div className="relative flex flex-col h-full bg-black">
            {/* progress bars */}
            <div className="flex gap-1 px-4 pt-4">
              {products.map((_p, i) => (
                <div key={i} className="h-[3px] flex-1 bg-surface/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-surface rounded-full transition-[width] duration-[4000ms] ease-linear"
                    style={{ width: i < slideIndex ? "100%" : i === slideIndex ? `${progress}%` : "0%" }}
                  />
                </div>
              ))}
            </div>
            {/* header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-surface/10 text-surface text-sm font-display font-semibold">
                  {openCategory.name.slice(0, 1)}
                </span>
                <div>
                  <p className="text-surface text-sm font-semibold">{getFullName(openCategory)}</p>
                  <p className="text-surface/50 text-[10px]">
                    {slideIndex + 1} / {products.length}
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close story"
                onClick={() => setOpenCategory(null)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-surface/10 text-surface hover:bg-surface/20 cursor-pointer transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            {/* story slide — tap left/right halves to navigate */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 pb-10 cursor-pointer select-none" onClick={handleTap}>
              {current ? (
                <>
                  <div className="relative w-56 h-56 xl:w-80 xl:h-80">
                    <Image src={current.image} alt={current.name} fill sizes="100vw" className="object-contain drop-shadow-2xl" />
                  </div>
                  <p className="mt-8 text-surface text-lg xl:text-2xl font-display font-semibold text-center">{current.name}</p>
                  <p className="mt-1 text-surface/60 text-sm xl:text-base text-center">{current.brand}</p>
                  <p className="mt-3 font-display text-brand-300 text-xl xl:text-2xl font-semibold">
                    {`${current.price.toFixed(2)}`.replace(".", ",")} $
                  </p>
                  <Link
                    href={`/category?cat=${openCategory.id}`}
                    onClick={() => setOpenCategory(null)}
                    className="mt-6 px-8 py-2 rounded-pill bg-brand-400 text-ink text-sm font-semibold cursor-pointer transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-1 focus-visible:ring-offset-black"
                  >
                    Shop {getFullName(openCategory)}
                  </Link>
                </>
              ) : (
                <p className="text-surface/60">No products in this category yet.</p>
              )}
            </div>
          </div>
        )}
      </PortalModal>
    </section>
  );
};

export default Stories;
