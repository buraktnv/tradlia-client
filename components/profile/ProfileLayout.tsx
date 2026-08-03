import { FC, ReactNode } from "react";
import Sidebar from "./Sidebar";

export const ProfileLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="container grid grid-cols-6 mx-auto mt-5 xl:mt-[1.5rem]">
        <div className="hidden col-span-0 xl:col-span-1 xl:block">
          <Sidebar />
        </div>
        <div className="col-span-6 xl:col-span-5 xl:px-6">{children}</div>
      </div>
    </>
  );
};
