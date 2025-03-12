/* eslint-disable jsx-a11y/label-has-associated-control */

import cls from './checkbox.module.scss';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { classNames } from '@/shared/lib/classNames/classNames';

interface CheckboxProps {
    isDone: boolean;
    id: string;
}

export const Checkbox = (props: CheckboxProps) => {
    const { isDone, id } = props;
    const { onChangeTaskStatus } = useData();

    return (
        <div
            className={classNames(cls.checkbox, {
                [cls.checkbox_active]: isDone,
            })}
            title={isDone ? 'Check as active' : 'Check as done'}
            onClick={() => onChangeTaskStatus(id)}
        >
            <input type="checkbox" checked={isDone} readOnly />
            <label />
        </div>
    );
};
