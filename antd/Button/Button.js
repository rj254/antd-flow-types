import * as React from 'react';
import type { ButtonGroup } from './ButtonGroup';

export type ButtonType = 'primary' | 'ghost' | 'dashed' | 'danger';
export type ButtonShape = 'circle' | 'circle-outline';
export type ButtonSize = 'small' | 'large';

export interface ButtonProps {
    type?: ButtonType;
    htmlType?: string;
    icon?: string;
    shape?: ButtonShape;
    size?: ButtonSize;
    onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
    onMouseUp?: (e: SyntheticEvent<HTMLButtonElement>) => void;
    onMouseDown?: (e: SyntheticEvent<HTMLButtonElement>) => void;
    loading?:
        | boolean
        | {
              delay?: number,
          };
    disabled?: boolean;
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    ghost?: boolean;
}

export default class Button extends React.Component<ButtonProps, any> {
    static Group: typeof ButtonGroup;
    static __ANT_BUTTON: boolean;
}
