import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { DEV } from "../../../helpers/config";
import { SvgAppStore, SvgGoogleStore } from "../../../helpers/svgs/footerSvg";

const Footer: FC = () => {
  return (
    <div
      className="bg-[#1F0247] w-full static block -mt-[26px] mb-5 rounded-3xl xl:rounded-none "
      style={{
        backgroundImage: "url(/images/footer/tradlia-mark.svg)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <div className="container z-10 px-2 xl:py-12 py-12 pb-[25%] xl:pb-0  mx-auto xl:px-10">
        <div className="flex flex-col">
          {/* Akordeon */}
          <div className="block px-2 space-y-4 xl:hidden">
            <details className="group" open>
              <summary className="flex items-center justify-between py-2 px-4  cursor-pointer bg-transparent border border-[#4CBEC5] rounded-full">
                <h5 className="font-medium text-[#4CBEC5]">How It Works</h5>

                <svg
                  className="flex-shrink-0 ml-1.5 text-[#4CBEC5] w-6 h-6 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="flex flex-col pt-3 gap-1 mx-4 text-[#C6C6C6]">
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer"
                  target={"_blank"}>

                  <p>Membership Agreement</p>

                </Link>
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer"
                  target={"_blank"}>

                  <p>Privacy Notice</p>

                </Link>
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>Terms of Use</p>

                </Link>
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>Withdrawal, Cancellation & Return Terms</p>

                </Link>
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>Privacy & Security</p>

                </Link>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-2 px-4  cursor-pointer bg-transparent border border-[#4CBEC5] rounded-full">
                <h5 className="font-medium text-[#4CBEC5]">Categories</h5>
                <svg
                  className="flex-shrink-0 ml-1.5 text-[#4CBEC5] w-6 h-6 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="flex flex-col pt-3 gap-1 mx-4 text-[#C6C6C6]">
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer"
                  target={"_blank"}>

                  <p>Medical</p>

                </Link>
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer"
                  target={"_blank"}>

                  <p>Family Medicine</p>

                </Link>
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>Dentistry</p>

                </Link>
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>Veterinary</p>

                </Link>
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>Health</p>

                </Link>
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>Personal Care & Cosmetics</p>

                </Link>
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>Dietary Supplements</p>

                </Link>
                <Link
                  href="/"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>Office/Stationery/Hygiene</p>

                </Link>
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-2 px-4  cursor-pointer bg-transparent border border-[#4CBEC5] rounded-full">
                <h5 className="font-medium text-[#4CBEC5]">FAQ</h5>
                <svg
                  className="flex-shrink-0 ml-1.5 text-[#4CBEC5] w-6 h-6 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="flex flex-col pt-3 gap-1 mx-4 text-[#C6C6C6] ">
                <Link
                  href=""
                  className="cursor-pointer select-none text-xs font-ubuntu  hover:text-[#4CBEC5] w-max mt-1"
                  target={"_blank"}>

                  <p>Who Can Join?</p>

                </Link>
                <Link
                  href=""
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer"
                  target={"_blank"}>

                  <p>How Do I Buy or Sell Products?</p>

                </Link>
                <Link
                  href="/info/faq"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>How Do I Add a Listing?</p>

                </Link>
                <Link
                  href="/info/report-problem"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>What Is Seller-Agreed Shipping?</p>

                </Link>
                <Link
                  href="/info/contact"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>What Products Are Prohibited?</p>

                </Link>
                <Link
                  href="/info/contact"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>How Do I Get Post-Order Support?</p>

                </Link>
                <Link
                  href="/info/contact"
                  className="text-xs font-ubuntu hover:text-[#4CBEC5] w-max mt-1 select-none cursor-pointer">

                  <p>How Do I Cancel/Return My Order?</p>

                </Link>
              </div>
            </details>
          </div>
          <Link
            href="/"
            className="block col-span-2 mx-4 mt-2 cursor-pointer select-none xl:hidden">

            <Image src="/images/footer/tradlia.svg" width={140} height={50} alt="" />

          </Link>
          {/* Col 1 */}
          <div className="hidden col-span-1 p-2 xl:block">
            <div className="flex flex-col">
              <h5 className="text-sm font-ubuntu font-bold text-[#4CBEC5] cursor-default">How It Works</h5>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1"
                target={"_blank"}>

                <p>Membership Agreement</p>

              </Link>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1"
                target={"_blank"}>

                <p>Privacy Notice</p>

              </Link>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Terms of Use</p>

              </Link>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Withdrawal, Cancellation & Return Terms</p>

              </Link>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Privacy & Security</p>

              </Link>
            </div>
          </div>

          {/* Col 3 */}
          <div className="hidden col-span-1 p-2 xl:block">
            <div className="flex flex-col">
              <p className="text-sm font-ubuntu font-bold text-[#4CBEC5] cursor-default">Categories</p>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1"
                target={"_blank"}>

                <p>Medical</p>

              </Link>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1"
                target={"_blank"}>

                <p>Family Medicine</p>

              </Link>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Dentistry</p>

              </Link>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Veterinary</p>

              </Link>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Health</p>

              </Link>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Personal Care & Cosmetics</p>0
                                
              </Link>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Dietary Supplements</p>

              </Link>
              <Link
                href="/"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>Office/Stationery/Hygiene</p>

              </Link>
            </div>
          </div>

          {/* Col 2 */}
          <div className="hidden col-span-1 p-2 xl:block">
            <div className="flex flex-col">
              <h5 className="text-sm font-ubuntu font-bold text-[#4CBEC5] cursor-default">FAQ</h5>
              <Link
                href=""
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1"
                target={"_blank"}>

                <p>Who Can Join?</p>

              </Link>
              <Link
                href=""
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1"
                target={"_blank"}>

                <p>How Do I Buy or Sell Products?</p>

              </Link>
              <Link
                href="/info/faq"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>How Do I Add a Listing?</p>

              </Link>
              <Link
                href="/info/report-problem"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>What Is Seller-Agreed Shipping?</p>

              </Link>
              <Link
                href="/info/contact"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>What Products Are Prohibited?</p>

              </Link>
              <Link
                href="/info/contact"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>How Do I Get Post-Order Support?</p>

              </Link>
              <Link
                href="/info/contact"
                className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] hover:text-[#4CBEC5] w-max mt-1">

                <p>How Do I Cancel/Return My Order?</p>

              </Link>
            </div>
          </div>

          {/* Col 4 */}
          <div className="col-span-1 mx-5 xl:p-2 xl:mx-0">
            <div className="absolute -z-10 opacity-20 ">
              <Image src="/images/footer/tradlia-mark.svg" width={450} height={250} alt="" />
            </div>
            <div className="flex flex-col z-100 ">
              <h5 className="text-sm font-ubuntu font-bold text-[#4CBEC5] cursor-default hidden nd:block">Contact</h5>
              <div className="flex items-center xl:mt-1 group z-">
                <span className="h-6  text-[#A3A9C1]"></span>
                <p className="text-xs font-ubuntu text-[#C6C6C6] xl:text-[#A3A9C1] cursor-default">
                  123 Commerce St, Suite 100 <br className="xl:hidden "></br>{" "}
                  Portland, OR 97201
                </p>
              </div>
              <div className="flex items-center xl:mt-1 group">
                <span className="w-full h-6 fill-gray-200 group-hover:fill-[#4CBEC5]">
                  <span className="flex text-xs font-ubuntu pt-2 text-[#4CBEC5]">
                    E-mail:
                    <Link href={"/"} target="_blank" rel="noreferrer">

                      <p className="cursor-pointer select-none text-xs font-ubuntu text-[#C6C6C6] xl:text-[#A3A9C1] w-40 mx-1 hover:text-[#4CBEC5] ">
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

                      <p className="cursor-pointer select-none text-xs font-ubuntu text-[#C6C6C6] xl:text-[#A3A9C1] w-40 mx-1 hover:text-[#4CBEC5]">
                        +1 (555) 012-3456
                      </p>

                    </Link>
                  </span>
                </span>
              </div>
              <div className="flex items-center mt-3">
                <span>
                  <span className="hidden xl:flex ">
                    <Image src="/images/footer/whatsapp.svg" width={22} height={20} alt="" />
                    <Link href="+1 (555) 023-4567" target="_blank" rel="noreferrer">

                      <p className="cursor-pointer select-none text-xs font-ubuntu text-[#A3A9C1] w-40 mx-1 pt-1 hover:text-[#4CBEC5]">
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
          <div className="grid xl:grid-cols-4 ">
            <Link
              href="/"
              className="hidden col-span-2 cursor-pointer select-none xl:block">

              <Image src="/images/footer/tradlia.svg" width={140} height={50} alt="" />

            </Link>

            <div className="flex col-span-1 gap-3 px-2 xl:gap-0 xl:mt-2">
              <Link
                href="/"
                className="select-none w-7 h-7 xl:h-8 xl:w-8 cursor-pointer fill-[#4CBEC5] relative "
                target="_blank"
                rel="noreferrer">

                <Image src="/images/footer/facebook.svg" fill sizes="100vw" alt="" />

              </Link>
              <Link
                href="/"
                className="select-none relative w-7 h-7 xl:h-8 xl:w-8 cursor-pointer fill-[#4CBEC5]  "
                target="_blank"
                rel="noreferrer">

                <Image src="/images/footer/instagram.svg" fill sizes="100vw" alt="" />

              </Link>
              <Link
                href="/"
                className="select-none relative w-7 h-7 xl:h-8 xl:w-8 cursor-pointer fill-[#4CBEC5]  "
                target="_blank"
                rel="noreferrer">

                <Image src="/images/footer/twitter.svg" fill sizes="100vw" alt="" />

              </Link>
              <Link
                href="/"
                className="select-none relative w-7 h-7 xl:h-8 xl:w-8 cursor-pointer fill-[#4CBEC5] "
                target="_blank"
                rel="noreferrer">

                <Image src="/images/footer/linkedln.svg" fill sizes="100vw" alt="" />

              </Link>
              <Link
                href=""
                className="relative w-7 h-7 xl:h-8 xl:w-8 cursor-pointer select-none fill-[#4CBEC5]"
                target="_blank"
                rel="noreferrer">

                <Image src="/images/footer/youtube.svg" fill sizes="100vw" alt="" />

              </Link>
            </div>
            <span className="flex items-center mx-2 mt-2 xl:hidden">
              <Image src="/images/footer/whatsapp.svg" width={24} height={26} alt="" />
              <Link href="+1 (555) 023-4567" target="_blank" rel="noreferrer">

                <p className="cursor-pointer select-none py-1 font-ubuntu text-[#F2F2F2] w-40 mx-1 pt-1 hover:text-[#4CBEC5]">
                  +1 <strong className="xl:hidden">(555) 023-4567</strong>
                </p>

              </Link>
            </span>
            <div className="grid grid-cols-5 col-span-1 py-2">
              <div className="flex col-span-3">
                <Link href="/" className="relative w-48 h-8 cursor-pointer select-none">

                  <SvgAppStore />

                </Link>
                <Link href="/" className="relative w-48 h-8 cursor-pointer select-none">

                  <SvgGoogleStore />

                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Hire-me badge: subliminal portfolio branding at the footer's bottom edge */}
        <div className="mt-6 pt-4 border-t border-[#4CBEC5]/20 flex flex-col gap-1">
          <p className="text-xs font-ubuntu text-[#A3A9C1]">
            Crafted by {DEV.name} · {DEV.role} ·{" "}
            <Link href="/hire-me" className="text-[#4CBEC5]">
              Available for freelance
            </Link>
          </p>
          <Link
            href={DEV.upworkUrl}
            target="_blank"
            rel="noreferrer"
            className="w-max text-xs font-ubuntu text-[#4CBEC5]"
          >
            Hire me on Upwork
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
