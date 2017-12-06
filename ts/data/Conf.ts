/**
 * Created by Lonmee on 8/15/2017.
 *
 * for static data
 *
 */
import Stage = laya.display.Stage;

export class Conf {
    static fw: IFrameworks = {frameVer: "1.0", buildVer: "1.0", debug: false};
    static stageConf: IStageConf = {
        scaleMode: Stage.SCALE_SHOWALL,
        bgColor: "#0",
        width: Laya.Browser.width,
        height: Laya.Browser.height
    };
    static domains: IDomain = {cdn: "", resCdn: ""};

}

interface IFrameworks {
    frameVer: string
    buildVer: string
    debug: boolean
}

interface IStageConf {
    scaleMode: string
    bgColor: string
    width?: number
    height?: number
}

interface IDomain {
    cdn?: string
    resCdn: string
}

interface IWebApi {
    testSvr: string
    svr: string
}

interface ILoaderConf {
    retry?: number
    delay?: number
    max?: number
}

interface IInfo {
}

interface ILocalTest {
}

interface StarName {
    single: string
    multiple: string
}