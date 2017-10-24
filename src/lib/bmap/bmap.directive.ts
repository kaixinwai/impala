import { BMapConfig, BMAP_CONFIG } from './bmap-config';
import { BMapLoaderService } from './bmap-loader.service';
import { Directive, Input, AfterViewInit, ElementRef, NgZone, Output, EventEmitter, OnChanges, SimpleChanges, Inject } from '@angular/core';

@Directive({
    selector: '[bmap]',
})
export class BMapDirective implements AfterViewInit, OnChanges {

    @Output()
    mapLoaded: EventEmitter<BMap.Map> = new EventEmitter();

    @Input()
    mapCenter: BMap.Point;

    @Input()
    mapZoom: number;

    private map: BMap.Map;

    constructor( @Inject(BMAP_CONFIG) private mapConfig: BMapConfig,
        private elementRef: ElementRef,
        private loader: BMapLoaderService,
        private zone: NgZone) { }

    ngAfterViewInit(): void {
        this.loader.load().then(() => {
            const map: BMap.Map = this.map = this.zone.runOutsideAngular(() => {
                return new BMap.Map(this.elementRef.nativeElement, {
                    enableMapClick: false
                });
            });
            const center: number[] = this.mapConfig.center || [120, 30],
                zoom = this.mapConfig.zoom || 10;
            if (2 !== center.length) { throw new Error("invalid lon lat"); }
            map.centerAndZoom(new BMap.Point(center[0], center[1]), zoom);
            this.mapLoaded.emit(map);
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.map) {
            if (changes['mapZoom']) {
                this.map.setZoom(this.mapZoom);
            }
            if (changes['mapCenter']) {
                this.map.setCenter(this.mapCenter);
            }
        }
    }

}
