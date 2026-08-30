import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const discoverCards = [
  {
    href: "/category?cat=packaging",
    title: "Packaging",
    image: "/images/main/homepage/packaging-category.svg",
    alt: "Packaging & Shipping",
  },
  {
    href: "/category?cat=tools",
    title: "Power Tools",
    image: "/images/main/homepage/health-category.svg",
    alt: "Power Tools & Accessories",
  },
  {
    href: "/category?cat=safety",
    title: "Safety Gear",
    image: "/images/main/homepage/supplements-category.svg",
    alt: "Safety Gear & Workwear",
  },
  {
    href: "/category?cat=electronics",
    title: "Electronics",
    image: "/images/main/homepage/personal-care-category.svg",
    alt: "Electronics Components",
  },
];

const DiscoverCategory: FC<any> = () => {
  return (
    <div className="relative items-center hidden w-full pt-8 pb-16 xl:mt-12 xl:flex">
      <div
        className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden bg-gradient-to-b from-brand-50 via-canvas to-brand-50/60"
        aria-hidden="true"
      >
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-brand-200/40 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-20 w-96 h-96 rounded-full bg-brand-100/50 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-surface/40 blur-2xl"></div>
      </div>
      <div className="container grid w-full grid-cols-4 gap-8 mx-auto">
        {discoverCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="block rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
          >
            <div className="relative flex flex-col w-full h-72 cursor-pointer select-none group rounded-card transition-shadow duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none shadow-card hover:shadow-pop bg-surface overflow-hidden">
              <div className="pt-5 pb-1 pl-8 font-display text-lg font-semibold text-ink">{card.title}</div>
              <div className="relative w-full flex-1 p-4 pr-20">
                <div className="relative top-0 left-0 w-full h-full transition-transform duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:scale-105">
                  <Image className="object-contain" src={card.image} alt={card.alt} fill sizes="100vw" />
                </div>
              </div>
              <div className="absolute text-sm font-semibold -bottom-3 right-8" aria-hidden="true">
                <p className="px-3 py-1 bg-ink text-surface rounded-pill text-center shadow-card">Shop</p>
                <p className="px-3 py-1 mt-1 bg-brand-400 text-ink rounded-pill text-center">Discover</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DiscoverCategory;
