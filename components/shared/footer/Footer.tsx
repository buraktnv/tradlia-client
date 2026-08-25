import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { DEV } from "../../../helpers/config";
import { SvgAppStore, SvgGoogleStore } from "../../../helpers/svgs/footerSvg";

const linkClass =
  "select-none cursor-pointer text-xs text-surface/60 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-300 w-max mt-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-1 focus-visible:ring-offset-ink rounded-sm";
const headingClass = "font-display text-sm font-semibold uppercase tracking-wider text-brand-300 cursor-default";

const socialLinks = [
  { href: "/", icon: "/images/footer/facebook.svg", label: "Facebook" },
  { href: "/", icon: "/images/footer/instagram.svg", label: "Instagram" },
  { href: "/", icon: "/images/footer/twitter.svg", label: "Twitter" },
  { href: "/", icon: "/images/footer/linkedln.svg", label: "LinkedIn" },
  { href: "", icon: "/images/footer/youtube.svg", label: "YouTube" },
];

const Footer: FC = () => {
  return (
    <footer
      className="bg-ink w-full static xl:block text-surface"
      style={{
        backgroundImage: "url(/images/footer/tradlia-mark.svg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="container z-10 px-2 py-10 mx-auto xl:px-10">
        <div className="grid grid-cols-2 my-4 xl:grid-cols-4">
          {/* Col 1 */}
          <div className="col-span-1 p-2">
            <div className="flex flex-col">
              <h5 className={headingClass}>How It Works</h5>
              <Link href="/info/membership-agreement" className={linkClass} target={"_blank"}>

                <p>Membership Agreement</p>

              </Link>
              <Link href="/info/privacy-notice" className={linkClass} target={"_blank"}>

                <p>Privacy Notice</p>

              </Link>
              <Link href="/info/terms-of-use" className={linkClass}>

                <p>Terms of Use</p>

              </Link>
              <Link href="/info/withdrawal-cancellation-return-terms" className={linkClass}>

                <p>Withdrawal, Cancellation & Return Terms</p>

              </Link>
              <Link href="/info/privacy-and-security" className={linkClass}>

                <p>Privacy & Security</p>

              </Link>
            </div>
          </div>

          {/* Col 3 */}
          <div className="col-span-1 p-2">
            <div className="flex flex-col">
              <p className={headingClass}>Categories</p>
              <Link href="/info/industrial-supplies" className={linkClass} target={"_blank"}>

                <p>Industrial Supplies</p>

              </Link>
              <Link href="/info/facility-management" className={linkClass} target={"_blank"}>

                <p>Facility Management</p>

              </Link>
              <Link href="/info/workshop-tools" className={linkClass}>

                <p>Workshop Tools</p>

              </Link>
              <Link href="/info/warehouse-logistics" className={linkClass}>

                <p>Warehouse & Logistics</p>

              </Link>
              <Link href="/info/procurement-teams" className={linkClass}>

                <p>Procurement Teams</p>

              </Link>
              <Link href="/category?cat=safety" className={linkClass}>

                <p>Safety Gear & Workwear</p>

              </Link>
              <Link href="/category?cat=tools" className={linkClass}>

                <p>Power Tools & Accessories</p>

              </Link>
              <Link href="/category?cat=office" className={linkClass}>

                <p>Office & Facility</p>

              </Link>
            </div>
          </div>

          {/* Col 2 */}
          <div className="col-span-1 p-2">
            <div className="flex flex-col">
              <h5 className={headingClass}>FAQ</h5>
              <Link href="/info/who-can-join" className={linkClass} target={"_blank"}>

                <p>Who Can Join?</p>

              </Link>
              <Link href="/info/how-to-buy-or-sell" className={linkClass} target={"_blank"}>

                <p>How Do I Buy or Sell Products?</p>

              </Link>
              <Link href="/info/how-to-add-listing" className={linkClass}>

                <p>How Do I Add a Listing?</p>

              </Link>
              <Link href="/info/what-is-seller-agreed-shipping" className={linkClass}>

                <p>What Is Seller-Agreed Shipping?</p>

              </Link>
              <Link href="/info/prohibited-products" className={linkClass}>

                <p>What Products Are Prohibited?</p>

              </Link>
              <Link href="/info/post-order-support" className={linkClass}>

                <p>How Do I Get Post-Order Support?</p>

              </Link>
              <Link href="/info/cancel-or-return-order" className={linkClass}>

                <p>How Do I Cancel/Return My Order?</p>

              </Link>
            </div>
          </div>

          {/* Col 4 */}
          <div className="col-span-1 p-2">
            <div className="absolute -z-10 opacity-10">
              <Image src="/images/footer/tradlia-mark.svg" width={450} height={250} alt="" aria-hidden="true" />
            </div>
            <div className="flex flex-col z-100">
              <h5 className={headingClass}>Contact</h5>
              <div className="flex items-center mt-1.5 group">
                <span className="h-6"></span>
                <p className="text-xs text-surface/60 cursor-default">
                  123 Commerce St, Suite 100, Portland, OR 97201
                </p>
              </div>
              <div className="flex items-center mt-1.5 group">
                <span className="w-full h-6">
                  <span className="flex text-xs pt-2 text-brand-300">
                    E-mail:
                    <Link href={"/"} target="_blank" rel="noreferrer" className={linkClass}>

                      <p className="select-none cursor-pointer text-xs w-40 mx-1">
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

                      <p className="select-none cursor-pointer text-xs w-40 mx-1">
                        +1 (555) 012-3456
                      </p>

                    </Link>
                  </span>
                </span>
              </div>
              <div className="flex items-center mt-2">
                <span>
                  <span className="flex">
                    <Image src="/images/footer/whatsapp.svg" width={22} height={20} alt="" aria-hidden="true" />
                    <Link href="+1 (555) 023-4567" target="_blank" rel="noreferrer" className={linkClass}>

                      <p className="select-none cursor-pointer text-xs w-40 mx-1 pt-1">
                        +1 (555) 023-4567
                      </p>

                    </Link>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-6">
          <div className="grid grid-cols-4 border-t border-surface/10 pt-6">
            <Link href="/" className="col-span-2 cursor-pointer select-none self-start" aria-label="Tradlia home">

              <Image src="/images/footer/tradlia.svg" width={140} height={50} alt="tradlia" />

            </Link>
            <div className="flex col-span-1 px-2 mt-2 gap-1">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={`Tradlia on ${social.label}`}
                  className="select-none h-8 w-8 cursor-pointer flex items-center justify-center rounded-full transition-opacity duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={social.icon} width={20} height={30} alt="" />
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-5 col-span-1">
              <div className="flex col-span-3 gap-1">
                <Link
                  href="/"
                  className="relative h-12 w-44 cursor-pointer select-none opacity-80 transition-opacity duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-lg"
                  aria-label="Download on the App Store"
                >
                  <SvgAppStore />
                </Link>
                <Link
                  href="/"
                  className="relative h-12 w-44 cursor-pointer select-none opacity-80 transition-opacity duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-lg"
                  aria-label="Get it on Google Play"
                >
                  <SvgGoogleStore />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Hire-me badge: subliminal portfolio branding at the footer's bottom edge */}
        <div className="mt-6 pt-4 border-t border-surface/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-surface/60">
            Crafted by {DEV.name} · {DEV.role} ·{" "}
            <Link
              href="/hire-me"
              className="text-brand-300 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-200 hover:underline underline-offset-2"
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
