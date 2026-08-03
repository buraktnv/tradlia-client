# Tradlia — B2B Marketplace Seller Dashboard (Demo)

A full-featured B2B marketplace seller dashboard built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

> ⚠️ **Demo project** — all company names, product names, seller identities, contact information, and data are entirely fictional. This is a portfolio piece and is not associated with any real business.

## Features

- **Marketplace browsing** — category pages, product detail pages, seller profiles
- **Smart basket** — add/remove items, multi-seller cart, campaign-aware pricing
- **Seller dashboard** — comprehensive profile management with 13 functional sections:
  - Adverts (online/offline/waiting approval), Favourites, Feedback & ratings
  - Integrator connections, Message center, Orders (bought/sold with full lifecycle)
  - Receipts & invoices, Performance reports with charts (Recharts)
  - Settings (profile, notifications, password, shipment, address, sales rules)
  - Support tickets, Wallet & discount coupons
- **Responsive design** — desktop and mobile layouts
- **Server-side rendering** — Next.js pages router with static generation
- **Real-time basket** — React Context + toast notifications

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (Pages Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4, Sass (SCSS modules) |
| Charts | Recharts |
| Notifications | React Toastify |
| Linting | ESLint 9 (flat config) |
| Runtime | Node.js ≥ 18.18 |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
tradlia-client/
├── components/          # React components by domain
│   ├── basket/         # Cart & checkout
│   ├── category/       # Category listing
│   ├── home/           # Homepage sections
│   ├── product/        # Product detail
│   ├── profile/        # Seller dashboard modules
│   ├── seller/         # Seller page
│   ├── sellerModal/    # Seller detail modal
│   └── shared/         # Shared UI (navbar, footer, layout)
├── helpers/
│   ├── contexts/       # React contexts (BasketContext)
│   ├── hooks/          # Custom hooks (useMediaQuery)
│   └── svgs/           # SVG icon components
├── pages/              # Next.js pages (routes)
├── public/             # Static assets
│   └── images/         # Product images, icons
└── styles/             # Global styles, Tailwind entry
```

## License

MIT
