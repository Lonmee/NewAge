/**
 * Created by ShanFeng on 12/7/2017.
 */
import Sprite = laya.display.Sprite;
import Handler = laya.utils.Handler;
import Image = laya.ui.Image;
import Text = laya.display.Text;

export class GridTest extends Sprite {
    private i: laya.ui.Image;
    private t: laya.display.Text;

    constructor() {
        super();
        this.pos(20, 40);

        this.t = new Text();
        this.t.font = "微软雅黑";
        this.t.fontSize = 24;
        //this.t.stroke = 5;
        //this.t.strokeColor = "#FF0000";
        this.t.text = "东发送到东发送到东发送到东发送到东发送到东发送到东发送到东发送到东发送到东发送到东发送到东发送到东发送到东发送到东发送到东发送到东发送到";
        if (this.t.width > 400) {
            this.t.wordWrap = true;
            this.t.width = 400;
        }

        this.i = new Image();
        //h:32 w:40
        this.i.loadImage("img/pop.png", 0, 0, 0, 0, Handler.create(this, this.com, [this.i]));
        //h:64 w:110
        // this.i.loadImage("img/bPop.png", 0, 0, 0, 0, Handler.create(this, this.com, [this.i]));
        this.i.addChild(this.t.pos(10, 5));
        this.addChild(this.i);

        this.pivot(200, 150);
        this.pos(200, 150);

        // Laya.timer.frameLoop(1, this, this.tick);
    }

    tick(){
        this.rotation++;
    }

    com(i, t) {
        this.i._bitmap.clear();
        this.i.skin = t.url;
        i.sizeGrid = "20, 4, 4, 8, 0";
        i.size(this.t.width + this.t.x + 5, this.t.height + this.t.y + 8);
    }

    update(e) {
        let w, h;
        w = this.t.width + this.t.x + 5;
        h = this.t.height + this.t.y + 8;
        console.log("t:", this.t.width, this.t.height, w, h);
        this.t.size(this.t.width, this.t.height);
        this.i.size(w, h);
    }
}
