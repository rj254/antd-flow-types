import * as React from 'react';
import type { AbstractInputProps } from './Input';

export interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}

export interface TextAreaProps extends AbstractInputProps {
    autosize?: boolean | AutoSizeType;
    onPressEnter?: (e: SyntheticEvent<HTMLInputElement>) => void;
}

export type HTMLTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default class TextArea extends React.Component<TextAreaProps & HTMLTextareaProps> {}
