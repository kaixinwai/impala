import { DomPortalHost, Portal, PortalHost } from "@angular/cdk/portal";
import { ApplicationRef, ComponentFactoryResolver, Injector } from "@angular/core";

/**
 *
 */
export class PortalHostOverlay extends BMap.Overlay {

    private map: BMap.Map;

    private point: BMap.Point;

    private hostDomElement: HTMLElement;

    private portalHost: PortalHost;

    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, defaultInjector: Injector) {
        super();

        this.hostDomElement = document.createElement("div");
        this.hostDomElement.style.position = "absolute";
        this.portalHost = new DomPortalHost(this.hostDomElement, componentFactoryResolver, appRef, defaultInjector);
    }

    attach(portal: Portal<any>, lon: number, lat: number) {
        this.portalHost.attach(portal);
        // [lon, lat] = wgs84tobd09(lon, lat);
        this.point = new BMap.Point(lon, lat);

        this.draw();
    }

    detach() {
        this.portalHost.detach();
    }

    initialize(map: BMap.Map): HTMLElement {
        this.map = map;
        let panes = map.getPanes();
        let floatPane = panes.floatPane;
        if (floatPane) {
            floatPane.appendChild(this.hostDomElement);
        }
        return this.hostDomElement;
    }

    isVisible(): boolean {
        return true;
    }

    draw(): void {
        // console.log('PortalHostOverlay::draw()');
        if (!this.point) {
            return;
        }

        const position = this.map.pointToOverlayPixel(this.point);
        this.hostDomElement.style.left = position.x /*- this._size / 2 */ + "px";
        this.hostDomElement.style.top = position.y /*- this._size / 2 */ + "px";
    }

    show(): void {
        this.hostDomElement.style.display = "";
    }

    hide(): void {
        this.hostDomElement.style.display = "none";
    }

}
