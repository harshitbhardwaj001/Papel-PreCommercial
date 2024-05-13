import React from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const saveOrder = create()(
  persist(
    (set) => ({
      orderFinal: {},
      addOrder: (order) => {
        set(() => {
          return { orderFinal: order };
        });
      },
      clearOrder: () => set({ orderFinal: {} }),
    }),
    {
      name: "order-storage",
      getStorage: () => createJSONStorage(() => localStorage),
    }
  )
);

export default saveOrder;
