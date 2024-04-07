import React from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCart = create()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      removeItem: (item) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== item.id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      getStorage: () => createJSONStorage(() => localStorage),
    }
  )
);
