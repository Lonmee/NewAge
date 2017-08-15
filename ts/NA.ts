/**
 * Created by Lonmee on 8/9/2017.
 */

import {DH} from "./DH";
import Conf from "./data/Conf";

export class NA {
    dh: DH;

    constructor() {
        if (Conf.debug)
            window['dh'] = this.dh = DH.instance();
        else
            this.dh = DH.instance();


    }
}