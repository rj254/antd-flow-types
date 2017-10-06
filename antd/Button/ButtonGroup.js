import * as React from 'react';

export type ButtonSize = 'small' | 'large';

export interface ButtonGroupProps {
    size?: ButtonSize;
    style?: Object;
    className?: string;
    prefixCls?: string;
}

export type ButtonGroup = React.ComponentType<ButtonGroupProps>;
