/* eslint-disable jsx-a11y/label-has-associated-control */
import cls from './taskItem.module.scss';
import { Task } from '@/shared/types/task';
import { classNames } from '@/shared/lib/classNames/classNames';

interface TaskItemProps extends Task {
    onChangeTaskStatus: (id: string) => void;
}

export const TaskItem = (props: TaskItemProps) => {
    const { name, id, isDone, onChangeTaskStatus } = props;

    return (
        <div className={cls.taskItem} key={id}>
            <div
                className={classNames(cls.checkbox, {
                    [cls.checkbox_active]: isDone,
                })}
                onClick={() => onChangeTaskStatus(id)}
            >
                <input type="checkbox" checked={isDone} readOnly />
                <label />
            </div>
            <span
                className={classNames(cls.text, {
                    [cls.text_done]: isDone,
                })}
            >
                {name}
            </span>
        </div>
    );
};
