/**
 * Created by Lonmee on 8/9/2017.
 */

import {DH} from "./DH";
import Conf from "./data/Conf";
import {Test} from "./test";
import Event = laya.events.Event;

export class NA {
    dh: DH;
    t: Test;

    constructor() {
        if (Conf.debug)
            window['dh'] = this.dh = DH.instance();
        else
            this.dh = DH.instance();

        Laya.init(window.innerWidth, window.innerHeight);
        this.init();
    }

    init() {
        window['na'] = this;
        this.t = new Test();
        this.t.autoSize = true;
        this.t.on(Event.CLICK, this, this.click);
        this.t.test();
    }

    click() {
        console.log("doParent");
    }
}