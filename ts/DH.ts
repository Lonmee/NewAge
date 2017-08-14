/**
 * Created by ShanFeng on 8/11/2017.
 */
export class DH {
    static _instance: DH;

    constructor() {

    }

    static instance() {
        return this._instance || new DH();
    }
}