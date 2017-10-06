import * as React from 'react';
export interface GroupProps {
    className?: string;
    size?: 'large' | 'small' | 'default';
    children?: any;
    style?: Object;
    prefixCls?: string;
    compact?: boolean;
}

export class Group extends React.ComponentType<GroupProps> {}
