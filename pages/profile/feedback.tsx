import { NextPage } from "next";
import { useState } from "react";
import DateDropdown from "../../components/profile/feedback/DateDropdown";
import FilterDropdown from "../../components/profile/feedback/FilterDropdown";
import SingleFeedback from "../../components/profile/feedback/SingleFeedback";
import { ProfileLayout } from "../../components/profile/ProfileLayout";
import { SvgSearch } from "../../helpers/svgs/feedbackSvg";

const feedBackList = [
  {
    id: 0,
    name: "Michael Carter",
    date: "20.04.2022-11:34",
    vote: 4.1,
    feedback: "Very successful and fast shipping. Thank you",
    answer: null,
  },
  {
    id: 2,
    name: "James Wilson",
    date: "20.04.2022-11:34",
    vote: 4,
    feedback: "Very successful and fast shipping. Thank you",
    answer: "Thank you very much. Have a good day.",
  },
  {
    id: 1,
    name: "Robert Miller",
    date: "20.04.2022-11:34",
    feedback: "Very successful and fast shipping. Thank you for your attention and thanks to Tradlia too.",
    vote: 5,
    answer: "Thank you very much. Have a good day.",
  },
];

const filterList = [
  { id: 0, title: "All", active: true },
  { id: 1, title: "Answered", active: false },
  { id: 2, title: "Not Answered", active: false },
  { id: 3, title: "1 Star", active: false },
  { id: 4, title: "2 Stars", active: false },
  { id: 5, title: "3 Stars", active: false },
  { id: 6, title: "4 Stars", active: false },
  { id: 7, title: "5 Stars", active: false },
];

const Feedback: NextPage = () => {
  const [filter, setFilter] = useState<any>(null);

  const onFilterSelect = (item: any) => {
    setFilter(item);
  };

  const filteredList = feedBackList.filter((c: any) => {
    if (!filter) return true;
    // Check both the mock data and localStorage-backed answers
    const storedAnswer = typeof window !== "undefined" ? localStorage.getItem(`feedback-answers-${c.id}`) : null;
    const hasAnswer = !!c.answer || (!!storedAnswer && storedAnswer !== "null");
    if (filter.title === "Answered") return hasAnswer;
    if (filter.title === "Not Answered") return !hasAnswer;
    if (filter.title === "1 Star") return Math.floor(c.vote) === 1;
    if (filter.title === "2 Stars") return Math.floor(c.vote) === 2;
    if (filter.title === "3 Stars") return Math.floor(c.vote) === 3;
    if (filter.title === "4 Stars") return Math.floor(c.vote) === 4;
    if (filter.title === "5 Stars") return Math.floor(c.vote) === 5;
    return true;
  });

  return (
    <ProfileLayout>
      <div className="flex flex-col w-full">
        <div className="mx-3 mb-3 flex flex-col justify-between gap-3 rounded-card border border-line bg-surface p-2 shadow-card sm:flex-row sm:items-center xl:mx-0 xl:mb-[1.5rem] mt-3 xl:mt-[1.5rem]">
          <div className="flex flex-wrap items-center justify-around gap-2 py-1 sm:justify-start xl:gap-8">
            <div className="flex xl:px-2">
              <FilterDropdown filterList={filterList} onSelect={onFilterSelect} />
            </div>
            <div className="flex xl:px-2">
              <DateDropdown />
            </div>
          </div>
          <div className="relative flex rounded-full ring-1 ring-brand-200 transition duration-200 focus-within:ring-2 focus-within:ring-brand-400/40">
            <input
              type="search"
              id="search"
              placeholder="Search"
              className="h-10 w-full rounded-full bg-surface px-5 text-left text-sm text-ink outline-none placeholder:font-light placeholder:text-ink-muted focus-visible:outline-none sm:w-64 xl:w-72"
            />
            <div className="absolute w-5 h-5 right-4 xl:right-10 top-3.5 text-brand-500">
              <SvgSearch />
            </div>
          </div>
        </div>
        {filteredList.length === 0 ? (
          <div className="flex w-full items-center justify-center rounded-card border border-line bg-surface px-6 py-16 text-center text-ink-muted shadow-card">
            No feedback matches this filter.
          </div>
        ) : (
          <div className="flex flex-col gap-3 xl:gap-[1.5rem]">
            {filteredList.map((content) => <SingleFeedback content={content} key={content.id} />)}
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default Feedback;
