import * as React from 'react';

export interface AvatarProps {
    /** Shape of avatar, options:`circle`, `square` */
    shape?: 'circle' | 'square';
    /** Size of avatar, options:`large`, `small`, `default` */
    size?: 'large' | 'small' | 'default';
    /** Src of image avatar */
    src?: string;
    /** Type of the Icon to be used in avatar */
    icon?: string;
    style?: Object;
    prefixCls?: string;
    className?: string;
    children?: any;
}

export class Avatar extends React.Component<AvatarProps> {}
