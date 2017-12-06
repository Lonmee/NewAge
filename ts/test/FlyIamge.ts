import Image = laya.ui.Image;
import {DH} from "../data/DH";

export class FlyImage extends Image {
    private speed: number;

    constructor(private id) {
        super();
        this.size(40, 32);
        let x, y;
        x = Math.random() * Laya.stage.width - this.width;
        y = Math.random() * Laya.stage.height - this.height;
        this.pos(x < 0 ? 0 : x, y < 0 ? 0 : y);
        this.loadImage("img/pop.png");

        this.speed = Math.random() * 5;
        this.speed < 2 && (this.speed = 2);

        DH.instance.bd.set(`view.test${id}.iPos`, {x: this.x, y: this.y});
        DH.instance.bd.set(`view.test${id}.dir`, {x: Math.random() > .5 ? 1 : -1, y: Math.random() > .5 ? 1 : -1});
        DH.instance.bd.set(`view.test${id}.speed`, this.speed);
        DH.instance.bd.bind(`view.test${id}.iPos`, this, this.update);
    }

    update(p) {
        this.x = p.x;
        this.y = p.y;

        let dx, dy, pos;
        if (p.x < 0 || p.x + this.width > Laya.stage.width) {
            pos = DH.instance.bd.get(`view.test${this.id}.dir`);
            dx = pos.x;
            dy = pos.y;
            DH.instance.bd.set(`view.test${this.id}.dir`, {x: dx * -1, y: dy});
        }
        if (p.y < 0 || p.y + this.height > Laya.stage.height) {
            pos = DH.instance.bd.get(`view.test${this.id}.dir`);
            dx = pos.x;
            dy = pos.y;
            DH.instance.bd.set(`view.test${this.id}.dir`, {x: dx, y: dy * -1});
        }
    }
}