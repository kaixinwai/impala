import { ContextMenuItem } from "./context-menu-item";

export class ContextMenuConfig {

    /**
     * in px
     */
    left: number;

    /**
     * in px
     */
    top: number;

    /**
     * 上下文
     */
    context: any;

    items: ContextMenuItem[] = [];

}
