import Dictionary = laya.utils.Dictionary;

/**
 * Created by Lonmee on 6/13/2017.
 */

interface IBindable {
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
        if (caller == null)
            delete this.watcher[key];
        else if (fun == null)
            this.deleteCaller(this.watcher[key], caller);
        else if ((idx = this.exist(this.watcher[key], caller, fun)) > -1)
            this.watcher[key].splice(idx, 1);
    }

    set (key: any, value: any): void {
        super.set(key, value);
        let ke;
        if (ke = this.watcher[key])
            for (let ce of ke) {
                ce[1].call(ce[0], value);
            }
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