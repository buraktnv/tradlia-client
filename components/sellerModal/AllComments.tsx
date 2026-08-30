import { FC } from "react";
import { SvgFilledStar, SvgStar, SvgStorefront } from "../../helpers/svgs/sellerSvg";
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

const initialsOf = (name: string) => name.replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase();

const AllComments: FC<any> = ({ setModal1 }) => {
  return (
    <PortalModal open onClose={() => setModal1(false)} panelClassName="px-6 xl:px-8 py-6">
      <div className="flex flex-col items-center gap-5 text-sm">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-display text-lg font-semibold text-ink">Store Reviews</h2>
          <button
            type="button"
            onClick={() => setModal1(false)}
            aria-label="Close store reviews"
            className="rounded-pill border border-line px-4 py-1.5 text-xs font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            Close
          </button>
        </div>

        <div className="flex flex-col justify-center w-full space-y-3">
          <div className="flex gap-5">
            <div className="flex items-center gap-3">
              <div
                className="w-14 h-14 p-3.5 text-brand-600 bg-canvas rounded-full border border-line flex items-center justify-center"
                aria-hidden="true"
              >
                <SvgStorefront />
              </div>
              <div className="flex flex-col">
                <p className="font-display text-base font-semibold text-ink">Tradlia</p>

                <div className="flex items-center w-full gap-1.5" aria-label="Rated 4.1 out of 5">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={`filled-${i}`} className="w-4 h-4 text-amber-400">
                      <SvgFilledStar />
                    </div>
                  ))}
                  <div className="w-4 h-4 text-line">
                    <SvgStar />
                  </div>
                  <span className="pl-1 font-display text-sm font-bold text-ink">4,1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className={`flex flex-col w-full h-[45vh] pr-6 overflow-y-scroll ${styles.ScrollBar}`}>
          {comments.map((comment: any) => <ProductCard comment={comment} key={comment.id} />)}
        </ul>
      </div>
    </PortalModal>
  );
};
const ProductCard: FC<any> = ({ comment }) => {
  return (
    <li className="flex gap-3 border-t border-line py-[1rem]">
      <div
        className="flex items-center justify-center shrink-0 w-9 h-9 rounded-full bg-brand-100 text-brand-700 font-display font-semibold text-xs"
        aria-hidden="true"
      >
        {initialsOf(comment.name)}
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex items-center gap-0.5" aria-label="Rated 4 out of 5">
          {[0, 1, 2, 3].map((i) => (
            <div key={`filled-${i}`} className="w-3.5 h-3.5 text-amber-400">
              <SvgFilledStar />
            </div>
          ))}
          <div className="w-3.5 h-3.5 text-line">
            <SvgStar />
          </div>
        </div>
        <p className="text-sm text-ink-soft leading-relaxed">{comment.title}</p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-0.5">
          <span className="text-sm font-semibold text-ink">{comment.name}</span>
          <span className="pulse-dot bg-success inline-block" aria-hidden="true" />
          <span className="text-xs text-success font-medium">Verified buyer</span>
          <span className="text-xs text-ink-muted border-l border-line pl-2">{comment.date}</span>
        </div>
      </div>
    </li>
  );
};

export default AllComments;
