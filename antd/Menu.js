/* @flow */

import * as React from 'react';

export type SelectParam = {
    key: string,
    keyPath: Array<string>,
    item: any,
    domEvent: any,
    selectedKeys: Array<string>,
};

export type ClickParam = {
    key: string,
    keyPath: Array<string>,
    item: any,
    domEvent: any,
};

export type MenuProps = {
    id?: string,
    theme?: 'light' | 'dark',
    mode?: 'vertical' | 'horizontal' | 'inline',
    selectable?: boolean,
    selectedKeys?: Array<string>,
    defaultSelectedKeys?: Array<string>,
    openKeys?: Array<string>,
    defaultOpenKeys?: Array<string>,
    onOpenChange?: (openKeys: string[]) => void,
    onSelect?: (param: SelectParam) => void,
    onDeselect?: (param: SelectParam) => void,
    onClick?: (param: ClickParam) => void,
    style?: Object,
    openAnimation?: string | Object,
    openTransitionName?: string | Object,
    className?: string,
    prefixCls?: string,
    multiple?: boolean,
    inlineIndent?: number,
    inlineCollapsed?: boolean,
};

export class Menu extends React.Component<MenuProps> {
    static Divider: any;
    static Item: any;
    static SubMenu: any;
    static ItemGroup: any;
    static defaultProps: {
        prefixCls: string,
        className: string,
        theme: string,
    };
    static childContextTypes: {
        inlineCollapsed: any,
    };
    static contextTypes: {
        siderCollapsed: any,
    };
}
