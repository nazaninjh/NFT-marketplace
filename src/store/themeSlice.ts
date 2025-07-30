import { StateCreator } from "zustand";

export type ITheme = "dark" | "light";

export interface IThemeSlice {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}

export const createThemeSlice: StateCreator<IThemeSlice> = (
  set,
): IThemeSlice => ({
  theme: "dark",
  setTheme: (theme) => set({ theme }),
});
