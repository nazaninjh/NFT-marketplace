import { create } from "zustand";
import { createThemeSlice, IThemeSlice } from "./themeSlice";
import { persist } from "zustand/middleware";

export const useStore = create<IThemeSlice>()(
  persist(
    (set, get, store) => ({
      ...createThemeSlice(set, get, store),
    }),
    {
      name: "theme",
      partialize: (state) => ({
        theme: state.theme,
      }),
    },
  ),
);
