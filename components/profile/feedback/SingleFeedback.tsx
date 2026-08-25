import { FC, useState } from "react";
import { SmileFace, SvgEmptyStar, SvgStar } from "../../../helpers/svgs/feedbackSvg";
import useLocalStorage from "../../../helpers/hooks/useLocalStorage";

const SingleFeedback: FC<any> = ({ content }) => {
  const [storedAnswer, setStoredAnswer] = useLocalStorage<string | null>(
    `feedback-answers-${content.id}`,
    content.answer ?? null
  );
  const [draft, setDraft] = useState<string>("");
  const [editing, setEditing] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const hasAnswer = !!storedAnswer;

  const sendAnswer = () => {
    if (!draft.trim()) return;
    setStoredAnswer(draft.trim());
    setDraft("");
    setEditing(false);
  };

  const startEdit = () => {
    setDraft(storedAnswer ?? "");
    setEditing(true);
  };

  return (
    <div>
      <div className="rounded-card border border-line bg-surface p-4 shadow-card mx-3 xl:mx-0 grid grid-cols-1 gap-3 xl:grid-cols-7">
        <div className="xl:col-span-2 flex xl:flex-col justify-between xl:justify-center gap-1 xl:gap-3 xl:border-r border-b xl:border-b-0 border-line xl:p-0 py-2 xl:mx-4 xl:my-4 w-full">
          <div className="flex flex-col gap-2 py-1 xl:gap-3">
            <div className="flex items-center h-full gap-2">
              <span className="xl:w-6 xl:h-6 w-4 h-4 text-successDark">
                <SmileFace />
              </span>
              <p className="text-xs leading-snug text-ink-soft xl:text-sm">
                The product was as described
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="xl:w-6 xl:h-6 w-4 h-4 text-successDark">
                <SmileFace />
              </div>
              <p className="text-xs leading-snug text-ink-soft xl:text-sm">
                The store took care in product packaging
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="xl:w-6 xl:h-6 w-4 h-4 text-successDark">
                <SmileFace />
              </span>
              <p className="text-xs leading-snug text-ink-soft xl:text-sm">
                I am satisfied with the store's communication
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-between xl:justify-start xl:gap-2 xl:flex-row">
            <div className="flex flex-col-reverse items-center justify-between xl:justify-start xl:gap-2 xl:flex-row">
              <div className="flex gap-1 text-amber-400">
                {Array(Math.floor(content.vote))
                  .fill(0)
                  .map((x, index) => {
                    return (
                      <div key={index} className="w-4 h-4 xl:w-5 xl:h-5">
                        <SvgStar />
                      </div>
                    );
                  })}
                {Array(5 - Math.floor(content.vote))
                  .fill(0)
                  .map((x, index) => (
                    <div key={index} className="w-4 h-4 xl:w-5 xl:h-5">
                      <SvgEmptyStar key={index} />
                    </div>
                  ))}
              </div>
              <p className="font-display font-bold leading-4 text-base tabular-nums text-ink xl:text-xl xl:text-start w-full xl:w-fit">
                {String(content.vote).replace(".", ",")}
              </p>
            </div>
            <p className="text-xs xl:hidden text-ink-muted">
              <b>{content.date.split("-")[0]}</b> - {content.date.split("-")[1]}
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col col-span-4 gap-2 pt-1 xl:pt-2 xl:gap-4 xl:px-4 xl:my-4 ${
            !hasAnswer && "xl:justify-between"
          }`}
        >
          <div>
            <p className="font-medium text-brand-600 text-sm xl:text-base py-1 xl:py-0">{content.name}</p>
            <div className="text-xs xl:text-sm bg-canvas border border-line rounded-card max-w-full break-words px-3 py-2 text-ink-soft">
              {content.feedback}
            </div>
          </div>
          <div className="flex items-end text-xs xl:pr-4 xl:text-sm">
            {hasAnswer && !editing ? (
              <p className="bg-brand-50 text-brand-700 max-w-full break-words ml-auto px-4 py-2 rounded-l-card rounded-b-card rounded-tr-card">
                {storedAnswer}
              </p>
            ) : (
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendAnswer()}
                className="w-full rounded-pill border border-line bg-surface px-5 py-2 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-muted focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30 mt-2 xl:h-10"
                placeholder="Your Answer"
              />
            )}
          </div>
        </div>
        <div className="flex justify-between gap-20 py-2 xl:my-2 xl:px-0 xl:gap-0 xl:flex-col">
          <div className="text-sm text-center hidden xl:block tabular-nums text-ink-muted">{content.date}</div>
          <button type="button" onClick={() => setShowDetails((pre) => !pre)} className="inline-flex h-10 w-full items-center justify-center rounded-pill border border-dangerTint bg-dangerTint px-4 py-2 text-xs font-medium text-dangerDark transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:brightness-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 xl:text-sm">
            Order Details
          </button>

          {hasAnswer && !editing ? (
            <button type="button" onClick={startEdit} className="inline-flex h-10 w-full items-center justify-center rounded-pill bg-brand-400 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 xl:text-sm">
              Edit
            </button>
          ) : (
            <button type="button" onClick={sendAnswer} className="inline-flex h-10 w-full items-center justify-center rounded-pill bg-amber-500 px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-amberDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 xl:text-sm">
              Send
            </button>
          )}

          {showDetails && (
            <div className="w-full rounded-card border border-line bg-canvas p-3 text-xs text-ink-soft leading-5">
              <div className="grid gap-1">
                <div>
                  <b className="text-brand-600">Customer:</b> {content.name}
                </div>
                <div>
                  <b className="text-brand-600">Date:</b> {content.date}
                </div>
                <div>
                  <b className="text-brand-600">Rating:</b> {String(content.vote).replace(".", ",")}
                </div>
                <div>
                  <b className="text-brand-600">Feedback:</b> {content.feedback}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleFeedback;
