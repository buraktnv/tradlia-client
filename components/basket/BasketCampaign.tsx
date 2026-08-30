import React, { FC } from "react";

const BasketCampaign: FC<any> = ({ content, style }) => {
  return (
    <div className={`${style.container} rounded-card px-6 py-3`}>
      <div className={`${style.header} font-display font-semibold text-base xl:text-lg xl:whitespace-pre-line`}>
        {content.header}
      </div>
      <div className="xl:font-medium text-ink-soft text-sm">{content.description}</div>
    </div>
  );
};

export default BasketCampaign;
