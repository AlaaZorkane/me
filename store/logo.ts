import { atom } from "jotai";

export enum LogoType {
  Letter,
  Memoji,
  Profile,
}

export const logoAtom = atom<LogoType>(LogoType.Letter);
