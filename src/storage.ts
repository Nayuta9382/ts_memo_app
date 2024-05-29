import { Memo } from "./types";

// 変数一覧
export const STORAGE_KEY = 'memos';

// 関数一覧
export function readLocalStorage(key:string): Memo[]{
    // ローカルストレージからデータを取得する
    const data = localStorage.getItem(key);
    if(data === null){
        return[];
    } else{
        // JSONの型をjsの型に変換してreturn
        return JSON.parse(data);
    }
}
export function saveLocalStorage(key:string,memos:Memo[]){
    // ローカルストレージにデータを保存する
    localStorage.setItem(key,JSON.stringify(memos));
}