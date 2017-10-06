/* @flow */

import * as React from 'react';

export interface SpinProps {
    prefixCls?: string;
    className?: string;
    spinning?: boolean;
    size?: 'small' | 'default' | 'large';
    tip?: string;
    delay?: number;
    wrapperClassName?: string;
}
export class Spin extends React.Component<SpinProps> {}
