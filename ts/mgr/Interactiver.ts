/**
 * Created by ShanFeng on 12/6/2017.
 */
import Event = laya.events.Event;
import Input = Laya.Input;
import {BD} from "./data/BD";
import {Conf} from "./data/Conf";
import {ReduxTest} from "./test/ReduxTest";

export class Interactiver {
    constructor() {

    }

    static init() {
        Laya.stage.on(Event.KEY_DOWN, this, this.kdHandler);
        Laya.stage.on(Event.KEY_PRESS, this, this.kpHandler);
        Conf.fw.debug && BD.b("fw.showStatus", this, this.showStatus);
    }

    static kdHandler(e) {
        if (e.target instanceof Input)
            return;
        //不区分大小写,包含功能键
        // console.log("kd:", e.keyCode, e.nativeEvent.code, e.nativeEvent.key);
        switch (e.nativeEvent.code) {
            case "KeyS":
                Conf.fw.debug && BD.s("fw.showStatus", !BD.g("fw.showStatus"));
                break;
            case "KeyN":
                break;
            case "KeyZ":
                break;
            case "Escape":
                break;

            case "ArrowUp":
            case "ArrowDown":
            case "ArrowLeft":
            case "ArrowRight":
                if (ReduxTest.STORE) {
                    ReduxTest.STORE.dispatch({type: e.nativeEvent.code});
                }
        }
    }

    static kpHandler(e) {
        //区分大小写，不含功能键
        // console.log("kp:", e.keyCode, e.nativeEvent.code, e.nativeEvent.key);
    }

    static showStatus(on: boolean) {
        if (on) {
            laya.utils.Stat.show();
        } else {
            laya.utils.Stat.hide();
        }
    }
}