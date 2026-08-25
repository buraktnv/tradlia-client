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
    name: "Oxygenated Water",
    brand: "100 ml",
    image: "/images/photos/Oxygenated Water.svg",
    price: 53.98,
  },
  {
    id: 3,
    name: "StrepNaz Orange &",
    brand: "Echinacea 24 Lozenges",
    image: "/images/photos/StrepNaz Herbal.svg",
    price: 25.98,
  },
  {
    id: 4,
    name: "GentleCare Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/GentleCare Baby.svg",
    price: 36.5,
  },
  {
    id: 5,
    name: "Bo Hui Contactless Digital",
    brand: "Thermometer",
    image: "/images/photos/thermometer.svg",
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
    <div className="container mx-auto mt-[2rem] mb-[3rem] flex flex-col gap-4 rounded-3xl bg-white px-5 pt-2 xl:w-3/5 xl:bg-[#F4F5F7] xl:px-24 xl:py-10 xl:mb-0">
      <div className="flex items-center gap-4 px-1 xl:px-0">
        <div className="h-12 w-12 text-[#4CBEC5] xl:h-16 xl:w-16">
          <SvgSmartBasket />
        </div>
        <div>
          <h3 className="text-[13px] font-bold text-[#4CBEC5] xl:text-base">Tradlia Smart Basket</h3>
          <p className="text-[11px] leading-3 text-[#7E8096] xl:text-[0.85rem] xl:leading-4">
            Create your shopping list with up to 10 products.
            <br /> Generate the most profitable basket with a single click.
          </p>
        </div>
      </div>
      {activePage === "create" ? (
        <>
          <div className="grid grid-cols-5 py-1 pt-3 font-medium text-[#4CBEC5] xl:pt-8">
            <div className="col-span-3 px-3 text-[13px] leading-[8px] xl:text-base">Product List</div>
            <div className="col-span-1 text-left text-[13px] leading-[8px] xl:text-base">Qty</div>
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
          <div
            className="my-2 flex cursor-pointer select-none items-center gap-3 px-3 xl:px-4 xl:py-4"
            onClick={addRow}
          >
            <div className="h-5 w-4 text-[#4CBEC5] xl:w-5">
              <SvgPlus />
            </div>
            <p className="text-[13px] font-bold leading-[10px] text-[#4CBEC5] xl:text-base xl:leading-normal">
              Add Another Product
            </p>
          </div>
          <div className="flex items-center justify-start px-4">
            <label htmlFor="1" className="flex items-center justify-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                className="hidden peer"
                id="1"
                checked={shelfLifeOnly}
                onChange={(e) => setShelfLifeOnly(e.target.checked)}
              />
              <div className="flex justify-center items-center w-[23px] h-[23px] rounded-md peer-checked:bg-[#4CBEC5] text-transparent peer-checked:text-white border-2 border-[#4CBEC5]">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
              <p className="text-[13px] font-bold text-[#A0A2AF] leading-[10px] xl:text-base">
                Only Shelf Life Over 12 Months
              </p>
            </label>
          </div>
          <div className="py-4">
            <button
              type="button"
              onClick={createBasket}
              className="w-full rounded-full bg-gradient-to-r from-[#66C1BF] to-[#00A29D] px-4 py-3.5 text-[13px] font-bold leading-3 text-white drop-shadow-md xl:w-max xl:py-2 xl:text-base"
            >
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
          onChange={(e) => onChange({ productId: e.target.value ? Number(e.target.value) : null })}
          className="w-full appearance-none rounded-full border border-[#00B1B266] bg-white px-4 py-2.5 text-[12px] text-[#7E8096] shadow-sm outline-none focus:ring-1 ring-[#4CBEC5] xl:px-6 xl:text-sm"
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
        <div className="pointer-events-none absolute right-4 top-3 h-3 w-3 rotate-180 text-[#4CBEC5]">
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
          value={row.qty}
          onChange={(e) => onChange({ qty: Math.max(1, Number(e.target.value) || 1) })}
          className="w-full rounded-full border border-[#00B1B266] bg-white px-2 py-2.5 text-center text-[12px] text-[#7E8096] shadow-sm outline-none focus:ring-1 ring-[#4CBEC5] xl:text-sm"
        />
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove product row"
          className="h-8 w-8 rounded-full border border-[#FB295A40] text-[#FB295A] transition-colors hover:bg-[#FB295A10]"
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
      <div className="rounded-2xl border border-[#00b2b280] bg-white p-4 shadow-sm xl:p-6">
        <div className="mb-3 flex items-center justify-between border-b border-[#00B1B240] pb-3">
          <p className="text-base font-bold text-[#4CBEC5]">Your Smart Basket</p>
          <button
            type="button"
            onClick={onBack}
            className="rounded-full border border-[#00B1B266] px-4 py-1.5 text-xs font-medium text-[#4CBEC5]"
          >
            Edit List
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {selected.map(({ row, product }) => (
            <div
              key={product.id}
              className="flex items-center gap-4 rounded-xl border border-[#DADADA80] p-3 xl:p-4"
            >
              <div className="relative h-14 w-14 shrink-0">
                <Image className="object-contain" src={product.image} fill sizes="56px" alt={product.name} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-[#7E8096]">{product.name}</p>
                <p className="truncate text-xs text-[#7E8096]">{product.brand}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#7E8096]">Qty: {row.qty}</p>
                <p className="whitespace-nowrap text-sm font-bold text-[#4CBEC5]">
                  {formatPrice(product.price * row.qty)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-[#00b2b280] bg-white p-4 text-sm shadow-sm xl:p-6">
        <div className="flex items-center gap-2 border-b border-[#00B1B240] pb-3">
          <div className="h-6 w-6 text-[#4CBEC5]">
            <SvgDomesticCargo />
          </div>
          <p className="font-bold text-[#4CBEC5]">Order Summary</p>
        </div>
        <div className="grid grid-cols-3 gap-3 py-4 text-[#7E8096]">
          <div className="flex flex-col gap-1 text-center">
            <span className="text-xs">Products</span>
            <span className="font-bold">{formatPrice(productsTotal)}</span>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <span className="text-xs">Domestic Shipping</span>
            <span className="font-bold">{formatPrice(shippingTotal)}</span>
          </div>
          <div className="flex flex-col gap-1 text-center">
            <span className="text-xs">Total</span>
            <span className="font-bold text-[#4CBEC5]">{formatPrice(grandTotal)}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onAddAll}
          className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#66C1BF] to-[#00A29D] px-8 py-3 text-sm font-bold text-white shadow-md"
        >
          <span>Add All to Cart</span>
          <div className="h-5 w-5">
            <SvgShopCar />
          </div>
        </button>
      </div>
    </div>
  );
};

export default SmartBasket;
