import * as React from 'react';
export interface RowProps {
    className?: string;
    gutter?: number;
    type?: 'flex';
    align?: 'top' | 'middle' | 'bottom';
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
    style?: Object;
    prefixCls?: string;
}

export class Row extends React.Component<RowProps, any> {}
