import Image = laya.ui.Image;
import {BD} from "../data/BD";

export class FlyImage extends Image {
    private speed: number;

    constructor(private id) {
        super();
        this.size(40, 32);
        let x, y;
        x = Math.round(Math.random() * Laya.stage.width - this.width);
        y = Math.round(Math.random() * Laya.stage.height - this.height);
        this.pos(x < 0 ? 0 : x, y < 0 ? 0 : y);
        this.loadImage("img/pop.png");

        this.speed = Math.round(Math.random() * 5);
        this.speed < 2 && (this.speed = 2);

        BD.s(`view.test${id}.iPos`, {x: this.x, y: this.y});
        BD.s(`view.test${id}.dir`, {x: Math.random() > .5 ? 1 : -1, y: Math.random() > .5 ? 1 : -1});
        BD.s(`view.test${id}.speed`, this.speed);
        BD.b(`view.test${id}.iPos`, this, this.update);
    }

    update(p) {
        this.x = p.x;
        this.y = p.y;

        let dx, dy, pos;
        if (p.x < 0 || p.x + this.width > Laya.stage.width) {
            pos = BD.g(`view.test${this.id}.dir`);
            dx = pos.x;
            dy = pos.y;
            BD.s(`view.test${this.id}.dir`, {x: dx * -1, y: dy});
        }
        if (p.y < 0 || p.y + this.height > Laya.stage.height) {
            pos = BD.g(`view.test${this.id}.dir`);
            dx = pos.x;
            dy = pos.y;
            BD.s(`view.test${this.id}.dir`, {x: dx, y: dy * -1});
        }
    }
}