import cls from './taskItem.module.scss';
import { Task } from '@/shared/types/task';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';

interface TaskItemProps extends Task {
    onChangeTaskStatus: (id: string) => void;
}

export const TaskItem = (props: TaskItemProps) => {
    const { name, id, isDone, onChangeTaskStatus } = props;

    return (
        <div className={cls.taskItem} key={id}>
            <Checkbox isDone={isDone} />
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
