import { BMAP_CONFIG, BMapConfig } from './bmap-config';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BMapDirective } from './bmap.directive';

@NgModule({
    declarations: [BMapDirective],
    imports: [CommonModule],
    exports: [BMapDirective],
    providers: [],
})
export class BMapModule {
    static forRoot(config: BMapConfig): ModuleWithProviders {
        return {
            ngModule: BMapModule,
            providers: [
                { provide: BMAP_CONFIG, useValue: config }
            ]
        };
    }
}
