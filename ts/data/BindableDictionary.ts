/**
 * Created by Lonmee on 6/13/2017.
 *
 * 支持stirng类型的点句式的设置和读取，如:this.dh.bd.set("view.test.iPos", {x:100, y:50});
 * 会自行创建view对象、test对象、iPos对象并维持父子关系且将iPos赋值为{x:100, y:50});
 *
 * for e.g.
 *
 * function updateDD2(n){
 * console.log("herer dd changed2", n);
 * }
 * dh.bd.bind("dd", null, updateDD2)
 *
 * function updateDD(n){
 * console.log("herer dd changed", n);
 * }
 * dh.bd.bind("dd", null, updateDD)
 *
 * dh.bd.set("dd", 500)
 *
 */
import Dictionary = laya.utils.Dictionary;

export interface IBindable {
    bind(key, caller, fun);

    unbind(key, fun);
}

export class BindableDictionary extends Dictionary implements IBindable {
    protected watcher = {};

    bind(key, caller, fun) {
        let ke;
        if (ke = this.watcher[key]) {
            if (this.exist(ke, caller, fun) == -1)
                ke.push([caller, fun]);
        }
        else
            this.watcher[key] = [[caller, fun]];
    }

    unbind(key, caller = null, fun = null) {
        let idx;
        if (caller == null && fun == null)
            delete this.watcher[key];
        else if (fun == null)
            this.deleteCaller(this.watcher[key], caller);
        else if ((idx = this.exist(this.watcher[key], caller, fun)) > -1)
            this.watcher[key].splice(idx, 1);
    }

    get(key: any): any {
        let kArr = key.split(".");
        let k;
        return this.indexOf(k = kArr.shift()) > -1 ? kArr.length ? this.readObj(super.get(k), kArr) : super.get(k) : null;
    }

    set(key, value: any): void {
        //for store value
        let kArr = key.split(".");
        let k, o;
        //有值？多层？递归更新（）：更新（）：多层？递归创建并赋值（）：单次创建并赋值（）；
        this.indexOf(k = kArr.shift()) > -1 ? kArr.length ? this.saveObj(super.get(k), kArr, value) : super.set(k, value) ://value
            kArr.length ? super.set(k, o = {}) || this.saveObj(o, kArr, value) : super.set(k, value);//no value
        //for sync update handler
        let ke;
        if (ke = this.watcher[key])
            for (let ce of ke) {
                ce[1].call(ce[0], value);
            }
    }

    private readObj(obj, kArr) {
        let k = kArr.shift();
        return kArr.length ? this.readObj(obj[k], kArr) : obj[k];
    }

    private saveObj(obj: object, kArr: string[], value) {
        let k = kArr.shift();
        return kArr.length ? obj.hasOwnProperty(k) ? this.saveObj(obj[k], kArr, value) : this.saveObj(obj[k] = {}, kArr, value) :
            obj[k] = value;
    }

    private deleteCaller(arr, e1) {
        for (let i = arr.length; i--; i > 0) {
            if (arr[i][0] == e1)
                arr.splice(i, 1);
        }
    }

    private exist(arr, e1, e2): number {
        for (let i = arr.length; i--; i > 0) {
            if (arr[i][0] == e1 && arr[i][1] == e2)
                return i;
        }
        return -1;
    }
}