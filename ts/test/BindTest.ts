import {FlyImage} from "./FlyIamge";
import Sprite = laya.display.Sprite;
import {BD} from "../data/BD";

/**
 * Created by ShanFeng on 12/6/2017.
 */

export class BindTest extends Sprite {
    constructor(private len) {
        super();
        this.initFly();
    }

    initFly() {
        for (let i = 0; i < this.len; i++)
            this.addChild(new FlyImage(i));
        Laya.timer.frameLoop(1, this, this.tick);
        // laya.utils.Stat.renderSlow = true;
    }

    tick() {
        for (let id = 0; id < this.len; id++) {
            let s = BD.g(`view.test${id}.speed`);
            let dir = BD.g(`view.test${id}.dir`);
            let x = BD.g(`view.test${id}.iPos`).x + s * dir.x;
            let y = BD.g(`view.test${id}.iPos`).y + s * dir.y;
            BD.s(`view.test${id}.iPos`, {x: x, y: y});
        }
    }
}