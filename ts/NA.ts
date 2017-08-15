/**
 * Created by Lonmee on 8/9/2017.
 */

import {DH} from "./DH";
import Conf from "./data/Conf";

export class NA {
    dh: DH;

    constructor() {
        if (Conf.debug)
            window['dh'] = this.dh = DH.instance();
        else
            this.dh = DH.instance();
        this.dh.bd.bind("xx", this, this.doSync);
        this.dh.bd.bind("xx", this, this.doSync);
        this.dh.bd.bind("xx", this, this.doSync2);
        // this.dh.bd.unbind("xx", this, this.doSync2);
    }

    doSync(v) {
        console.log(this, v, "a");
    }

    doSync2(v) {
        console.log(this, v, "b");
    }
}