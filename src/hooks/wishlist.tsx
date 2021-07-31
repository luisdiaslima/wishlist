import React, { createContext, useState, useContext, useCallback } from 'react'
import { useEffect } from 'react';



interface WishListData {
  wishList: string[];
  addToWishList(id: string): void;
  removeFromWishList(id: string): void;
  resetWishList(): void;
}

export const WishList = createContext<WishListData>({} as WishListData)

export const WishListProvider: React.FC = ({ children }) => {
  const [wishList, setWishList] = useState<string[]>([] as string[]);

  useEffect(() => {
      const list = localStorage.getItem("@wishlist");
      const replace_wish_list = JSON.parse(list as string);
      setWishList(replace_wish_list as string[] || []);
  }, []);

  useEffect(() => {
      localStorage.setItem("@wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const removeFromWishList = useCallback(
    (id: string) => {
      const filterNewProducts = wishList?.length
        ? wishList.filter((item) => item !== id)
        : []
      setWishList(filterNewProducts);
    },
    [wishList]
  );

  const addToWishList = useCallback((id: string) => {
    if (wishList.find((item) => item === id)) {
        removeFromWishList(id);
    } else {
        setWishList((oldList) => [...oldList, id]);
    }
  }, [removeFromWishList, wishList]);

  const resetWishList = useCallback(() => {
    setWishList([]);
  }, []);

  return (
    <WishList.Provider
      value={{
        wishList,
        addToWishList,
        removeFromWishList,
        resetWishList,
      }}
    >
      {children}
    </WishList.Provider>
  )
}

export function useWishList(): WishListData {
  const context = useContext(WishList)

  if (!context) throw new Error('useWishList error')

  return context
}
