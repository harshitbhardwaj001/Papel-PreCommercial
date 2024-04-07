import React from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCart = create()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (i) => i.id === item.id
          );
          if (existingItemIndex !== -1) {
            // Item already exists, update its quantity
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += item.quantity;
            return { items: updatedItems };
          } else {
            // Item doesn't exist, add it to the cart
            return { items: [...state.items, item] };
          }
        });
      },
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      getStorage: () => createJSONStorage(() => localStorage),
    }
  )
);
