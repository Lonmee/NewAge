/**
 * Created by Lonmee on 8/11/2017.
 */
import {BindableDictionary} from "./BindableDictionary";

export class DH {
    private static _instance: DH;
    bd: BindableDictionary;

    constructor() {
        this.bd = new BindableDictionary();
    }

    static get instance() {
        return this._instance || (this._instance = new DH());
    }

}