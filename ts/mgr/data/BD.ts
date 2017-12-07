/**
 * Created by Lonmee on 8/11/2017.
 */
import {BindableDictionary} from "../../data/BindableDictionary";

/**
 * 数据绑定的静态代理
 */
export class BD {
    private static bd = new BindableDictionary();

    /**
     * get
     * @param k
     * @returns {any}
     */
    static g(k?) {
        return k ? this.bd.get(k) : this.bd;
    }

    /**
     * set
     * @param k key
     * @param v value
     */
    static s(k, v) {
        return this.bd.set(k, v);
    }

    /**
     * bind
     * @param k key
     * @param c caller
     * @param f funciton
     */
    static b(k, c, f) {
        return this.bd.bind(k, c, f);
    }

    /**
     * unbind
     * caller 和 function可选，未指定则整体处理
     * @param k key
     * @param c caller
     * @param f function
     */
    static u(k, c?, f?) {
        return this.bd.unbind(k, c, f);
    }

    /**
     * remove
     * @param k key
     * @returns {boolean}
     */
    static r(k) {
        return this.bd.remove(k);
    }
}