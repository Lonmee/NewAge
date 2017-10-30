/**a
 * Created by Lonmee on 8/9/2017.
 */

import {DH} from "./DH";
import {Test} from "./test/Test";
import {Conf} from "./data/Conf";
import Stage = laya.display.Stage;

export class NA {
    dh: DH;

    constructor() {
        if (Conf.debug) {
            window['dh'] = this.dh = DH.instance;
            window['na'] = this;
        }
        else
            this.dh = DH.instance;

        Laya.init(window.innerWidth, window.innerHeight);
        Laya.stage.scaleMode = Stage.SCALE_SHOWALL;

        this.init();
    }

    init() {
        Laya.stage.addChild(new Test());
        this.dh.bd.set("view.test.iPos", {x:200, y:100});
    }
}