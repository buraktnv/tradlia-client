import { FC } from "react";
import { SvgFilledStar, SvgStar, SvgStore } from "../../helpers/svgs/sellerSvg";
import PortalModal from "../shared/PortalModal";
import styles from "../shared/ScrollBar.module.scss";

const comments: any = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    name: "B** M**",
    date: "May 28, 2022",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    name: "M** K**",
    date: "May 28, 2022",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    name: "F** G**",
    date: "May 28, 2022",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    name: "A** K**",
    date: "May 28, 2022",
  },
  {
    id: 5,
    title:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    name: "L** S**",
    date: "May 28, 2022",
  },
  {
    id: 6,
    title:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    name: "B** M**",
    date: "May 28, 2022",
  },
  {
    id: 7,
    title:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    name: "B** M**",
    date: "May 28, 2022",
  },
  {
    id: 8,
    title:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    name: "B** M**",
    date: "May 28, 2022",
  },
  {
    id: 9,
    title:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    name: "B** M**",
    date: "May 28, 2022",
  },
  {
    id: 10,
    title:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    name: "B** M**",
    date: "May 28, 2022",
  },
];

const AllComments: FC<any> = ({ setModal1 }) => {
  return (
    <PortalModal open onClose={() => setModal1(false)} panelClassName="px-6 xl:px-10 py-6">
      <div className="flex flex-col items-center gap-5 text-sm">
        <button type="button"
          onClick={() => setModal1(false)}
          className="flex items-center justify-center text-[#F9B000] text-lg font-medium border border-[#f59b0065] rounded-full w-full py-2"
        >
          Store Reviews
        </button>

        <div className="flex flex-col justify-center w-full space-y-3">
          <div className="flex gap-5">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 p-3 text-[#66c1c0ad] bg-[#F4F5F9] xl:bg-white rounded-full border border-[#66c1c0ad]">
                <SvgStore />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-[#7E8096] font-semibold">Tradlia</p>

                <div className="flex items-center justify-center w-full gap-2">
                  <div className="w-4 h-4 text-[#F9B000]">
                    <SvgFilledStar />
                  </div>
                  <div className="w-4 h-4 text-[#F9B000]">
                    <SvgFilledStar />
                  </div>
                  <div className="w-4 h-4 text-[#F9B000]">
                    <SvgFilledStar />
                  </div>
                  <div className="w-4 h-4 text-[#F9B000]">
                    <SvgFilledStar />
                  </div>
                  <div className="w-4 h-4 text-[#F9B000]">
                    <SvgStar />
                  </div>
                  <div className="flex text-md font-bold text-[#F9B000]">4,1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`flex flex-col w-full h-[45vh] pr-6 overflow-y-scroll ${styles.ScrollBar}`}>
          {comments.map((comment: any) => (
            <ProductCard comment={comment} key={comment.id} />
          ))}
        </div>
      </div>
    </PortalModal>
  );
};
const ProductCard: FC<any> = ({ comment }) => {
  return (
    <div className="flex flex-col border-t py-[1rem] border-[#f59b0065]">
      <div className="flex py-3">
        <div className="w-4 h-4 text-[#F9B000]">
          <SvgFilledStar />
        </div>
        <div className="w-4 h-4 text-[#F9B000]">
          <SvgFilledStar />
        </div>
        <div className="w-4 h-4 text-[#F9B000]">
          <SvgFilledStar />
        </div>
        <div className="w-4 h-4 text-[#F9B000]">
          <SvgFilledStar />
        </div>
        <div className="w-4 h-4 text-[#F9B000]">
          <SvgStar />
        </div>
      </div>
      <div className="text-[#7E8096]">{comment.title}</div>
      <div className="flex gap-2 py-1">
        <div className="text-[#7E8096] font-bold">{comment.name}</div>
        <div className="text-[#7E8096] border-l border-[#F59C00] px-2">{comment.date}</div>
      </div>
    </div>
  );
};

export default AllComments;
