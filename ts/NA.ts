/**a
 * Created by Lonmee on 8/9/2017.
 */

import {DH} from "./data/DH";
import {Test} from "./test/Test";
import {Conf} from "./data/Conf";
import Stage = laya.display.Stage;
import Text = laya.display.Text;
import Sprite = laya.display.Sprite;
import Event = laya.events.Event;

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

        // this.BindTest();
        this.textTest();
    }

    BindTest() {
        Laya.stage.addChild(new Test());
        this.dh.bd.set("view.test.iPos", {x: 200, y: 100});
    }

    textTest() {
        let t;
        this.dh.bd.set("t", t = new Text());
        t.fontSize = 30;
        let str = "asdasdasdasdasd阿斯顿哈斯尽快打款双卡双待将阿斯顿哈斯卡对话框和\n啊寄售点卡圣诞卡说打款\n阿斯顿加啊搜点进去我决定权为单位群殴你打开完全年底前";
        t.text = str;
        t.leading = 5;
        t.font = "微软雅黑";
        t.color = "#FFFFFF";
        t.autoSize = true;
        t.x = t.y = 20;
        Laya.stage.addChild(t);

        let s = new Sprite();
        s.graphics.drawRect(t.x, t.y, t.width, t.height, "#CCCCCC");
        Laya.stage.addChildAt(s, 0);


        let s1 = new Sprite();
        // s1.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#0000CC");
        s1.on(Event.MOUSE_DOWN, this, this.mdHandler);
        s1.size(Laya.stage.width, Laya.stage.height);
        Laya.stage.addChild(s1);
    }

    mdHandler(e) {
        console.log("Here mouse down");
    }
}