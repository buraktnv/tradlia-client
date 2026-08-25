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
      <div className="container px-4 py-10 mx-auto xl:px-10 max-w-3xl">
        <h1 className="text-2xl font-bold text-[#4CBEC5] mb-4">{title}</h1>
        <p className="text-[#7E8096] font-medium mb-6">{intro}</p>
        {[1, 2, 3].map((section) => (
          <div key={section} className="mb-6">
            <h2 className="text-lg font-bold text-[#7E8096] mb-2">
              {section}. Overview
            </h2>
            <p className="text-sm leading-6 text-[#7E8096]">
              This is placeholder content for the {title.toLowerCase()} page of the Tradlia demo
              storefront. In a production deployment this section would contain the full legal or
              informational text for this topic. The layout, typography and navigation you see here
              are fully functional and representative of the finished product.
            </p>
          </div>
        ))}
        <Link href="/" className="inline-block mt-4 text-sm font-bold text-[#F39200] hover:underline">
          ← Back to homepage
        </Link>
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
