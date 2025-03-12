/* eslint-disable jsx-a11y/label-has-associated-control */

import cls from './checkbox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface CheckboxProps {
    isDone: boolean;
}

export const Checkbox = (props: CheckboxProps) => {
    const { isDone } = props;

    return (
        <div
            className={classNames(cls.checkbox, {
                [cls.checkbox_active]: isDone,
            })}
            // onClick={() => onChangeTaskStatus(id)}
        >
            <input type="checkbox" checked={isDone} readOnly />
            <label />
        </div>
    );
};
