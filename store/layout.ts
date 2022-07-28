import { atom } from "jotai";

export enum Views {
  Entry,
  Main,
}

export const viewAtom = atom<Views>(Views.Entry);
