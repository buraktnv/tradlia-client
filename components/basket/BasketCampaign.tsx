import React, { FC } from "react";

const BasketCampaign: FC<any> = ({ content, style }) => {
  return (
    <div className={`${style.container} rounded-3xl px-8 py-3`}>
      <div className={`${style.header} font-medium text-base xl:text-lg xl:whitespace-pre-line`}>{content.header}</div>
      <div className="xl:font-medium text-[#7E8096] text-sm">{content.description}</div>
    </div>
  );
};

export default BasketCampaign;
