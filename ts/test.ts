/**
 * Created by ShanFeng on 8/29/2017.
 */
import Image = laya.ui.Image;
import Stage = laya.display.Stage;
import Handler = laya.utils.Handler;
import Event = laya.events.Event;
import Sprite = laya.display.Sprite;

export class Test extends Sprite {
    img: Image;

    test() {
        // Laya.init(Browser.width, Browser.height);
        Laya.init(800, 600);
        Laya.stage.scaleMode = Stage.SCALE_FIXED_AUTO;

        this.img = window['img'] = new Image();
        this.img.loadImage("img/pop.png", 0, 0, 0, 0, Handler.create(this, this.loadComplete));
    }

    private test2() {
        // this.setGridImg();
        var img = new Image();
        // img.skin = "img/xxx.png";
        // img.sizeGrid = "9,11,11,9,1";
        // img.size(200, 50);
        Laya.stage.addChild(img);
    }

    loadComplete(t) {
        this.img.skin = t.url;
        this.img.sizeGrid = this.getSudoku(this.img, 1);
        this.img.width = 200;
        this.img.height = 100;
        this.addChild(this.img);
        // Laya.stage.once(Event.CLICK, this, this.click);
        Laya.stage.addChild(this);
    }

    private click(e) {
        console.log("what the fuck!");
        this.destroy();
    }

    private getSudoku(obj: any = null, repetition: number = 0): any {
        let top: number = Math.ceil(obj.height / 3 * 2);
        let right: number = Math.ceil(obj.width / 2 + 1);
        let bottom: number = Math.ceil(obj.height / 3 + 1);
        let left: number = Math.ceil(obj.width / 2);
        let val: string = top + "," + right + "," + bottom + "," + left + "," + repetition;
        return val
    }
}