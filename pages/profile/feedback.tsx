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
      <div className="flex flex-col w-full xl:bg-transparent bg-[#F4F5F7]">
        <div className="xl:h-[3rem] flex xl:flex-row flex-col xl:gap-0 gap-3 justify-between xl:pl-8 mx-3 xl:mx-0 xl:border xl:border-[#00B1B265] xl:bg-[#F4F5F7] xl:rounded-full xl:mb-[1.5rem] mb-2">
          <div className="flex justify-around xl:justify-start xl:gap-12 border rounded-full py-2 xl:py-0 border-[#00B1B265] xl:border-0">
            <div className="flex xl:mx-8">
              <FilterDropdown filterList={filterList} onSelect={onFilterSelect} />
            </div>
            <div className="flex xl:mx-8">
              <DateDropdown />
            </div>
          </div>
          <div className="flex relative ring-1 rounded-full ring-[#4CBEC565] ">
            <input
              type="search"
              id="search"
              placeholder="Search"
              className="outline-none bg-white placeholder-[#7E8096] xl:placeholder-[#4CBEC5] px-5 text-left text-[#7E8096] xl:text-[#4CBEC5]  placeholder:font-light w-full  xl:px-20 py-2 rounded-full xl:text-center"
            />
            <div className="absolute w-5 h-5 right-4 xl:right-10 top-3.5 text-[#4cbec5]">
              <SvgSearch />
            </div>
          </div>
        </div>
        {filteredList.length === 0 ? (
          <div className="flex items-center justify-center w-full px-6 py-16 text-center text-[#7E8096]">
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
