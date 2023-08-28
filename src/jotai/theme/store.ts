import { atom } from "jotai";

type Theme = "dark" | "light";

export const themeAtom = atom<Theme>("dark");
