import { atom } from "nanostores";

export const searchKeyword = atom<string>("");
export const filteredTags = atom<string[]>([]);
