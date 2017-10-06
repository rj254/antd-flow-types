import * as React from 'react';

import Group from './Group';
import Search from './Search';
import TextArea from './TextArea';

export interface AbstractInputProps {
    prefixCls?: string;
    className?: string;
    defaultValue?: any;
    value?: any;
    style?: Object;
}

export interface InputProps extends AbstractInputProps {
    placeholder?: string;
    type?: string;
    id?: number | string;
    name?: string;
    size?: 'large' | 'default' | 'small';
    maxLength?: string;
    disabled?: boolean;
    readOnly?: boolean;
    addonBefore?: React.Node;
    addonAfter?: React.Node;
    onPressEnter?: (e: SyntheticEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
    onClick?: (e: SyntheticEvent<HTMLInputElement>) => void;
    onFocus?: (e: SyntheticEvent<HTMLInputElement>) => void;
    onBlur?: (e: SyntheticEvent<HTMLInputElement>) => void;
    autoComplete?: string;
    prefix?: React.Node;
    suffix?: React.Node;
    spellCheck?: boolean;
    autoFocus?: boolean;
}
export default class Input extends React.Component<InputProps> {
    static Group: typeof Group;
    static Search: typeof Search;
    static TextArea: typeof TextArea;
}
