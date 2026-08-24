import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { SvgFavorite } from "../../../helpers/svgs/basketSvg";
import { SvgBigger } from "../../../helpers/svgs/homeSvg";
import RemoveConfirmModal from "./RemoveConfirmModal";

// Product copied from cart and modified

const SingleCard: FC<any> = ({ content, deleteCard }) => {
  const [modal, setModal] = useState<boolean>(false);

  const deleteFavorites = () => {
    deleteCard(content);
  };
  return (
    <>
      {modal && <RemoveConfirmModal setModal={setModal} deleteFavorites={deleteFavorites} />}
      <div className="grid grid-cols-11 gap-3 relative group bg-white border border-[#dadada65] hover:border-[#4CBEC5]/60 hover:shadow-md px-6 py-3 rounded-3xl w-full transition-all ease-in-out duration-200">
        <div className="flex items-center justify-center w-full h-full col-span-2">
          <Image className="object-contain" src={content?.image} width={120} height={100} alt={content.brand} />
        </div>
        <div className="flex flex-col justify-center w-full col-span-3 border-r border-[#cccccc9c]">
          <div className="flex flex-col text-[#7E8096]">
            <h5 className="font-bold">{content.name}</h5>
            <h3 className="">{content.brand}</h3>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-2">
          <div className="text-xl font-bold text-[#6F7081]">
            {`${content.price.toFixed(2)}`.replace(".", ",")} $ <br />
            <p className="text-xs font-normal text-[#7E8096]">
              starting from <strong> {content.advertCount} listings</strong>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full col-span-3 px-6 bottom-3">
          <Link href="/category" className="w-full flex items-center justify-center py-2 border border-[#f59b009c] rounded-full text-sm text-[#F59C00] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            All Listings
            <div className="w-8 h-4">
              <SvgBigger />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-end w-full gap-2">
          {content.shipping === 0 ? (
            <Image src="/images/main/fourthSection/cargoCar.svg" width={48} height={48} alt="Cargo Car" />
          ) : (
            ""
          )}
          <div className="w-6 h-6 cursor-pointer" onClick={() => setModal(true)}>
            <SvgFavorite />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
