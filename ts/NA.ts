/**a
 * Created by Lonmee on 8/9/2017.
 */

import {Conf} from "./data/Conf";
import {Interactiver} from "./mgr/Interactiver";
import {BindTest} from "./test/BindTest";
import WebGL = laya.webgl.WebGL;
import {BD} from "./data/BD";

export class NA {
    constructor() {
        Conf.fw.debug = true;

        if (Conf.fw.debug) {
            window['bd'] = BD;
            window['na'] = this;
        }

        Laya.init(Conf.stageConf.width, Conf.stageConf.height, WebGL);
        Laya.stage.scaleMode = Conf.stageConf.scaleMode;
        Laya.stage.bgColor = Conf.stageConf.bgColor;


        Interactiver.init();

        Laya.stage.addChild(new BindTest(500));
    }

}