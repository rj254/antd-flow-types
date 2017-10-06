/* @flow */

import { Menu } from './Menu';
import type {
    MenuProps as IMenuProps,
    ClickParam as IClickParam,
    SelectParam as ISelectParam,
} from './Menu';

import { Spin } from './Spin';
import type { SpinProps as ISpinProps } from './Spin';

import { Col } from './Col';
import type { ColProps as IColProps } from './Col';

import { Row } from './Row';
import type { RowProps as IRowProps } from './Row';

import { Card } from './Card';
import type { CardProps as ICardProps } from './Card';

import { Button } from './Button/Button';
import type { ButtonProps as IButtonProps } from './Button/Button';

import { Input } from './Input/Input';
import type { InputProps as IInputProps } from './Input/Input';

import { Icon } from './Icon';
import type { IconProps as IIconProps } from './Icon';

import { Form } from './Form/Form';
import type { FormProps as IFormProps } from './Form/Form';

declare module 'antd' {
    declare export { Menu };
    declare type MenuProps = IMenuProps;
    declare type ClickParam = IClickParam;
    declare type SelectParam = ISelectParam;

    declare export { Spin };
    declare type SpinProps = ISpinProps;

    declare export { Col };
    declare type ColProps = IColProps;

    declare export { Row };
    declare type RowProps = IRowProps;

    declare export { Card };
    declare type CardProps = ICardProps;

    declare export { Button };
    declare type ButtonProps = IButtonProps;

    declare export { Input };
    declare type InputProps = IInputProps;

    declare export { Icon };
    declare type IconProps = IIconProps;

    declare export { Form };
    declare type FormProps = IFormProps;
}
