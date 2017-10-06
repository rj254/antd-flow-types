import * as React from 'react';

export interface CardProps {
    prefixCls?: string;
    title?: React.Node;
    extra?: React.Node;
    bordered?: boolean;
    bodyStyle?: Object;
    style?: Object;
    loading?: boolean;
    noHovering?: boolean;
    children?: Object;
    id?: string;
    className?: string;
}

export class Card extends React.Component<CardProps> {
    // TODO: Add static grid
}
