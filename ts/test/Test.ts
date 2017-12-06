import Sprite = laya.display.Sprite;
import Image = laya.ui.Image;
import {DH} from "../data/DH";

export class Test extends Sprite {
    i: Image;

    constructor() {
        super();
        this.autoSize = true;
        this.addChild(this.i = new Image("img/pop.png"));
        DH.instance.bd.bind("view.test.iPos", this, this.update);
    }

    update(p) {
        this.i.x = p.x;
        this.i.y = p.y;
        p.x + this.width > Laya.stage.width && DH.instance.bd.set("view.test.iPos", {x: 0, y: p.y});
        p.y + this.height > Laya.stage.height && DH.instance.bd.set("view.test.iPos", {x: p.x, y: 0});
    }
}