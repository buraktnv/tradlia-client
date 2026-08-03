import React, { useState } from "react";
import { NextPage } from "next";
import Basket from "../../components/basket/Basket";
import Payment from "../../components/basket/Payment";

const Index: NextPage = () => {
  const [activePage, setActivePage] = useState<string>("basket");

  return (
    <>
      {activePage === "basket" ? <Basket activePage={activePage} setActivePage={setActivePage} /> : <Payment activePage={activePage} setActivePage={setActivePage}/>}
    </>
  );
};

export default Index;
