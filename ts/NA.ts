/**a
 * Created by Lonmee on 8/9/2017.
 */

import {DH} from "./data/DH";
import {Conf} from "./data/Conf";
import {Interactiver} from "./mgr/Interactiver";
import {BindTest} from "./test/BindTest";
import WebGL = laya.webgl.WebGL;

export class NA {
    constructor() {
        Conf.fw.debug = true;

        if (Conf.fw.debug) {
            window['dh'] = DH.instance;
            window['na'] = this;
        }

        Laya.init(Conf.stageConf.width, Conf.stageConf.height, WebGL);
        Laya.stage.scaleMode = Conf.stageConf.scaleMode;
        Laya.stage.bgColor = Conf.stageConf.bgColor;

        Interactiver.init();

        Laya.stage.addChild(new BindTest(50));
    }

}