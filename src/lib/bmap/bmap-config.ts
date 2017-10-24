import { InjectionToken } from '@angular/core';

export interface BMapConfig {

    accessKey: string;

    /**
     * default zoom
     */
    zoom?: number;

    /**
     * default center
     */
    center?: number[];
}

export let BMAP_CONFIG = new InjectionToken<BMapConfig>('bmap.config');
