import React, { useState } from "react";
import { NextPage } from "next";
import Basket from "../../components/basket/Basket";
import Payment from "../../components/basket/Payment";
import { BasketCardData } from "../../components/basket/Content";
import useLocalStorage from "../../helpers/hooks/useLocalStorage";

const Index: NextPage = () => {
  const [activePage, setActivePage] = useState<string>("basket");
  const [basketData, setBasketData] = useLocalStorage<any[]>("basket-data", BasketCardData);

  return (
    <>
      {activePage === "basket" ? (
        <Basket
          activePage={activePage}
          setActivePage={setActivePage}
          basketData={basketData}
          setBasketData={setBasketData}
        />
      ) : (
        <Payment
          activePage={activePage}
          setActivePage={setActivePage}
          basketData={basketData}
          setBasketData={setBasketData}
        />
      )}
    </>
  );
};

export default Index;
