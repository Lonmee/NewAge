/**
 * Created by ShanFeng on 12/7/2017.
 */
import Sprite = laya.display.Sprite;
import Handler = laya.utils.Handler;
import Image = laya.ui.Image;

export class GridTest extends Sprite {
    constructor() {
        super();
        let i = new Image();
        i.loadImage("img/pop.png", 0, 0, 0, 0, Handler.create(this, this.com, [i]));
        this.addChild(i);
    }

    com(i, t) {
        i.skin = t.url;
    }
}
