/**
 * Created by Lonmee on 8/11/2017.
 */
import {BindableDictionary} from "./data/BindableDictionary";

export class DH {
    static _instance: DH;
    bd: BindableDictionary;

    constructor() {
        this.bd = new BindableDictionary();
    }

    static instance() {
        return this._instance || new DH();
    }

}