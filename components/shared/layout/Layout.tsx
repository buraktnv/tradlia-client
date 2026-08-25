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
      <div className="hidden xl:block">
        <Navbar />
      </div>
      <div className="xl:hidden">
        <HeaderMobile />
      </div>
      <main
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
