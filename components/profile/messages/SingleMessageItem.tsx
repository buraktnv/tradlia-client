import { FC, useEffect, useRef, useState } from "react";
import {
  SvgDroppedDown,
  SvgM,
  SvgMarket,
  SvgSpeechBubble,
  SvgSpeechBubbleTwo,
  SvgTrashcan,
} from "../../../helpers/svgs/messageSvg";
import useLocalStorage from "../../../helpers/hooks/useLocalStorage";

const cannedReplies = [
  "Thank you for your message, we are looking into it.",
  "We have forwarded your request to the relevant department.",
  "Thanks for reaching out — we will get back to you shortly.",
];

const nowLabel = () => {
  const d = new Date();
  const date = `${String(d.getDate()).padStart(2, "0")}.${String(d.getMonth() + 1).padStart(2, "0")}.${d.getFullYear()}`;
  const time = `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  return `${date} - ${time}`;
};

const SingleMessageItem: FC<any> = ({ content, onArchive, onRestore, archived }) => {
  return <Card content={content} onArchive={onArchive} onRestore={onRestore} archived={archived} />;
};

const Card: FC<any> = ({ content, onArchive, onRestore, archived }) => {
  const [active, setCardState] = useState<boolean>(content.active || false);
  const [thread, setThread] = useLocalStorage<any[]>(`messages-thread-${content.id}`, content.messages || []);
  const [draft, setDraft] = useState<string>("");
  const [showOrder, setShowOrder] = useState<boolean>(false);

  const mounted = useRef(true);
  const activeRef = useRef(active);
  const replyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (replyTimer.current) clearTimeout(replyTimer.current);
    };
  }, []);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const lastMessage = thread[thread.length - 1] || content;

  const sendMessage = () => {
    if (!draft.trim()) return;
    const next = [
      ...thread,
      {
        id: `me-${Date.now()}`,
        sender: "me",
        message: draft.trim(),
        date: nowLabel(),
      },
    ];
    setThread(next);
    setDraft("");

    // simulated incoming reply after 1.5-2.5s, only while the thread is open
    const delay = 1500 + Math.random() * 1000;
    if (replyTimer.current) clearTimeout(replyTimer.current);
    replyTimer.current = setTimeout(() => {
      if (!mounted.current || !activeRef.current) return;
      setThread((pre: any[]) => [
        ...pre,
        {
          id: `reply-${Date.now()}`,
          sender: "customer",
          message: cannedReplies[Math.floor(Math.random() * cannedReplies.length)],
          date: nowLabel(),
          received: true,
        },
      ]);
    }, delay);
  };

  return (
    <div
      className={`mx-3 rounded-card border bg-surface px-4 py-2 shadow-card transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none xl:mx-0 xl:py-0 ${
        active ? "border-brand-300" : "border-line"
      }`}
    >
      <div className="grid items-center justify-between grid-cols-7 py-2 text-sm xl:px-3 xl:grid-cols-12">
        <div className="flex items-center col-span-4 gap-2 xl:col-span-3 border-b border-line xl:border-none w-full h-full pb-2 xl:pb-0">
          <div className="h-8 w-8 flex items-center justify-center border rounded-full border-brand-200 bg-canvas text-ink-muted">
            <div className="w-4 h-4 text-ink-soft ">
              <SvgMarket />
            </div>
          </div>
          <div className="text-ink-soft font-medium text-[13px] xl:text-sm">{content.customer}</div>
        </div>
        <div className="font-medium text-brand-600 text-left xl:col-span-2 order-1 xl:order-none col-span-6 pt-2 xl:pt-0">
          {content.subject}
        </div>
        <div className="text-ink-soft text-xs xl:text-sm xl:col-span-4 order-2 xl:order-none col-span-6">
          {lastMessage.message.slice(0, 43) + "..."}
        </div>
        <div className="text-ink-soft text-xs xl:text-sm flex items-center justify-end xl:justify-between col-span-3 xl:col-span-2 xl:order-none xl:block pb-2 xl:pb-0 gap-1.5 border-b border-line xl:border-none w-full h-full">
          <b>{lastMessage.date.split("-")[0]}</b>-{lastMessage.date.split("-")[1]}
          <button type="button"
            onClick={() => setCardState((pre: any) => !pre)}
            className="w-5 h-5 border bg-canvas rounded-full flex items-center justify-center cursor-pointer border-brand-200 xl:hidden"
          >
            <div
              className={`w-[10px] h-[6px] transform text-brand-500 duration-150 ${active ? "rotate-180" : "rotate-0"}`}
            >
              <SvgDroppedDown />
            </div>
          </button>
        </div>
        <div className="flex items-center justify-end order-1 row-span-3 xl:px-2 xl:justify-between xl:order-none xl:row-span-1">
          {archived ? (
            <button type="button"
              onClick={() => onRestore?.(content.id)}
              className="rounded-pill border border-line px-3 py-1.5 text-xs font-medium text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 xl:text-sm xl:py-2"
            >
              Restore
            </button>
          ) : (
            <div
              className="xl:w-6 xl:h-6 w-4 h-5 text-brand-400 cursor-pointer"
              onClick={() => onArchive?.(content.id)}
            >
              <SvgTrashcan />
            </div>
          )}
          <button type="button"
            onClick={() => setCardState((pre: any) => !pre)}
            className="p-1 border bg-canvas rounded-full hidden items-center justify-center xl:flex cursor-pointer border-brand-200"
          >
            <div className={`w-4 h-4 transform text-brand-500 duration-150 ${active ? "rotate-180" : "rotate-0"}`}>
              <SvgDroppedDown />
            </div>
          </button>
        </div>
      </div>
      {active && (
        <div className="flex flex-col text-sm xl:px-4 xl:py-4">
          <div className="mb-2 xl:mb-4">
            <button type="button" onClick={() => setShowOrder((pre) => !pre)} className="inline-flex items-center justify-center rounded-pill border border-dangerTint bg-dangerTint px-4 py-2 text-sm font-medium text-dangerDark transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:brightness-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1">
              Order Details
            </button>
            {showOrder && (
              <div className="mt-2 rounded-card border border-line bg-canvas p-3 text-xs leading-5 text-ink-soft xl:text-sm">
                <div className="grid gap-1">
                  <div>
                    <b className="text-brand-600">Customer:</b> {content.customer}
                  </div>
                  <div>
                    <b className="text-brand-600">Subject:</b> {content.subject}
                  </div>
                  <div>
                    <b className="text-brand-600">Date:</b> {content.date}
                  </div>
                  <div>
                    <b className="text-brand-600">Last Message:</b> {lastMessage.message}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col">
            {thread &&
              thread.map((content: { id: any }) => <MessageCard key={content.id} content={content} />)}
          </div>
          {!archived && (
            <div className="flex flex-col items-center gap-2 py-1 xl:flex-row xl:px-4 xl:flex-start">
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="border border-line bg-surface rounded-full text-center xl:text-left w-full xl:w-10/12 px-8 py-3 outline-none "
                placeholder="Your Answer"
              />
              <button type="button" onClick={sendMessage} className="inline-flex w-full items-center justify-center rounded-pill bg-brand-400 px-4 py-3 font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 xl:w-2/12">
                Send
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const MessageCard: FC<any> = ({ content }) => {
  return (
    <>
      {content.sender === "customer" ? (
        <div className="w-full xl:pl-6 xl:pr-8 px-4 py-5 mb-12 mr-auto bg-canvas text-ink-soft text-xs xl:text-sm relative">
          <p className="pl-2 whitespace-pre-line">{content.message}</p>
          <div className="absolute flex py-3 left-4">
            <div className="h-7 w-7 fill-current text-surface">
              <SvgSpeechBubble />
            </div>
            <div className="px-2 py-3 text-xs xl:text-sm">{content.date}</div>
          </div>
        </div>
      ) : (
        <div className="xl:pr-6 px-3 py-5 mb-12 ml-auto rounded-card bg-brand-400 text-white xl:pl-8 xl:pr-6 text-xs xl:text-sm relative w-full xl:w-2/5 text-right">
          <p className="pr-2 whitespace-pre-line">{content.message}</p>
          <div className="absolute flex py-3 right-4">
            <div className="px-2 py-3 text-xs xl:text-sm text-surface/90">{content.date}</div>
            <div className="w-7 h-7">
              <SvgSpeechBubbleTwo />
            </div>
          </div>
          <div className="absolute flex items-center py-6 xl:py-5 left-4">
            <div className={`w-6 h-4 xl:w-7 xl:h-7  ${content.received ? "text-surface" : "text-surface/60"}`}>
              <SvgM />
            </div>
            <div className="px-2 text-xs xl:text-sm text-surface/90">
              {content.received ? "Read" : content.sender === "me" ? "Sent" : "Unread"}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMessageItem;
