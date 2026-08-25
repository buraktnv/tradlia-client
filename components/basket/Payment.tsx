import Link from "next/link";
import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import { SvgActiveCardBg, SvgConfirmedOrder, SvgShowMore } from "../../helpers/svgs/basketSvg";
import Sidebar from "./Sidebar";

const paymentInputClass =
  "rounded-card border border-line bg-surface px-5 py-3 text-sm text-ink-soft outline-none placeholder:text-ink-muted focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none";

const primaryButtonClass =
  "w-full rounded-pill py-3 bg-brand-400 hover:bg-brand-500 active:bg-brand-600 text-white font-semibold disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1";

const secondaryButtonClass =
  "inline-flex items-center justify-center rounded-pill border border-line bg-surface px-6 py-2.5 text-sm font-medium text-ink-soft hover:border-brand-300 hover:text-brand-700 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400";

const Payment: FC<any> = ({ setActivePage, activePage, basketData, setBasketData }) => {
  const [agreementShowFull, setAgreementShowFull] = useState<boolean>(false);
  const [state, setState] = useState<any>(1);
  const [agreed, setAgreed] = useState<boolean>(false);
  const [card, setCard] = useState({ cardNumber: "", cardName: "", cardExpiry: "", cardCvv: "" });
  const tradliaSalesAgreement =
    "ARTICLE 1- PARTIES TO THE AGREEMENT \n \n SELLER:\n Title: TRADLIA Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, doloribus nihil tempore animi dolorum, unde quaerat corporis rerum dolores nesciunt ab? Tempore ipsa a eligendi voluptas reprehenderit! Sit, velit animi!";

  const paymentReady =
    agreed &&
    card.cardNumber.trim() !== "" &&
    card.cardName.trim() !== "" &&
    card.cardExpiry.trim() !== "" &&
    card.cardCvv.trim() !== "";

  const finalizePayment = () => {
    if (!paymentReady) return;
    setState(3);
    toast.success("Payment completed successfully!");
    // Clear the cart after successful payment
    if (setBasketData) setBasketData([]);
  };

  return (
    <div className="container grid grid-cols-12 gap-8 px-3 xl:px-0 mx-auto mt-6 min-h-[80vh]">
      <div className="flex flex-col col-span-12 xl:col-span-9 ">
        {state === 1 ? (
          <StateOne setState={setState} />
        ) : state === 2 ? (
          <StateTwo setState={setState} />
        ) : (
          <StateThree setState={setState} />
        )}
        {state === 1 ? (
          <div className="grid gap-5 xl:gap-[1.5rem]">
            <DeliveryInfo
              content={{
                addressName: "Work Address",
                name: "John Miller",
                address: "123 Commerce St, Suite 100 \nPortland, OR 97201",
                telNo: "+1 (555) 012-3456",
              }}
            />

            <ReceiptInfo
              content={{
                addressName: "Work Address",
                name: "John Miller",
                address: "123 Commerce St, Suite 100 \nPortland, OR 97201",
                telNo: "+1 (555) 012-3456",
                receiptType: "Corporate",
                firmName: "John Miller \nTrading \nGroup",
                taxOffice: "Portland Tax Office",
                taxNumber: "TX-12345678",
              }}
            />
          </div>
        ) : state === 2 ? (
          <div className="grid gap-5">
            <div className="bg-surface rounded-card shadow-card border border-line px-3 xl:px-8 py-5">
              <h2 className="font-display font-semibold text-ink pl-3 xl:pl-3 pt-2 pb-4">Pay by Credit Card</h2>
              <div className="grid gap-3">
                <input
                  type="text"
                  name="cc-number"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  spellCheck={false}
                  maxLength={19}
                  placeholder="Card Number…"
                  aria-label="Card Number"
                  value={card.cardNumber}
                  onChange={(e) => setCard({ ...card, cardNumber: e.target.value })}
                  className={paymentInputClass}
                />
                <input
                  type="text"
                  name="cc-name"
                  autoComplete="cc-name"
                  placeholder="Name on Card…"
                  aria-label="Name on Card"
                  value={card.cardName}
                  onChange={(e) => setCard({ ...card, cardName: e.target.value })}
                  className={paymentInputClass}
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="cc-exp"
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    spellCheck={false}
                    maxLength={5}
                    placeholder="Expiry Date MM/YY…"
                    aria-label="Expiry Date"
                    value={card.cardExpiry}
                    onChange={(e) => setCard({ ...card, cardExpiry: e.target.value })}
                    className={paymentInputClass}
                  />
                  <input
                    type="text"
                    name="cc-csc"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    spellCheck={false}
                    maxLength={4}
                    placeholder="CVV…"
                    aria-label="CVV"
                    value={card.cardCvv}
                    onChange={(e) => setCard({ ...card, cardCvv: e.target.value })}
                    className={paymentInputClass}
                  />
                </div>
              </div>
            </div>
            <div className="bg-surface rounded-card shadow-card border border-line xl:px-[2rem] px-3 py-5">
              <h2 className="font-display font-semibold text-ink pl-3 pt-2 pb-4">Sales Agreement</h2>
              <div className="relative flex justify-between items-center bg-canvas border border-line rounded-card px-3 xl:px-6 pt-5 pb-2 text-[12px] xl:text-sm">
                <p className="whitespace-pre-line font-medium text-ink-soft pr-10">
                  {tradliaSalesAgreement.slice(0, !agreementShowFull ? 60 : tradliaSalesAgreement.length)}
                </p>
                <button
                  type="button"
                  aria-expanded={agreementShowFull}
                  aria-label={agreementShowFull ? "Show less" : "Show full agreement"}
                  className="absolute top-0 right-3 flex items-center justify-center h-full peer text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-pill"
                  onClick={() => setAgreementShowFull((pre: boolean) => !pre)}
                >
                  <div
                    className={`w-4 h-4 transform transition ease-in-out duration-300 ${
                      agreementShowFull && "rotate-180"
                    }`}
                  >
                    <SvgShowMore />
                  </div>
                </button>
              </div>
              <div className="px-3 py-4">
                <label htmlFor={"salesAgreement"} className="flex items-center gap-2 cursor-pointer">
                  <div className="border rounded-md border-brand-400 w-5 h-5 flex items-center justify-center shrink-0 bg-surface">
                    <input
                      type="checkbox"
                      name="salesAgreement"
                      id={"salesAgreement"}
                      className="sr-only peer"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <div className="w-3.5 h-3.5 rounded-sm peer-checked:bg-brand-400 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400"></div>
                  </div>
                  <p className="font-semibold text-brand-600 text-[11px] xl:text-sm">
                    &quot;I Have Read and Accept the Sales Agreement&quot;
                  </p>
                </label>
              </div>
              <div className="px-3 pb-3">
                <button
                  type="button"
                  disabled={!paymentReady}
                  onClick={finalizePayment}
                  className={primaryButtonClass}
                >
                  Complete Payment
                </button>
              </div>
            </div>
          </div>
        ) : (
          <CompleteOrder basketData={basketData} onDone={() => setActivePage(() => "basket")} />
        )}
      </div>
      <div className="col-span-12 xl:col-span-3">
        <Sidebar setActivePage={setActivePage} activePage={activePage} basketData={basketData} />
      </div>
    </div>
  );
};

const CompleteOrder: FC<any> = ({ basketData, onDone }) => {
  const sellers: any[] = basketData ?? [];
  const pieces = sellers.reduce(
    (sum, seller) => sum + seller.productCards.reduce((a: number, p: any) => a + p.count, 0),
    0
  );
  const shipping = sellers.reduce(
    (sum, seller) =>
      sum + (seller.shippingOption === "express" ? seller.expressShipping : seller.domesticShipping),
    0
  );
  const productsPrice = sellers.reduce(
    (sum, seller) => sum + seller.productCards.reduce((a: number, p: any) => a + p.price * p.count, 0),
    0
  );
  const total = shipping + productsPrice;
  const fmt = (value: number) => `${value.toFixed(2).replace(".", ",")} $`;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center gap-3 rounded-card border border-line bg-surface p-8 text-center shadow-card">
        <div className="h-20 w-20 text-success">
          <SvgConfirmedOrder />
        </div>
        <p className="font-display text-2xl font-bold text-ink">Order Completed!</p>
        <p className="text-sm text-ink-soft">
          Thank you for your purchase. Your order has been placed successfully and a confirmation has been sent to
          your e-mail address.
        </p>
      </div>
      <div className="rounded-card border border-line bg-surface p-6 shadow-card">
        <p className="mb-3 font-display text-sm uppercase tracking-wider text-ink-soft">Order Summary</p>
        <div className="flex flex-col gap-2 font-medium text-ink-soft tabular-nums">
          <div className="flex justify-between">
            <p>Products ({pieces} pieces)</p>
            <p>{fmt(productsPrice)}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>{fmt(shipping)}</p>
          </div>
          <div className="mt-2 flex justify-between border-t border-line pt-3">
            <p className="font-display font-semibold text-ink">Total</p>
            <p className="font-display text-xl font-bold text-ink">{fmt(total)}</p>
          </div>
        </div>
      </div>
      <button type="button" onClick={onDone} className={`${secondaryButtonClass} self-center`}>
        Continue Shopping
      </button>
    </div>
  );
};

const ActiveCard: FC<any> = ({ name }) => {
  return (
    <span className="relative flex items-center justify-between sm:justify-center sm:px-12 px-3 text-[10px] leading-3 sm:text-sm py-3.5 cursor-pointer">
      <div className="absolute -top-0.5 left-0 sm:w-[100%] w-[108px] h-[50px] sm:h-[4rem]">
        <SvgActiveCardBg />
      </div>
      <div className="text-brand-800 z-30 font-semibold">{name}</div>
    </span>
  );
};

const FinishedCard: FC<any> = ({ name }) => {
  return (
    <span className="flex items-center justify-center sm:px-12 px-2 text-[10px] leading-3 sm:text-sm py-2 sm:h-[3rem] text-white bg-brand-400 rounded-pill">
      <div className="font-semibold">{name}</div>
    </span>
  );
};

const Card: FC<any> = ({ name }) => {
  return (
    <span className="flex items-center justify-center sm:px-12 px-2 text-[10px] leading-3 sm:text-sm py-2 sm:h-[3rem] text-ink-soft border border-line bg-surface rounded-pill">
      <div className="font-medium">{name}</div>
    </span>
  );
};

const DeliveryInfo: FC<any> = ({ content }) => {
  return (
    <div className="bg-surface rounded-card border border-line px-3 xl:px-[2rem] pt-4 xl:pt-6 xl:pb-12 pb-10 shadow-card">
      <h2 className="font-display font-semibold text-ink pl-3 text-base py-2">My Delivery Addresses</h2>
      <div className="bg-canvas border border-line rounded-card px-6 py-3 text-sm">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-brand-600 leading-relaxed">{content.addressName}</div>
          <Link
            href="/profile/settings"
            className="text-brand-600 underline-offset-2 hover:underline cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-pill"
          >
            Change
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="flex xl:flex-row flex-col xl:items-center gap-3 text-ink-soft">
            <div className="font-semibold">{content.name} </div>
            <div className="w-[1px] h-4 bg-line hidden xl:block"></div>
            <div className="flex items-center gap-3 font-medium">
              {content.address}
              <div className="w-[1px] h-4 bg-line hidden xl:block"></div>
            </div>
            <div className="flex items-center gap-3 font-semibold">{content.telNo}</div>
          </div>
          <div className="flex items-center justify-center px-4 cursor-pointer">
            <div className="w-4 h-3 text-brand-600">
              <SvgShowMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReceiptInfo: FC<any> = ({ content }) => {
  return (
    <div className="bg-surface rounded-card border border-line px-3 xl:px-[2rem] pt-4 xl:pt-6 xl:pb-12 pb-10 shadow-card">
      <h2 className="font-display font-semibold text-ink pl-3 text-base py-2">My Invoice Information</h2>
      <div className="bg-canvas grid border border-line rounded-card px-6 py-3 text-sm relative">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-brand-600 leading-relaxed">{content.addressName}</div>
          <Link
            href="/profile/settings"
            className="text-brand-600 underline-offset-2 hover:underline cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-pill"
          >
            Change
          </Link>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div className="flex xl:flex-row flex-col xl:items-center gap-3 text-ink-soft font-semibold">
                  <div className="font-semibold">{content.name} </div>
                  <div className="w-[1px] h-4 bg-line hidden xl:block"></div>
                  <div className="flex items-center gap-3 font-medium">
                    {content.address}
                    <div className="w-[1px] h-4 bg-line hidden xl:block"></div>
                  </div>
                  <div className="flex items-center gap-3 font-semibold">{content.telNo}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-brand-600 leading-relaxed">{content.receiptType}</div>
              </div>
              <Link
                href="/profile/settings"
                className="text-brand-600 underline-offset-2 hover:underline cursor-pointer select-none absolute right-5 mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-pill"
              >
                Change
              </Link>
              <div className="flex justify-between">
                <div className="flex items-center gap-3 text-ink-soft font-semibold">
                  <div className="font-semibold">{content.firmName} </div>
                  <div className="w-[1px] h-4 bg-line"></div>
                  <div className="flex items-center gap-1 font-medium">
                    {content.taxOffice}: {content.taxNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-4">
            <div className="w-4 h-3 text-brand-600">
              <SvgShowMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StateOne: FC<any> = ({ setState }) => (
  <ol className="flex items-center justify-center mb-6 xl:gap-6" aria-label="Checkout steps">
    <li aria-current="step">
      <button type="button" onClick={() => setState(1)}>
        <ActiveCard name="Delivery Information" />
      </button>
    </li>
    <li aria-hidden="true" className="w-6 xl:w-16 xl:h-2 h-1 border border-line bg-brand-400 rounded-pill"></li>
    <li>
      <button type="button" onClick={() => setState(2)}>
        <Card name="Payment Information" />
      </button>
    </li>
    <li aria-hidden="true" className="w-6 xl:w-16 xl:h-2 h-1 border border-line rounded-pill"></li>
    <li>
      <button type="button" onClick={() => setState(3)}>
        <Card name="Complete Order" />
      </button>
    </li>
  </ol>
);

const StateTwo: FC<any> = ({ setState }) => (
  <ol className="flex items-center justify-center mb-6 xl:gap-6" aria-label="Checkout steps">
    <li>
      <button type="button" onClick={() => setState(1)}>
        <FinishedCard name="Delivery Information" />
      </button>
    </li>
    <li aria-hidden="true" className="w-6 xl:w-16 xl:h-2 h-1 border border-line bg-brand-400 rounded-pill"></li>
    <li aria-current="step">
      <button type="button" onClick={() => setState(2)}>
        <ActiveCard name="Payment Information" />
      </button>
    </li>
    <li aria-hidden="true" className="w-6 xl:w-16 xl:h-2 h-1 border border-line rounded-pill"></li>
    <li>
      <button type="button" onClick={() => setState(3)}>
        <Card name="Complete Order" />
      </button>
    </li>
  </ol>
);

const StateThree: FC<any> = ({ setState }) => (
  <ol className="flex items-center justify-center mb-6 xl:gap-6" aria-label="Checkout steps">
    <li>
      <button type="button" onClick={() => setState(1)}>
        <FinishedCard name="Delivery Information" />
      </button>
    </li>
    <li aria-hidden="true" className="w-6 xl:w-16 xl:h-2 h-1 border border-line bg-brand-400 rounded-pill"></li>
    <li>
      <button type="button" onClick={() => setState(2)}>
        <FinishedCard name="Payment Information" />
      </button>
    </li>
    <li aria-hidden="true" className="w-6 xl:w-16 xl:h-2 h-1 border border-line bg-brand-400 rounded-pill"></li>
    <li aria-current="step">
      <button type="button" onClick={() => setState(3)}>
        <ActiveCard name="Complete Order" />
      </button>
    </li>
  </ol>
);

export default Payment;
