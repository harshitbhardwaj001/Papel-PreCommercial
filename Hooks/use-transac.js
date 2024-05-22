import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useTransaction = create()(
  persist(
    (set) => ({
      transactionId: {},
      addId: (id) => {
        set(() => {
          return { transactionId: { id } };
        });
      },
      clearId: () => set({ transactionId: {} }),
    }),
    {
      name: "transaction-storage",
      getStorage: () => createJSONStorage(() => localStorage),
    }
  )
);

export default useTransaction;
