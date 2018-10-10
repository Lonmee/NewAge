/**
 * Created by Lonmee on 8/3/2018.
 * 复用了laya的显示框架
 * 尚未继承redux的ReactComponent基类，适配react视图时扩展
 * 该例简约实验redux核心mvc机制
 *
 * 交互事件来自kdHandler() @ mgr/Interactiver的键盘响应（方向键），同理可扩展ui交互事件
 */
import {createStore} from "../../../vendor/redux";
import Sprite = laya.display.Sprite;

export class ReduxTest extends Sprite {
    //todo:可重构入全局单例
    public static STORE = createStore(run);

    constructor() {
        super();
        this.x = 200;
        this.y = 100;
        this.loadImage("img/pop.png");
        //订阅通知，该方法在redux将作为闭包调用
        ReduxTest.STORE.subscribe(this.update.bind(this));
    }

    //view
    update() {
        let pos = ReduxTest.STORE.getState();
        this.x = pos.x;
        this.y = pos.y;
    }
}

/*临时位置*/
let spd = 2;

function run(s = {x: 200, y: 100}, a) {
    switch (a.type) {
        case "ArrowUp":
            s.y -= spd;
            break;
        case "ArrowDown":
            s.y += spd;
            break;
        case "ArrowLeft":
            s.x -= spd;
            break;
        case "ArrowRight":
            s.x += spd;
    }
    return s;
}
/*临时位置 end*/