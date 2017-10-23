/**
 *
 */
export interface ContextMenuItem {
    divider: boolean;
}

/**
 *
 */
export class ContextMenuAction implements ContextMenuItem {

    readonly divider: boolean = false;

    /**
     *
     * @param {string} text
     * @param {() => any} click 注意: click 中的 this 为 {@link ContextMenuConfig.context}
     * @param {boolean} disabled
     * @param icon
     */
    constructor(public text: string,
                public click: () => any,
                public disabled?: boolean,
                public icon?: any) {
    }

}

/**
 *
 */
export class ContextMenuDivider implements ContextMenuItem {
    readonly divider: boolean = true;
}

export const CONTEXT_MENU_DIVIDER = new ContextMenuDivider();