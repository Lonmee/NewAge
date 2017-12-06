import {DH} from "../data/DH";
import Sprite = laya.display.Sprite;
import {FlyImage} from "./FlyIamge";

/**
 * Created by ShanFeng on 12/6/2017.
 */

export class BindTest extends Sprite {
    dh = DH.instance;

    constructor(private len) {
        super();
        this.mouseEnabled = this.mouseThrough = false;
        this.initFly();
    }

    initFly() {
        for (let i = 0; i < this.len; i++)
            this.addChild(new FlyImage(i));
        Laya.timer.frameLoop(1, this, this.tick);
    }

    tick() {
        for (let id = 0; id < this.len; id++) {
            let s = this.dh.bd.get(`view.test${id}.speed`);
            let dir = this.dh.bd.get(`view.test${id}.dir`);
            let x = this.dh.bd.get(`view.test${id}.iPos`).x + s * dir.x;
            let y = this.dh.bd.get(`view.test${id}.iPos`).y + s * dir.y;
            this.dh.bd.set(`view.test${id}.iPos`, {x: x, y: y});
        }
    }
}