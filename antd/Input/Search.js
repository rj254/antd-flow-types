import * as React from 'react';
import type { InputProps } from './Input';

export interface SearchProps extends InputProps {
    onSearch?: (value: string) => any;
}

export default class Search extends React.Component<SearchProps> {}
