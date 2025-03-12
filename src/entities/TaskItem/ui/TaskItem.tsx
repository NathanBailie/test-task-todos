import cls from './taskItem.module.scss';
import { Task } from '@/shared/types/task';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';

interface TaskItemProps extends Task {}

export const TaskItem = (props: TaskItemProps) => {
    const { name, id, isDone } = props;

    return (
        <div className={cls.taskItem} key={id}>
            <Checkbox isDone={isDone} id={id} />
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
