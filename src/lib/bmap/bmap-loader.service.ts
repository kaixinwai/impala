import { BMAP_CONFIG, BMapConfig } from './bmap-config';
import { Injectable, Inject } from '@angular/core';
import { getScript } from "./util/get-script";

const CALL_BACK = "__bmap_loaded_callback__";
const UNDEFINED = "undefined";

function BMap_defined() {
    return UNDEFINED !== typeof BMap;
}

@Injectable()
export class BMapLoaderService {

    constructor( @Inject(BMAP_CONFIG) private config: BMapConfig) { }

    load() {
        return new Promise<any>(((resolve, reject) => {
            if (BMap_defined()) {
                resolve();
            } else {
                (<any>window)[CALL_BACK] = () => {
                    if (BMap_defined()) {
                        resolve();
                    } else {
                        reject(new Error("加载百度地图失败"));
                    }
                    delete (<any>window)[CALL_BACK];
                };
                const URL = `http://api.map.baidu.com/api?v=2.0&ak=${this.config.accessKey}&callback=${CALL_BACK}`;
                getScript(URL);
            }
        }));
    }
}
