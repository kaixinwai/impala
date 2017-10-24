import { BMAP_CONFIG, BMapConfig } from './bmap-config';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BMapLoaderService } from './bmap-loader.service';
import { BMapDirective } from './bmap.directive';

@NgModule({
    declarations: [BMapDirective],
    imports: [CommonModule],
    exports: [BMapDirective],
    providers: [BMapLoaderService],
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
