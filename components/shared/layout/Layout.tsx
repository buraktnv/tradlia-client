import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import Footer from "../footer/Footer";
import MobileFooter from "../footer/MobileFooter";
import HeaderMobile from "../navbar/HeaderMobile";
import Navbar from "../navbar/Navbar";
import NavbarMobile from "../navbar/NavbarMobile";

const MobileBgWhitePages = ["/"];

interface ILayoutProps {
  children: ReactNode;
}

// Desktop and mobile chrome are both rendered and toggled with CSS
// breakpoints, so server and client always render the same tree
// (no hydration mismatch, no flash of the wrong layout).
const Layout: FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();
  const isHome = router.asPath === "/";

  return (
    <div className="flex flex-col w-full h-full">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-pill focus:bg-brand-600 focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <div className="hidden xl:block">
        <Navbar />
      </div>
      <div className="xl:hidden">
        <HeaderMobile />
      </div>
      <main
        id="main-content"
        className={`flex flex-col py-28 ${!isHome && "pt-16"} ${
          !MobileBgWhitePages.includes(router.asPath) && "bg-canvas"
        } xl:py-0 xl:bg-white xl:my-0 xl:pb-12`}
      >
        {children}
      </main>
      <div className="hidden xl:block">
        <Footer />
      </div>
      {isHome && (
        <div className="xl:hidden">
          <MobileFooter />
        </div>
      )}
      <div className="xl:hidden">
        <NavbarMobile />
      </div>
    </div>
  );
};

export default Layout;
