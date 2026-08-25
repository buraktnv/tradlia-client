import Image from "next/image";
import { FC, useState } from "react";

const SidebarCard: FC<any> = ({ content }) => {
  const [activeImage, setActiveImage] = useState<any>(content.mainImage);
  const thumbnails = [
    { src: content.slider1, label: 1 },
    { src: content.slider2, label: 2 },
    { src: content.slider3, label: 3 },
    { src: content.slider4, label: 4 },
  ];
  return (
    <div className="flex flex-col gap-4 px-4 py-4 bg-surface rounded-card shadow-card border border-line mx-3 xl:mx-0">
      <div className="leading-5">
        <h2 className="font-display font-semibold text-base text-ink">{content.name}</h2>
        <p className="text-sm text-ink-muted">{content.brand}</p>
      </div>
      <div className="relative w-full h-40 xl:h-36 bg-canvas rounded-card">
        <Image className="object-contain" src={activeImage} fill sizes="(max-width: 1280px) 80vw, 20vw" alt={content.name} />
      </div>
      <div className="grid grid-cols-4 gap-2" role="group" aria-label="Product images">
        {thumbnails.map((thumb) => (
          <button
            key={thumb.label}
            type="button"
            aria-label={`View product image ${thumb.label}`}
            aria-pressed={activeImage === thumb.src}
            onClick={() => setActiveImage(() => thumb.src)}
            className={`bg-surface rounded-card p-0.5 cursor-pointer select-none transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
              activeImage === thumb.src
                ? "border-2 border-brand-400"
                : "border border-line hover:border-brand-300"
            }`}
          >
            <span className="relative block w-full h-12 xl:h-8">
              <Image className="object-contain" src={thumb.src} fill sizes="10vw" alt="" />
            </span>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="text-danger font-medium text-sm text-left transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-danger/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-card w-max"
      >
        Report an Error
      </button>
    </div>
  );
};

export default SidebarCard;
