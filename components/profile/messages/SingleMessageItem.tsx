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
      className={`px-4 py-2 bg-white xl:py-0 border rounded-3xl mx-3 xl:mx-0 ${
        active ? "border-[#00b2b29c]" : "border-[#CDCDCD9c]"
      }`}
    >
      <div className="grid items-center justify-between grid-cols-7 py-2 text-sm xl:px-3 xl:grid-cols-12">
        <div className="flex items-center col-span-4 gap-2 xl:col-span-3 border-b border-[#C6C6C680] xl:border-none w-full h-full pb-2 xl:pb-0">
          <div className="h-8 w-8 flex items-center justify-center border rounded-full border-[#00B1B29c] bg-[#F4F5F7] text-[#7E8096]">
            <div className="w-4 h-4 text-[#7E8096] ">
              <SvgMarket />
            </div>
          </div>
          <div className="text-[#7E8096] font-medium text-[13px] xl:text-sm">{content.customer}</div>
        </div>
        <div className="text-[#4CBEC5] text-left font-bold xl:col-span-2 order-1 xl:order-none col-span-6 pt-2 xl:pt-0">
          {content.subject}
        </div>
        <div className="text-[#7E8096] text-xs xl:text-sm xl:col-span-4 order-2 xl:order-none col-span-6">
          {lastMessage.message.slice(0, 43) + "..."}
        </div>
        <div className="text-[#7E8096] text-xs xl:text-sm flex items-center justify-end xl:justify-between col-span-3 xl:col-span-2 xl:order-none xl:block pb-2 xl:pb-0 gap-1.5 border-b border-[#C6C6C680] xl:border-none w-full h-full">
          <b>{lastMessage.date.split("-")[0]}</b>-{lastMessage.date.split("-")[1]}
          <button type="button"
            onClick={() => setCardState((pre: any) => !pre)}
            className="w-5 h-5 border bg-[#F4F5F7] rounded-full flex items-center justify-center cursor-pointer border-[#00B1B29c] xl:hidden"
          >
            <div
              className={`w-[10px] h-[6px] transform text-[#00B1B2] duration-150 ${active ? "rotate-180" : "rotate-0"}`}
            >
              <SvgDroppedDown />
            </div>
          </button>
        </div>
        <div className="flex items-center justify-end order-1 row-span-3 xl:px-2 xl:justify-between xl:order-none xl:row-span-1">
          {archived ? (
            <button type="button"
              onClick={() => onRestore?.(content.id)}
              className="text-xs xl:text-sm border border-[#00B1B29c] text-[#4CBEC5] rounded-full px-3 py-1.5 xl:py-2"
            >
              Restore
            </button>
          ) : (
            <div
              className="xl:w-6 xl:h-6 w-4 h-5 text-[#00b2b2d0] cursor-pointer"
              onClick={() => onArchive?.(content.id)}
            >
              <SvgTrashcan />
            </div>
          )}
          <button type="button"
            onClick={() => setCardState((pre: any) => !pre)}
            className="p-1 border bg-[#F4F5F7] rounded-full hidden items-center justify-center xl:flex cursor-pointer border-[#00B1B29c]"
          >
            <div className={`w-4 h-4 transform text-[#00B1B2] duration-150 ${active ? "rotate-180" : "rotate-0"}`}>
              <SvgDroppedDown />
            </div>
          </button>
        </div>
      </div>
      {active && (
        <div className="flex flex-col text-sm xl:px-4 xl:py-4">
          <div className="mb-2 xl:mb-4">
            <button type="button" onClick={() => setShowOrder((pre) => !pre)} className="px-4 py-2 font-bold xl:font-normal text-sm border rounded-full text-[#FB295A] border-[#fb295a9c]">
              Order Details
            </button>
            {showOrder && (
              <div className="mt-2 border border-[#5327A8] rounded-xl p-3 text-xs xl:text-sm text-[#7E8096] leading-5">
                <div className="grid gap-1">
                  <div>
                    <b className="text-[#4CBEC5]">Customer:</b> {content.customer}
                  </div>
                  <div>
                    <b className="text-[#4CBEC5]">Subject:</b> {content.subject}
                  </div>
                  <div>
                    <b className="text-[#4CBEC5]">Date:</b> {content.date}
                  </div>
                  <div>
                    <b className="text-[#4CBEC5]">Last Message:</b> {lastMessage.message}
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
                className="border xl:border-[#00B1B29c] border-[#C6C6C69c] bg-white rounded-full text-center xl:text-left w-full xl:w-10/12 px-8 py-3 outline-none "
                placeholder="Your Answer"
              />
              <button type="button" onClick={sendMessage} className="bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] text-white px-4 py-3 rounded-full font-bold w-full xl:w-2/12">
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
        <div className="w-full xl:pl-6 xl:pr-8 px-4 py-5 mb-12 mr-auto bg-[#F4F5F7] rounded-2xl xl:rounded-3xl text-[#7E8096] text-xs xl:text-sm relative">
          <p className="pl-2 whitespace-pre-line">{content.message}</p>
          <div className="absolute flex py-3 left-4">
            <div className="text-[#F4F5F9] w-7 h-7">
              <SvgSpeechBubble />
            </div>
            <div className="px-2 py-3 text-xs xl:text-sm">{content.date}</div>
          </div>
        </div>
      ) : (
        <div className="xl:pr-6 px-3 xl:pl-8 py-5 mb-12 ml-auto bg-[#4CBEC5] rounded-2xl xl:rounded-3xl text-white text-xs xl:text-sm relative w-full xl:w-2/5 text-right">
          <p className="pr-2 whitespace-pre-line">{content.message}</p>
          <div className="absolute flex py-3 right-4">
            <div className="px-2 py-3 text-xs xl:text-sm text-[#7E8096]">{content.date}</div>
            <div className="w-7 h-7">
              <SvgSpeechBubbleTwo />
            </div>
          </div>
          <div className="absolute flex items-center py-6 xl:py-5 left-4">
            <div className={`w-6 h-4 xl:w-7 xl:h-7  ${content.received ? "text-[#4cbec5]" : "text-gray-500"}`}>
              <SvgM />
            </div>
            <div className="px-2 text-xs xl:text-sm text-[#4CBEC5]">
              {content.received ? "Read" : content.sender === "me" ? "Sent" : "Unread"}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMessageItem;
