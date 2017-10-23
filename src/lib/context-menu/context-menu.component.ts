import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContextMenuConfig } from "./context-menu-config";
import { ContextMenuAction } from "./context-menu-item";

@Component({
    selector: 'app-context-menu',
    templateUrl: './context-menu.component.html',
    styleUrls: ['./context-menu.component.css']
})
export class ContextMenuComponent implements OnInit {

    @Output()
    menuActionClick: EventEmitter<{}> = new EventEmitter();

    constructor(public config: ContextMenuConfig) {
    }

    ngOnInit() {
    }

    onContextMenuAction(item: ContextMenuAction) {
        if (!item || !item.click)
            return;

        item.click.call(this.config.context);
        this.menuActionClick.emit();
    }
}
