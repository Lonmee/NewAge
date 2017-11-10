import Sprite = laya.display.Sprite;
import Image = laya.ui.Image;
import {DH} from "../data/DH";

export class Test extends Sprite {
    i: Image;

    constructor() {
        super();
        this.addChild(this.i = new Image("img/pop.png"));

        DH.instance.bd.bind("view.test.iPos", this, this.update);
    }

    update(p) {
        this.i.x = p.x;
        this.i.y = p.y;
    }
}