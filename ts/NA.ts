/**a
 * Created by Lonmee on 8/9/2017.
 */

import {DH} from "./data/DH";
import {Test} from "./test/Test";
import {Conf} from "./data/Conf";
import {Interactiver} from "./mgr/Interactiver";
import WebGL = laya.webgl.WebGL;

export class NA {
    dh: DH;

    constructor() {
        Conf.fw.debug = true;

        if (Conf.fw.debug) {
            window['dh'] = this.dh = DH.instance;
            window['na'] = this;
        }
        else
            this.dh = DH.instance;

        Laya.init(Conf.stageConf.width, Conf.stageConf.height, WebGL);
        Laya.stage.scaleMode = Conf.stageConf.scaleMode;
        Laya.stage.bgColor = Conf.stageConf.bgColor;

        Interactiver.init();

        this.BindTest();
    }

    BindTest() {
        Laya.stage.addChild(new Test());
        Laya.timer.frameLoop(1, this, this.tick);
        DH.instance.bd.set("view.test.iPos", {x: 0, y: 0});
    }

    tick() {
        let x = this.dh.bd.get("view.test.iPos").x + 1;
        let y = this.dh.bd.get("view.test.iPos").y + 1;
        this.dh.bd.set("view.test.iPos", {x: x, y: y});
    }

}