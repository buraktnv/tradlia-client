import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { DEV } from "../../../helpers/config";
import { SvgAppStore, SvgGoogleStore } from "../../../helpers/svgs/footerSvg";

const linkClass =
  "text-xs hover:text-brand-300 w-max mt-1.5 select-none cursor-pointer text-surface/60 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-sm";
const headingClass = "font-display text-sm font-semibold uppercase tracking-wider text-brand-300 cursor-default";

const accordionChevron = (
  <svg
    className="flex-shrink-0 ml-1.5 text-brand-300 w-5 h-5 transition-transform duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-open:-rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

const Footer: FC = () => {
  return (
    <footer
      className="bg-ink w-full static block -mt-[26px] mb-5 rounded-3xl xl:rounded-none text-surface"
      style={{
        backgroundImage: "url(/images/footer/tradlia-mark.svg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="container z-10 px-2 xl:py-12 py-12 pb-[25%] xl:pb-0 mx-auto xl:px-10">
        <div className="flex flex-col">
          {/* Akordeon */}
          <div className="block px-2 space-y-4 xl:hidden">
            <details className="group" open>
              <summary className="flex items-center justify-between py-2 px-4 cursor-pointer bg-transparent border border-surface/15 rounded-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
                <h5 className={headingClass}>How It Works</h5>
                {accordionChevron}
              </summary>
              <div className="flex flex-col pt-3 gap-1 mx-4">
                <Link href="/" className={linkClass} target={"_blank"}>

                  <p>Membership Agreement</p>

                </Link>
                <Link href="/" className={linkClass} target={"_blank"}>

                  <p>Privacy Notice</p>

                </Link>
                <Link href="/" className={linkClass}>

                  <p>Terms of Use</p>

                </Link>
                <Link href="/" className={linkClass}>

                  <p>Withdrawal, Cancellation & Return Terms</p>

                </Link>
                <Link href="/" className={linkClass}>

                  <p>Privacy & Security</p>

                </Link>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-2 px-4 cursor-pointer bg-transparent border border-surface/15 rounded-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
                <h5 className={headingClass}>Categories</h5>
                {accordionChevron}
              </summary>
              <div className="flex flex-col pt-3 gap-1 mx-4">
                <Link href="/" className={linkClass} target={"_blank"}>

                  <p>Industrial Supplies</p>

                </Link>
                <Link href="/" className={linkClass} target={"_blank"}>

                  <p>Facility Management</p>

                </Link>
                <Link href="/" className={linkClass}>

                  <p>Workshop Tools</p>

                </Link>
                <Link href="/" className={linkClass}>

                  <p>Warehouse &amp; Logistics</p>

                </Link>
                <Link href="/" className={linkClass}>

                  <p>Procurement Teams</p>

                </Link>
                <Link href="/" className={linkClass}>

                  <p>Safety Gear &amp; Workwear</p>

                </Link>
                <Link href="/" className={linkClass}>

                  <p>Power Tools &amp; Accessories</p>

                </Link>
                <Link href="/" className={linkClass}>

                  <p>Office &amp; Facility</p>

                </Link>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-2 px-4 cursor-pointer bg-transparent border border-surface/15 rounded-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300">
                <h5 className={headingClass}>FAQ</h5>
                {accordionChevron}
              </summary>
              <div className="flex flex-col pt-3 gap-1 mx-4">
                <Link href="" className={linkClass} target={"_blank"}>

                  <p>Who Can Join?</p>

                </Link>
                <Link href="" className={linkClass} target={"_blank"}>

                  <p>How Do I Buy or Sell Products?</p>

                </Link>
                <Link href="/info/faq" className={linkClass}>

                  <p>How Do I Add a Listing?</p>

                </Link>
                <Link href="/info/report-problem" className={linkClass}>

                  <p>What Is Seller-Agreed Shipping?</p>

                </Link>
                <Link href="/info/contact" className={linkClass}>

                  <p>What Products Are Prohibited?</p>

                </Link>
                <Link href="/info/contact" className={linkClass}>

                  <p>How Do I Get Post-Order Support?</p>

                </Link>
                <Link href="/info/contact" className={linkClass}>

                  <p>How Do I Cancel/Return My Order?</p>

                </Link>
              </div>
            </details>
          </div>
          <Link
            href="/"
            aria-label="Tradlia home"
            className="block col-span-2 mx-4 mt-4 cursor-pointer select-none xl:hidden">

            <Image src="/images/footer/tradlia.svg" width={140} height={50} alt="tradlia" />

          </Link>
          {/* Col 1 */}
          <div className="hidden col-span-1 p-2 xl:block">
            <div className="flex flex-col">
              <h5 className={headingClass}>How It Works</h5>
              <Link href="/" className={linkClass} target={"_blank"}>

                <p>Membership Agreement</p>

              </Link>
              <Link href="/" className={linkClass} target={"_blank"}>

                <p>Privacy Notice</p>

              </Link>
              <Link href="/" className={linkClass}>

                <p>Terms of Use</p>

              </Link>
              <Link href="/" className={linkClass}>

                <p>Withdrawal, Cancellation & Return Terms</p>

              </Link>
              <Link href="/" className={linkClass}>

                <p>Privacy & Security</p>

              </Link>
            </div>
          </div>

          {/* Col 3 */}
          <div className="hidden col-span-1 p-2 xl:block">
            <div className="flex flex-col">
              <p className={headingClass}>Categories</p>
              <Link href="/" className={linkClass} target={"_blank"}>

                <p>Industrial Supplies</p>

              </Link>
              <Link href="/" className={linkClass} target={"_blank"}>

                <p>Facility Management</p>

              </Link>
              <Link href="/" className={linkClass}>

                <p>Workshop Tools</p>

              </Link>
              <Link href="/" className={linkClass}>

                <p>Warehouse &amp; Logistics</p>

              </Link>
              <Link href="/" className={linkClass}>

                <p>Procurement Teams</p>

              </Link>
              <Link href="/" className={linkClass}>

                <p>Safety Gear &amp; Workwear</p>

              </Link>
              <Link href="/" className={linkClass}>

                <p>Power Tools &amp; Accessories</p>

              </Link>
              <Link href="/" className={linkClass}>

                <p>Office &amp; Facility</p>

              </Link>
            </div>
          </div>

          {/* Col 2 */}
          <div className="hidden col-span-1 p-2 xl:block">
            <div className="flex flex-col">
              <h5 className={headingClass}>FAQ</h5>
              <Link href="" className={linkClass} target={"_blank"}>

                <p>Who Can Join?</p>

              </Link>
              <Link href="" className={linkClass} target={"_blank"}>

                <p>How Do I Buy or Sell Products?</p>

              </Link>
              <Link href="/info/faq" className={linkClass}>

                <p>How Do I Add a Listing?</p>

              </Link>
              <Link href="/info/report-problem" className={linkClass}>

                <p>What Is Seller-Agreed Shipping?</p>

              </Link>
              <Link href="/info/contact" className={linkClass}>

                <p>What Products Are Prohibited?</p>

              </Link>
              <Link href="/info/contact" className={linkClass}>

                <p>How Do I Get Post-Order Support?</p>

              </Link>
              <Link href="/info/contact" className={linkClass}>

                <p>How Do I Cancel/Return My Order?</p>

              </Link>
            </div>
          </div>

          {/* Col 4 */}
          <div className="col-span-1 mx-5 xl:p-2 xl:mx-0">
            <div className="absolute -z-10 opacity-10">
              <Image src="/images/footer/tradlia-mark.svg" width={450} height={250} alt="" aria-hidden="true" />
            </div>
            <div className="flex flex-col z-100">
              <h5 className={`${headingClass} hidden nd:block`}>Contact</h5>
              <div className="flex items-center xl:mt-1.5 group">
                <span className="h-6"></span>
                <p className="text-xs text-surface/60 cursor-default">
                  123 Commerce St, Suite 100 <br className="xl:hidden"></br>{" "}
                  Portland, OR 97201
                </p>
              </div>
              <div className="flex items-center xl:mt-1 group">
                <span className="w-full h-6">
                  <span className="flex text-xs pt-2 text-brand-300">
                    E-mail:
                    <Link href={"/"} target="_blank" rel="noreferrer" className={linkClass}>

                      <p className="cursor-pointer select-none text-xs w-40 mx-1">
                        contact@tradlia.com
                      </p>

                    </Link>
                  </span>
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className="h-4 w-9">
                  <span className="flex text-xs text-brand-300">
                    Tel:
                    <Link href="+1 (555) 023-4567" target="_blank" rel="noreferrer" className={linkClass}>

                      <p className="cursor-pointer select-none text-xs w-40 mx-1">
                        +1 (555) 012-3456
                      </p>

                    </Link>
                  </span>
                </span>
              </div>
              <div className="flex items-center mt-3">
                <span>
                  <span className="hidden xl:flex">
                    <Image src="/images/footer/whatsapp.svg" width={22} height={20} alt="" aria-hidden="true" />
                    <Link href="+1 (555) 023-4567" target="_blank" rel="noreferrer" className={linkClass}>

                      <p className="cursor-pointer select-none text-xs w-40 mx-1 pt-1">
                        +1 (555) 023-4567
                      </p>

                    </Link>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-3 xl:mx-auto">
          <div className="grid xl:grid-cols-4">
            <Link
              href="/"
              aria-label="Tradlia home"
              className="hidden col-span-2 cursor-pointer select-none xl:block self-start">

              <Image src="/images/footer/tradlia.svg" width={140} height={50} alt="tradlia" />

            </Link>

            <div className="flex col-span-1 gap-3 px-2 xl:gap-0 xl:mt-2">
              {[
                { icon: "/images/footer/facebook.svg", label: "Facebook" },
                { icon: "/images/footer/instagram.svg", label: "Instagram" },
                { icon: "/images/footer/twitter.svg", label: "Twitter" },
                { icon: "/images/footer/linkedln.svg", label: "LinkedIn" },
                { icon: "/images/footer/youtube.svg", label: "YouTube" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href="/"
                  aria-label={`Tradlia on ${social.label}`}
                  className="relative w-7 h-7 xl:h-8 xl:w-8 cursor-pointer opacity-70 transition-opacity duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={social.icon} fill sizes="100vw" alt="" />
                </Link>
              ))}
            </div>
            <span className="flex items-center mx-2 mt-2 xl:hidden">
              <Image src="/images/footer/whatsapp.svg" width={24} height={26} alt="" aria-hidden="true" />
              <Link
                href="+1 (555) 023-4567"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer select-none py-1 text-surface/80 w-40 mx-1 pt-1 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-300"
              >
                +1 <strong className="xl:hidden">(555) 023-4567</strong>
              </Link>
            </span>
            <div className="grid grid-cols-5 col-span-1 py-2">
              <div className="flex col-span-3">
                <Link
                  href="/"
                  aria-label="Download on the App Store"
                  className="relative w-48 h-8 cursor-pointer select-none opacity-80 transition-opacity duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-lg"
                >
                  <SvgAppStore />
                </Link>
                <Link
                  href="/"
                  aria-label="Get it on Google Play"
                  className="relative w-48 h-8 cursor-pointer select-none opacity-80 transition-opacity duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-lg"
                >
                  <SvgGoogleStore />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Hire-me badge: subliminal portfolio branding at the footer's bottom edge */}
        <div className="mt-6 pt-4 border-t border-surface/10 flex flex-col gap-1">
          <p className="text-xs text-surface/60">
            Crafted by {DEV.name} · {DEV.role} ·{" "}
            <Link
              href="/hire-me"
              className="text-brand-300 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-200 underline-offset-2"
            >
              Available for freelance
            </Link>
          </p>
          <Link
            href={DEV.upworkUrl}
            target="_blank"
            rel="noreferrer"
            className="w-max text-xs text-brand-300 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-sm"
          >
            Hire me on Upwork
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
