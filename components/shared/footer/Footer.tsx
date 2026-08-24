import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { DEV } from "../../../helpers/config";
import { SvgAppStore, SvgGoogleStore } from "../../../helpers/svgs/footerSvg";

const Footer: FC = () => {
  return (
    <div
      className="bg-[#1F0247] w-full static xl:block"
      style={{
        backgroundImage: "url(/images/footer/tradlia-mark.svg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="container z-10 px-2 py-8 mx-auto xl:px-10">
        <div className="grid grid-cols-2 my-4 xl:grid-cols-4">
          {/* Col 1 */}
          <div className="col-span-1 p-2">
            <div className="flex flex-col">
              <h5 className="text-sm font-ubuntu font-bold text-[#4CBEC5] cursor-default">How It Works</h5>
              <Link
                href="/info/membership-agreement"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1"
                target={"_blank"}>

                <p>Membership Agreement</p>

              </Link>
              <Link
                href="/info/privacy-notice"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1"
                target={"_blank"}>

                <p>Privacy Notice</p>

              </Link>
              <Link
                href="/info/terms-of-use"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Terms of Use</p>

              </Link>
              <Link
                href="/info/withdrawal-cancellation-return-terms"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Withdrawal, Cancellation & Return Terms</p>

              </Link>
              <Link
                href="/info/privacy-and-security"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Privacy & Security</p>

              </Link>
            </div>
          </div>

          {/* Col 3 */}
          <div className="col-span-1 p-2">
            <div className="flex flex-col">
              <p className="text-sm font-ubuntu font-bold text-[#4CBEC5] cursor-default">Categories</p>
              <Link
                href="/info/medicals"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1"
                target={"_blank"}>

                <p>Medical</p>

              </Link>
              <Link
                href="/info/family-medicine"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1"
                target={"_blank"}>

                <p>Family Medicine</p>

              </Link>
              <Link
                href="/info/dentists"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Dentistry</p>

              </Link>
              <Link
                href="/info/veterinarians"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Veterinary</p>

              </Link>
              <Link
                href="/info/healthcare-providers"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Health</p>

              </Link>
              <Link
                href="/category"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Personal Care & Cosmetics</p>

              </Link>
              <Link
                href="/category"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Dietary Supplements</p>

              </Link>
              <Link
                href="/category"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Office/Stationery/Hygiene</p>

              </Link>
            </div>
          </div>

          {/* Col 2 */}
          <div className="col-span-1 p-2">
            <div className="flex flex-col">
              <h5 className="text-sm font-ubuntu font-bold text-[#4CBEC5] cursor-default">FAQ</h5>
              <Link
                href="/info/who-can-join"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1"
                target={"_blank"}>

                <p>Who Can Join?</p>

              </Link>
              <Link
                href="/info/how-to-buy-or-sell"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1"
                target={"_blank"}>

                <p>How Do I Buy or Sell Products?</p>

              </Link>
              <Link
                href="/info/how-to-add-listing"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>How Do I Add a Listing?</p>

              </Link>
              <Link
                href="/info/what-is-seller-agreed-shipping"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>What Is Seller-Agreed Shipping?</p>

              </Link>
              <Link
                href="/info/prohibited-products"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>What Products Are Prohibited?</p>

              </Link>
              <Link
                href="/info/post-order-support"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>How Do I Get Post-Order Support?</p>

              </Link>
              <Link
                href="/info/cancel-or-return-order"
                className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>How Do I Cancel/Return My Order?</p>

              </Link>
            </div>
          </div>

          {/* Col 4 */}
          <div className="col-span-1 p-2 ">
            <div className="absolute -z-10 opacity-20">
              <Image src="/images/footer/tradlia-mark.svg" width={450} height={250} alt="" />
            </div>
            <div className="flex flex-col z-100">
              <h5 className="text-sm font-ubuntu font-bold text-[#4CBEC5] cursor-default">Contact</h5>
              <div className="flex items-center mt-1 group z-">
                <span className="h-6  text-[#A3A9C1]"></span>
                <p className="text-xs font-ubuntu text-[#A3A9C1] cursor-default">
                  123 Commerce St, Suite 100, Portland, OR 97201
                </p>
              </div>
              <div className="flex items-center mt-1 group">
                <span className="w-full h-6 fill-gray-200 group-hover:fill-[#4CBEC5]">
                  <span className="flex text-xs font-ubuntu pt-2 text-[#4CBEC5]">
                    E-mail:
                    <Link href={"/"} target="_blank" rel="noreferrer">

                      <p className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] w-40 mx-1 group-hover:text-[#4CBEC5] ">
                        contact@tradlia.com
                      </p>

                    </Link>
                  </span>
                </span>
              </div>
              <div className="flex items-center mt-1">
                <span className="h-4 w-9 ">
                  <span className="flex text-xs font-ubuntu text-[#4CBEC5]">
                    Tel:
                    <Link href="+1 (555) 023-4567" target="_blank" rel="noreferrer">

                      <p className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] w-40 mx-1 hover:text-[#4CBEC5]">
                        +1 (555) 012-3456
                      </p>

                    </Link>
                  </span>
                </span>
              </div>
              <div className="flex items-center mt-3">
                <span>
                  <span className="flex ">
                    <Image src="/images/footer/whatsapp.svg" width={22} height={20} alt="" />
                    <Link href="+1 (555) 023-4567" target="_blank" rel="noreferrer">

                      <p className="select-none cursor-pointer text-xs font-ubuntu text-[#A3A9C1] w-40 mx-1 pt-1 hover:text-[#4CBEC5]">
                        +1 (555) 023-4567
                      </p>

                    </Link>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-4 ">
            <Link href="/" className="col-span-2 cursor-pointer select-none">

              <Image src="/images/footer/tradlia.svg" width={140} height={50} alt="" />

            </Link>
            <div className="flex col-span-1 px-2 mt-2">
              <Link
                href="/"
                className="select-none h-8 w-8 cursor-pointer fill-[#4CBEC5] hover:border-yellow-500 "
                target="_blank"
                rel="noreferrer">

                <Image src="/images/footer/facebook.svg" width={20} height={30} alt="" />

              </Link>
              <Link
                href="/"
                className="select-none h-8 w-8 cursor-pointer fill-[#4CBEC5] hover:border-yellow-500 "
                target="_blank"
                rel="noreferrer">

                <Image src="/images/footer/instagram.svg" width={20} height={30} alt="" />

              </Link>
              <Link
                href="/"
                className="select-none h-8 w-8 cursor-pointer fill-[#4CBEC5] hover:border-yellow-500 "
                target="_blank"
                rel="noreferrer">

                <Image src="/images/footer/twitter.svg" width="20" height={30} alt="" />

              </Link>
              <Link
                href="/"
                className="select-none h-8 w-8 cursor-pointer fill-[#4CBEC5] hover:border-yellow-500 "
                target="_blank"
                rel="noreferrer">

                <Image src="/images/footer/linkedln.svg" width={20} height={30} alt="" />

              </Link>
              <Link
                href=""
                className="select-none cursor-pointer h-8 w-8 cursor-pointer fill-[#4CBEC5] hover:border-yellow-500 "
                target="_blank"
                rel="noreferrer">

                <Image src="/images/footer/youtube.svg" width={20} height={30} alt="" />

              </Link>
            </div>

            <div className="grid grid-cols-5 col-span-1 ">
              <div className="flex col-span-3 gap-1">
                <Link href="/" className="select-none cursor-pointer relative h-12 w-44">

                  <SvgAppStore />

                </Link>
                <Link href="/" className="select-none cursor-pointer relative h-12 w-44">

                  <SvgGoogleStore />

                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Hire-me badge: subliminal portfolio branding at the footer's bottom edge */}
        <div className="mt-6 pt-4 border-t border-[#4CBEC5]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs font-ubuntu text-[#A3A9C1]">
            Crafted by {DEV.name} · {DEV.role} ·{" "}
            <Link href="/hire-me" className="text-[#4CBEC5] hover:underline">
              Available for freelance
            </Link>
          </p>
          <Link
            href={DEV.upworkUrl}
            target="_blank"
            rel="noreferrer"
            className="w-max text-xs font-ubuntu text-[#4CBEC5] hover:text-white transition-colors"
          >
            Hire me on Upwork
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
