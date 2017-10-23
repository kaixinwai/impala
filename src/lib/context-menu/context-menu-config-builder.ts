import { ContextMenuConfig } from "./context-menu-config";
import { CONTEXT_MENU_DIVIDER, ContextMenuAction, ContextMenuItem } from "./context-menu-item";

export class ContextMenuConfigBuilder {

    config: ContextMenuConfig;

    constructor() {
        this.config = new ContextMenuConfig();
    }

    left(pageX: number): ContextMenuConfigBuilder {
        this.config.left = pageX;
        return this;
    }

    top(pageY: number): ContextMenuConfigBuilder {
        this.config.top = pageY;
        return this;
    }

    addAction(text: string, click: (context?: any) => any, disabled?: boolean): ContextMenuConfigBuilder {
        this.config.items.push(new ContextMenuAction(text, click, disabled));
        return this;
    }

    addDivider(): ContextMenuConfigBuilder {
        do {
            if (0 === this.config.items.length)
                break;

            if (CONTEXT_MENU_DIVIDER === this.config.items[this.config.items.length - 1])
                break;

            this.config.items.push(CONTEXT_MENU_DIVIDER);
        } while (false);

        return this;
    }

    addItems(...items: ContextMenuItem[]): ContextMenuConfigBuilder {
        this.config.items.push(...items);
        return this;
    }

    context(context: any) {
        this.config.context = context;
        return this;
    }

    build(): ContextMenuConfig {
        // check menu item count
        if (0 === this.config.items.length) {
            throw new Error('empty context menu');
        }

        if (CONTEXT_MENU_DIVIDER === this.config.items[this.config.items.length - 1]) {
            this.config.items.pop();
        }

        // check again
        if (0 === this.config.items.length) {
            throw new Error('empty context menu');
        }

        if (!this.config.context) {
            console.warn('no context for ContextMenu');
        }
        return this.config;
    }

}
