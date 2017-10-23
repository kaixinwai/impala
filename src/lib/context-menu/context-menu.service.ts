import { ComponentRef, Injectable, Injector } from '@angular/core';
import { GlobalPositionStrategy, Overlay, OverlayConfig, OverlayContainer, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal, PortalInjector } from "@angular/cdk/portal";
import { ContextMenuConfig } from "./context-menu-config";
import { ContextMenuComponent } from "./context-menu.component";
import "rxjs/add/operator/first";

@Injectable()
export class ContextMenuService {

    overlayRef: OverlayRef;

    constructor(private overlay: Overlay,
                private parentInjector: Injector,
                private overlayContainer: OverlayContainer) {
        let overlayConfig: OverlayConfig = new OverlayConfig();
        overlayConfig.hasBackdrop = true;
        overlayConfig.positionStrategy = overlay.position().global().left('9999px').top('9999px');
        overlayConfig.backdropClass = 'cdk-overlay-transparent-backdrop';
        this.overlayRef = overlay.create(overlayConfig);
        this.overlayRef.backdropClick().subscribe(() => this.detach());
    }

    /**
     *
     * @param config
     */
    attach(config: ContextMenuConfig) {
        if (this.overlayRef.hasAttached()) {
            this.detach();
        }

        let injector: Injector = this.createInjector(config), // ContextMenuInjector(this.parentInjector, config),
            portal: ComponentPortal<ContextMenuComponent> = new ComponentPortal(ContextMenuComponent, null, injector);
        let componentRef: ComponentRef<ContextMenuComponent> = this.overlayRef.attach(portal);
        componentRef.instance.menuActionClick.first().subscribe(() => this.detach());

        setTimeout(() => {
            let overlayElement: HTMLElement = this.overlayRef.overlayElement,
                overlayWidth = overlayElement.offsetWidth,
                overlayHeight = overlayElement.offsetHeight,
                containerElement: HTMLElement = this.overlayContainer.getContainerElement(),
                containerWidth = containerElement.offsetWidth,
                containerHeight = containerElement.offsetHeight,
                left = config.left,
                top = config.top;

            left = (left + overlayWidth > containerWidth) ? containerWidth - overlayWidth : left;
            top = (top + overlayHeight > containerHeight) ? containerHeight - overlayHeight : top;

            let positionStrategy: GlobalPositionStrategy = this.overlayRef.getConfig().positionStrategy as GlobalPositionStrategy;
            positionStrategy.left(left + 'px').top(top + 'px');
            this.overlayRef.updatePosition();
        }, 0);
    }

    detach() {
        let positionStrategy: GlobalPositionStrategy = this.overlayRef.getConfig().positionStrategy as GlobalPositionStrategy;
        positionStrategy.left('9999px').top('9999px');
        this.overlayRef.updatePosition();

        this.overlayRef.detach(); // .then(() => console.log('ContextMenuComponent detached'));
    }

    private createInjector(config: ContextMenuConfig): PortalInjector {

        // const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injectionTokens = new WeakMap();

        injectionTokens.set(ContextMenuConfig, config);

        return new PortalInjector(/*userInjector || */this.parentInjector, injectionTokens);
    }

}
