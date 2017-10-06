import * as React from 'react';

export interface IconProps {
    type: string;
    className?: string;
    title?: string;
    onClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
    spin?: boolean;
    style?: Object;
}

export class Icon extends React.ComponentType<IconProps> {}
