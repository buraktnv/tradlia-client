import { NextPage } from "next";
import Image from "next/image";
import { FC, useState } from "react";
import { toast } from "react-toastify";
import { useBasketContext } from "../../helpers/contexts/BasketContext";
import { SvgCheckMark, SvgClose, SvgDomesticCargo, SvgPlus, SvgShopCar, SvgSmartBasket } from "../../helpers/svgs/basketSvg";

interface SmartProduct {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
}

const productList: SmartProduct[] = [
  {
    id: 1,
    name: "PureSafe 3-Ply Black",
    brand: "Dust Mask FFP2 with Valve 5-pack",
    image: "/images/photos/product-2.svg",
    price: 47.98,
  },
  {
    id: 2,
    name: "GripTight Pallet Wrap",
    brand: "20 µm Roll",
    image: "/images/photos/product-2.svg",
    price: 53.98,
  },
  {
    id: 3,
    name: "TorqueMax Wood Screws",
    brand: "4×40 (500 Count)",
    image: "/images/photos/product-3.svg",
    price: 25.98,
  },
  {
    id: 4,
    name: "ClearOffice A4 Paper",
    brand: "500 Sheets 80 gsm",
    image: "/images/photos/product-15.svg",
    price: 36.5,
  },
  {
    id: 5,
    name: "MultiCheck Digital TRMS",
    brand: "Multimeter",
    image: "/images/photos/product-14.svg",
    price: 23.5,
  },
];

interface BasketRow {
  id: number;
  productId: number | null;
  qty: number;
}

const DOMESTIC_SHIPPING = 35;

const formatPrice = (value: number) => `${value.toFixed(2).replace(".", ",")} $`;

const smartInputClass =
  "rounded-card border border-line bg-surface text-ink-soft outline-none focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none";

const primaryButtonClass =
  "rounded-pill bg-brand-400 hover:bg-brand-500 active:bg-brand-600 text-white font-semibold transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1";

const SmartBasket: NextPage = () => {
  const { addItem } = useBasketContext();
  const [rows, setRows] = useState<BasketRow[]>([
    { id: 0, productId: null, qty: 1 },
    { id: 1, productId: null, qty: 1 },
    { id: 2, productId: null, qty: 1 },
  ]);
  const [activePage, setActivePage] = useState<"create" | "basket">("create");
  const [shelfLifeOnly, setShelfLifeOnly] = useState<boolean>(false);

  const removeRow = (index: number) => {
    setRows((pre) => pre.filter((_, i) => i !== index));
  };

  const addRow = () => {
    if (rows.length < 10) {
      setRows((pre) => [...pre, { id: Date.now(), productId: null, qty: 1 }]);
    }
  };

  const updateRow = (index: number, patch: Partial<BasketRow>) => {
    setRows((pre) => pre.map((row, i) => (i === index ? { ...row, ...patch } : row)));
  };

  const selected = rows
    .map((row) => ({ row, product: productList.find((p) => p.id === row.productId) }))
    .filter((el): el is { row: BasketRow; product: SmartProduct } => Boolean(el.product));

  const productsTotal = selected.reduce((sum, el) => sum + el.product.price * el.row.qty, 0);
  const shippingTotal = selected.length > 0 ? DOMESTIC_SHIPPING : 0;
  const grandTotal = productsTotal + shippingTotal;

  const matchRatio =
    rows.length === 0 ? 0 : Math.round((selected.length / Math.max(rows.length, 1)) * 100);

  const createBasket = () => {
    if (selected.length === 0) {
      toast.error("Please select at least one product first.");
      return;
    }
    setActivePage("basket");
  };

  const addAllToCart = () => {
    if (selected.length === 0) return;
    selected.forEach((el) =>
      addItem({
        id: el.product.id,
        name: el.product.name,
        brand: el.product.brand,
        image: el.product.image,
        price: el.product.price * el.row.qty,
        shipping: 0,
      })
    );
  };

  return (
    <div className="container mx-auto mt-[2rem] mb-[3rem] flex flex-col gap-4 rounded-card bg-canvas px-5 pt-2 xl:w-3/5 xl:px-24 xl:py-10 xl:mb-8 border border-line shadow-card">
      <div className="flex items-center gap-4 px-1 xl:px-0">
        <div className="h-12 w-12 shrink-0 rounded-pill bg-brand-50 p-2.5 text-brand-600 xl:h-16 xl:w-16">
          <SvgSmartBasket />
        </div>
        <div>
          <h3 className="font-display text-xs uppercase tracking-wider text-brand-600 font-semibold">
            Tradlia Smart Basket
          </h3>
          <p className="mt-1 text-sm leading-snug text-ink-soft">
            Create your shopping list with up to 10 products.
            <br /> Generate the most profitable basket with a single click.
          </p>
        </div>
      </div>
      <MatchMeter ratio={matchRatio} />
      {activePage === "create" ? (
        <>
          <div className="grid grid-cols-5 py-1 pt-3 font-medium uppercase tracking-wide text-ink-muted">
            <div className="col-span-3 px-3 text-xs">Product List</div>
            <div className="col-span-1 text-left text-xs">Qty</div>
            <div className="col-span-1"></div>
          </div>
          <div className="grid gap-[1.5rem]">
            {rows.map((row, index) => (
              <BasketRow
                key={row.id}
                row={row}
                products={productList}
                onChange={(patch) => updateRow(index, patch)}
                onRemove={() => removeRow(index)}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={addRow}
            disabled={rows.length >= 10}
            className="my-2 flex select-none items-center gap-3 px-3 xl:px-4 xl:py-4 self-start rounded-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 disabled:opacity-50 disabled:pointer-events-none group"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-pill border border-line bg-surface text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:border-brand-300">
              <span className="block h-3 w-3">
                <SvgPlus />
              </span>
            </span>
            <p className="text-sm font-semibold text-brand-600">Add Another Product</p>
          </button>
          <div className="flex items-center justify-start px-4">
            <label htmlFor="shelf-life-only" className="flex items-center justify-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                className="hidden peer"
                id="shelf-life-only"
                checked={shelfLifeOnly}
                onChange={(e) => setShelfLifeOnly(e.target.checked)}
              />
              <span className="flex justify-center items-center w-[23px] h-[23px] rounded-md peer-checked:bg-brand-400 peer-checked:border-brand-400 text-transparent peer-checked:text-white border-2 border-line bg-surface transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400">
                <span className="w-3 h-3">
                  <SvgCheckMark />
                </span>
              </span>
              <p className="text-sm font-medium text-ink-soft">Only Shelf Life Over 12 Months</p>
            </label>
          </div>
          <div className="py-4">
            <button type="button" onClick={createBasket} className={`${primaryButtonClass} w-full px-4 py-3 text-sm xl:w-max xl:px-10`}>
              Create Smart Basket
            </button>
          </div>
        </>
      ) : (
        <ConfirmBasketView
          selected={selected}
          productsTotal={productsTotal}
          shippingTotal={shippingTotal}
          grandTotal={grandTotal}
          onAddAll={addAllToCart}
          onBack={() => setActivePage("create")}
        />
      )}
    </div>
  );
};

const MatchMeter: FC<{ ratio: number }> = ({ ratio }) => (
  <div className="grid gap-2 px-1 xl:px-0" data-testid="match-meter">
    <div className="flex items-center justify-between">
      <p className="font-display text-xs uppercase tracking-wider text-ink-muted font-semibold">Basket Match</p>
      <p className="font-display text-sm font-semibold text-ink tabular-nums">{ratio}%</p>
    </div>
    <div
      role="progressbar"
      aria-label="Basket match ratio"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={ratio}
      className="h-2 w-full overflow-hidden rounded-pill bg-line"
    >
      <div
        className="h-full rounded-pill bg-gradient-to-r from-brand-400 to-brand-600 transition-all duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none"
        style={{ width: `${ratio}%` }}
      ></div>
    </div>
  </div>
);

const BasketRow: FC<{
  row: BasketRow;
  products: SmartProduct[];
  onChange: (patch: Partial<BasketRow>) => void;
  onRemove: () => void;
}> = ({ row, products, onChange, onRemove }) => {
  return (
    <div className="grid grid-cols-5 items-center gap-2 xl:gap-3">
      <div className="relative col-span-3">
        <select
          value={row.productId ?? ""}
          aria-label="Select product"
          onChange={(e) => onChange({ productId: e.target.value ? Number(e.target.value) : null })}
          className={`${smartInputClass} w-full appearance-none px-4 py-2.5 text-[12px] xl:px-6 xl:text-sm`}
        >
          <option value="" disabled>
            Select a product…
          </option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name} — {product.brand}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-4 top-3 h-3 w-3 rotate-180 text-brand-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20.115 11.541">
            <path
              d="M1353.53,411.979a1.484,1.484,0,0,0,2.1,0l7.525-7.525,7.526,7.525a1.483,1.483,0,0,0,2.1-2.1l-8.575-8.575a1.483,1.483,0,0,0-2.1,0l-8.575,8.575A1.483,1.483,0,0,0,1353.53,411.979Z"
              transform="translate(-1353.096 -400.873)"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      <div className="col-span-1">
        <input
          type="number"
          min={1}
          aria-label="Quantity"
          value={row.qty}
          onChange={(e) => onChange({ qty: Math.max(1, Number(e.target.value) || 1) })}
          className={`${smartInputClass} w-full px-2 py-2.5 text-center text-[12px] tabular-nums xl:text-sm`}
        />
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove product row"
          className="h-8 w-8 rounded-pill border border-danger/30 bg-surface text-danger transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-dangerTint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          <div className="mx-auto h-3 w-3">
            <SvgClose />
          </div>
        </button>
      </div>
    </div>
  );
};

const ConfirmBasketView: FC<{
  selected: { row: BasketRow; product: SmartProduct }[];
  productsTotal: number;
  shippingTotal: number;
  grandTotal: number;
  onAddAll: () => void;
  onBack: () => void;
}> = ({ selected, productsTotal, shippingTotal, grandTotal, onAddAll, onBack }) => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="rounded-card border border-line bg-surface p-4 shadow-card xl:p-6">
        <div className="mb-3 flex items-center justify-between border-b border-line pb-3">
          <p className="font-display text-base font-semibold text-ink">Your Smart Basket</p>
          <button
            type="button"
            onClick={onBack}
            className="rounded-pill border border-line bg-surface px-4 py-1.5 text-xs font-medium text-ink-soft hover:border-brand-300 hover:text-brand-700 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            Edit List
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {selected.map(({ row, product }) => (
            <div key={product.id} className="flex items-center gap-4 rounded-card border border-line bg-canvas p-3 xl:p-4">
              <div className="relative h-14 w-14 shrink-0">
                <Image className="object-contain" src={product.image} fill sizes="56px" alt={product.name} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-ink">{product.name}</p>
                <p className="truncate text-xs text-ink-muted">{product.brand}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-ink-muted tabular-nums">Qty: {row.qty}</p>
                <p className="whitespace-nowrap text-sm font-display font-bold text-ink tabular-nums">
                  {formatPrice(product.price * row.qty)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-card border border-line bg-surface p-4 shadow-card xl:p-6">
        <div className="flex items-center gap-2 border-b border-line pb-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-pill bg-brand-50 text-brand-600">
            <span className="block h-4 w-4">
              <SvgDomesticCargo />
            </span>
          </span>
          <p className="font-display text-base font-semibold text-ink">Order Summary</p>
        </div>
        <div className="grid grid-cols-3 gap-3 py-4">
          <div className="flex flex-col gap-1 text-center">
            <span className="text-xs text-ink-muted">Products</span>
            <span className="font-display font-semibold text-ink tabular-nums">{formatPrice(productsTotal)}</span>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <span className="text-xs text-ink-muted">Domestic Shipping</span>
            <span className="font-display font-semibold text-ink tabular-nums">{formatPrice(shippingTotal)}</span>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <span className="text-xs text-ink-muted">Total</span>
            <span className="font-display text-lg font-bold text-ink tabular-nums">{formatPrice(grandTotal)}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onAddAll}
          className={`${primaryButtonClass} flex items-center justify-center gap-2 px-8 py-3 text-sm`}
        >
          <span>Add All to Cart</span>
          <span className="block h-5 w-5">
            <SvgShopCar />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SmartBasket;
