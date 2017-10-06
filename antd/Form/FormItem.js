/// <reference types="react" />
import * as React from 'react';
import { ColProps } from '../Col';
import { WrappedFormUtils } from './Form';

export interface FormItemProps {
    prefixCls?: string;
    id?: string;
    label?: React.Node;
    labelCol?: ColProps;
    wrapperCol?: ColProps;
    help?: React.Node;
    extra?: React.Node;
    validateStatus?: 'success' | 'warning' | 'error' | 'validating';
    hasFeedback?: boolean;
    className?: string;
    required?: boolean;
    style?: Object;
    colon?: boolean;
}
export interface FormItemContext {
    form: WrappedFormUtils;
    vertical: boolean;
}

export default class FormItem extends React.Component<FormItemProps> {}
