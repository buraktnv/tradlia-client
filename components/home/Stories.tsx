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
  medical: [
    { name: "Nitrile Exam Gloves", brand: "MedSupply - 100 Count", price: 18.5, image: "/images/photos/transparent/prod-13.svg" },
    { name: "Digital Thermometer", brand: "MediCore - Clinical Grade", price: 23.5, image: "/images/photos/transparent/prod-10.svg" },
    { name: "Surgical Masks 3-Ply", brand: "SafeGuard - 50 Pack", price: 15.99, image: "/images/photos/transparent/prod-09.svg" },
  ],
  family: [
    { name: "Vitamin D3 5000 IU", brand: "NatureWise - 360 Softgels", price: 19.99, image: "/images/photos/transparent/prod-07.svg" },
    { name: "Cough Relief Drops", brand: "Herbiva - 24 Lozenges", price: 8.44, image: "/images/photos/transparent/prod-06.svg" },
    { name: "Baby Care Cream", brand: "PureLife - 200 ml", price: 12.9, image: "/images/photos/transparent/prod-02.svg" },
  ],
  dental: [
    { name: "Sonic Toothbrush", brand: "DentalPro - Soft Bristles", price: 29.99, image: "/images/photos/transparent/prod-11.svg" },
    { name: "Whitening Toothpaste", brand: "DentalPro - 100 ml", price: 6.49, image: "/images/photos/transparent/prod-04.svg" },
    { name: "Dental Floss Picks", brand: "DentalPro - 50 Count", price: 4.99, image: "/images/photos/transparent/prod-15.svg" },
  ],
  veterinary: [
    { name: "Pet Multivitamins", brand: "VetPlus - 120 Tablets", price: 21.99, image: "/images/photos/transparent/prod-03.svg" },
    { name: "Flea & Tick Spray", brand: "VetGuard - 250 ml", price: 16.75, image: "/images/photos/transparent/prod-05.svg" },
    { name: "Pet Wound Ointment", brand: "VetCare - 50 ml", price: 12.99, image: "/images/photos/transparent/prod-01.svg" },
  ],
  health: [
    { name: "Pulse Oximeter", brand: "ChoiceMMed - Fingertip", price: 24.99, image: "/images/photos/transparent/prod-12.svg" },
    { name: "Blood Pressure Monitor", brand: "Omron Platinum Series", price: 89.99, image: "/images/photos/transparent/prod-10.svg" },
    { name: "Heat Therapy Gel", brand: "MediHeat - 100 ml", price: 14.5, image: "/images/photos/transparent/prod-14.svg" },
  ],
  "personal-care": [
    { name: "Moisturizing Cream", brand: "PureLife - 200 ml", price: 12.9, image: "/images/photos/transparent/prod-02.svg" },
    { name: "Vitamin C Serum", brand: "GlowLab - 30 ml", price: 18.75, image: "/images/photos/transparent/prod-06.svg" },
    { name: "Hand Sanitizer Gel", brand: "Purell - 500 ml Pump", price: 12.49, image: "/images/photos/transparent/prod-05.svg" },
  ],
  supplements: [
    { name: "Omega-3 Softgels", brand: "NatureWise - 120 Count", price: 24.99, image: "/images/photos/transparent/prod-07.svg" },
    { name: "Multivitamin Complex", brand: "VitaPlus - 60 Tablets", price: 17.49, image: "/images/photos/transparent/prod-01.svg" },
    { name: "Herbal Sleep Aid", brand: "NightCalm - 30 Capsules", price: 13.99, image: "/images/photos/transparent/prod-15.svg" },
  ],
  office: [
    { name: "Desk Organizer Set", brand: "OfficePro - 5 Pieces", price: 27.99, image: "/images/photos/transparent/prod-16.svg" },
    { name: "Office Hygiene Kit", brand: "OfficePro - 10 Pieces", price: 19.99, image: "/images/photos/transparent/prod-09.svg" },
    { name: "First Aid Refills", brand: "SafeGuard - 25 Pieces", price: 11.5, image: "/images/photos/transparent/prod-08.svg" },
  ],
};

// Safety net for categories without a dedicated entry.
const fallbackProducts: StoryProduct[] = [
  { name: "Medical Essentials Kit", brand: "MedStore - Assorted", price: 24.99, image: "/images/photos/transparent/prod-01.svg" },
  { name: "Health & Wellness Pack", brand: "MedStore - Assorted", price: 29.99, image: "/images/photos/transparent/prod-07.svg" },
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
            className="flex flex-col items-center shrink-0 cursor-pointer group"
          >
            <span className="p-[2.5px] rounded-full bg-gradient-to-tr from-[#FFBE00] via-[#FF516B] to-[#5327A8] transition-transform duration-200 group-hover:scale-105">
              <span className="flex items-center justify-center w-14 h-14 xl:w-[72px] xl:h-[72px] bg-white rounded-full">
                <span className="flex items-center justify-center w-full h-full bg-[#F4F5F9] rounded-full">
                  <span className="w-8 h-8 xl:w-9 xl:h-9">
                    <cat.icon isActive={false} />
                  </span>
                </span>
              </span>
            </span>
            <span className="mt-1.5 text-[10px] leading-3 xl:text-xs text-center text-[#7E8096] font-medium group-hover:text-[#4CBEC5]">
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
                <div key={i} className="h-[3px] flex-1 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-[width] duration-[4000ms] ease-linear"
                    style={{ width: i < slideIndex ? "100%" : i === slideIndex ? `${progress}%` : "0%" }}
                  />
                </div>
              ))}
            </div>
            {/* header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white text-sm font-bold">
                  {openCategory.name.slice(0, 1)}
                </span>
                <div>
                  <p className="text-white text-sm font-semibold">{getFullName(openCategory)}</p>
                  <p className="text-white/50 text-[10px]">
                    {slideIndex + 1} / {products.length}
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close story"
                onClick={() => setOpenCategory(null)}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
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
                  <p className="mt-8 text-white text-lg xl:text-2xl font-bold text-center">{current.name}</p>
                  <p className="mt-1 text-white/60 text-sm xl:text-base text-center">{current.brand}</p>
                  <p className="mt-3 text-[#4CBEC5] text-xl xl:text-2xl font-bold">
                    {`${current.price.toFixed(2)}`.replace(".", ",")} $
                  </p>
                  <Link
                    href={`/category?cat=${openCategory.id}`}
                    onClick={() => setOpenCategory(null)}
                    className="mt-6 px-8 py-2 rounded-full bg-gradient-to-r from-[#66C1BF] to-[#00A29D] text-white text-sm font-medium cursor-pointer"
                  >
                    Shop {getFullName(openCategory)}
                  </Link>
                </>
              ) : (
                <p className="text-white/60">No products in this category yet.</p>
              )}
            </div>
          </div>
        )}
      </PortalModal>
    </section>
  );
};

export default Stories;
