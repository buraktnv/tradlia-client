import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

const pages: Record<string, { title: string; intro: string }> = {
  "membership-agreement": {
    title: "Membership Agreement",
    intro: "The terms that govern buyer and seller memberships on the Tradlia marketplace.",
  },
  "privacy-notice": {
    title: "Privacy Notice",
    intro: "How Tradlia collects, uses and protects your personal data.",
  },
  "terms-of-use": {
    title: "Terms of Use",
    intro: "The rules for using the Tradlia website and services.",
  },
  "withdrawal-cancellation-return-terms": {
    title: "Withdrawal, Cancellation & Return Terms",
    intro: "Your rights to withdraw from a purchase, cancel an order or return a product.",
  },
  "privacy-and-security": {
    title: "Privacy & Security",
    intro: "The technical and organisational measures Tradlia uses to keep your account safe.",
  },
  "industrial-supplies": {
    title: "Industrial Supplies",
    intro: "A category overview for workshops and manufacturers sourcing supplies on Tradlia.",
  },
  "facility-management": {
    title: "Facility Management",
    intro: "Products and equipment tailored to facility teams.",
  },
  "workshop-tools": {
    title: "Workshop Tools",
    intro: "Tools, consumables and equipment for modern workshops.",
  },
  "warehouse-logistics": {
    title: "Warehouse & Logistics",
    intro: "Storage, handling and shipping equipment for warehouses.",
  },
  "procurement-teams": {
    title: "Procurement Teams",
    intro: "How purchasing teams procure through Tradlia.",
  },
  "who-can-join": {
    title: "Who Can Join?",
    intro: "Tradlia is open to verified businesses, tradespeople and individual buyers.",
  },
  "how-to-buy-or-sell": {
    title: "How to Buy or Sell",
    intro: "A step-by-step walkthrough of buying and selling on the marketplace.",
  },
  "how-to-add-listing": {
    title: "How to Add a Listing",
    intro: "Create your first product listing in a few minutes.",
  },
  "what-is-seller-agreed-shipping": {
    title: "What Is Seller-Agreed Shipping?",
    intro: "Some sellers ship orders with their own courier agreements — here is what that means for you.",
  },
  "prohibited-products": {
    title: "Prohibited Products",
    intro: "Products that may not be listed on Tradlia for legal or safety reasons.",
  },
  "post-order-support": {
    title: "Post-Order Support",
    intro: "Get help with an order after it has been placed.",
  },
  "cancel-or-return-order": {
    title: "Cancel or Return an Order",
    intro: "How to cancel an unshipped order or start a return.",
  },
  faq: {
    title: "Frequently Asked Questions",
    intro: "Answers to the most common questions about Tradlia.",
  },
  "report-problem": {
    title: "Report a Problem",
    intro: "Something not working as expected? Let us know.",
  },
  contact: {
    title: "Contact Us",
    intro: "Reach the Tradlia support team.",
  },
};

const InfoPage: FC<{ title: string; intro: string }> = ({ title, intro }) => {
  return (
    <>
      <Head>
        <title>{`${title} | Tradlia`}</title>
      </Head>
      <div className="mx-auto max-w-3xl px-4 py-12 xl:px-10"><article className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-10">
        <h1 className="mb-3 font-display text-2xl font-bold text-ink sm:text-3xl">{title}</h1>
        <p className="font-display text-xs uppercase tracking-wider text-ink-soft mb-8">{intro}</p>
        {[1, 2, 3].map((section) => (
          <div key={section} className="mb-6">
            <h2 className="mb-2 font-display text-lg font-bold text-brand-600">
              {section}. Overview
            </h2>
            <p className="text-sm leading-6 text-ink-soft">
              This is placeholder content for the {title.toLowerCase()} page of the Tradlia demo
              storefront. In a production deployment this section would contain the full legal or
              informational text for this topic. The layout, typography and navigation you see here
              are fully functional and representative of the finished product.
            </p>
          </div>
        ))}
        <div className="mt-8 border-t border-line pt-6"><Link href="/" className="inline-flex items-center gap-1.5 rounded-pill border border-line px-5 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:bg-brand-50/40 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400">
          ← Back to homepage
        </Link></div>
      </article>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(pages).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug ?? "");
  const page = pages[slug];
  if (!page) {
    return { notFound: true };
  }
  return { props: { title: page.title, intro: page.intro } };
};

export default InfoPage;
