import { createContext, FC, ReactNode, useContext, useMemo, useState } from "react";
import { toast } from "react-toastify";

type IBasket = IBasketProduct[] | [];
export interface IProduct {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  shipping: number;
}
export interface IBasketProduct extends IProduct {
  basket_id: string;
}
interface IBasketProvider {
  basket: IBasket;
  addItem: (item: IProduct) => void;
  removeItem: (item: IBasketProduct) => void;
  removeItemById: (item: IProduct) => void;
  containsItemId: (item: IProduct) => number;
  clearBasket: () => void;
  basketTotal: { prices: number; shipping: number };
}
interface IBasketProviderProps {
  children: ReactNode;
}

const initialBasket: IBasket = [];

const BasketContext = createContext<IBasketProvider>({} as IBasketProvider);

export const BasketProvider: FC<IBasketProviderProps> = ({ children }) => {
  const [basket, setBasket] = useState<IBasket>(initialBasket);
  const [idCounter, setIdCounter] = useState(0);

  const basketTotal = useMemo(() => ({
    prices: basket.length > 0 ? basket.reduce((prev, el) => prev + el.price, 0) : 0,
    shipping: basket.length > 0 ? basket.reduce((prev, el) => prev + el.shipping, 0) : 0,
  }), [basket]);

  const addItem = (item: IProduct) => {
    const newItem = { ...item, basket_id: String(idCounter) };
    setBasket((prev) => [...prev, newItem]);
    setIdCounter((n) => n + 1);
    setBasket((prev) => [...prev, newItem]);
    toast.info("Item added to cart.");
  };

  const removeItem = (item: IBasketProduct) => {
    setBasket((prev) => prev.filter((el) => el.basket_id !== item.basket_id));
    toast.info("Item removed from cart.");
  };

  const removeItemById = (item: IProduct) => {
    setBasket((prev) => {
      const firstMatch = prev.filter((el) => el.id === item.id);
      if (firstMatch?.length > 0) {
        toast.info("Item removed from cart.");
        return prev.filter((el) => el.basket_id !== firstMatch[0].basket_id);
      }
      return prev;
    });
  };

  const containsItemId = (item: IProduct) => {
    const arr = basket.filter((el) => el.id === item.id);
    return arr.length;
  };

  const clearBasket = () => {
    setBasket(initialBasket);
    toast.info("Cart cleared.");
  };

  return (
    <BasketContext.Provider
      value={{ basket, addItem, removeItem, removeItemById, clearBasket, basketTotal, containsItemId }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketContext = () => useContext(BasketContext);
