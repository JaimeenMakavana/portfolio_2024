// store/store.ts
import { Gradient, lightGradients } from "@/Statics/static";
import { create } from "zustand";

interface StoreState {
  lightGradients: Gradient[];
  randomIndex: number;
  setRandomIndex: () => void;
}

const useStore = create<StoreState>((set) => ({
  lightGradients: lightGradients,
  randomIndex: Math.floor(Math.random() * lightGradients.length),
  setRandomIndex: () =>
    set({ randomIndex: Math.floor(Math.random() * lightGradients.length) }),
}));

export default useStore;
