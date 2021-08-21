import { atom } from "recoil";
import { PageName } from "../consts";

export enum AppAtom {
    curPage = 'curPage'
}

export const curPageState = atom({
    key: AppAtom.curPage,
    default: {
        name: PageName.projects
    }
})