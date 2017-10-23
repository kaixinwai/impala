import { ContextMenuService } from './context-menu.service';
import { ContextMenuComponent } from './context-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ContextMenuComponent],
    imports: [CommonModule],
    exports: [],
    providers: [ContextMenuService],
    entryComponents: [ContextMenuComponent]
})
export class ContextMenuModule {
}
