/* @flow */

import { Menu, MenuProps, ClickParam, SelectParam } from './Menu';
import { Spin, SpinProps } from './Spin';
import { Col, ColProps } from './Col';
import { Row, RowProps } from './Row';
import { Card, CardProps } from './Card';
import { Button, ButtonProps } from './Button/Button';
import { Input, InputProps } from './Input/Input';
import { Icon, IconProps } from './Icon';
import { Form, FormProps } from './Form';

declare module 'antd' {
    declare export { Menu, MenuProps, ClickParam, SelectParam };
    declare export { Spin, SpinProps };
    declare export { Col, ColProps };
    declare export { Row, RowProps };
    declare export { Card, CardProps };
    declare export { Button, ButtonProps };
    declare export { Input, InputProps };
    declare export { Icon, IconProps };
    declare export { Form, FormProps };
}
