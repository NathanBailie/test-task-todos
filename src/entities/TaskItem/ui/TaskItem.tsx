import cls from './taskItem.module.scss';
import { Task } from '@/shared/types/main';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { Input } from '@/shared/ui/Input';

interface TaskItemProps extends Task {}

export const TaskItem = (props: TaskItemProps) => {
    const { onChangeIsOpenStatusAndValue } = useData();
    const { name, id, isDone, isOpen } = props;

    return (
        <div className={cls.taskItem} key={id}>
            <Checkbox isDone={isDone} id={id} />
            {!isOpen ? (
                <span
                    className={classNames(cls.text, {
                        [cls.text_done]: isDone,
                    })}
                    onClick={() => onChangeIsOpenStatusAndValue(id, name, true)}
                >
                    {name}
                </span>
            ) : (
                <Input
                    id={id}
                    value={name}
                    onBLurCallback={onChangeIsOpenStatusAndValue}
                />
            )}
        </div>
    );
};
