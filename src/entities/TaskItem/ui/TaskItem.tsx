import cls from './taskItem.module.scss';
import { Task } from '@/shared/types/main';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';

interface TaskItemProps extends Task {}

export const TaskItem = (props: TaskItemProps) => {
    const { onChangeIsOpenStatus, onChangeTaskTextById } = useData();
    const { name, id, isDone, isOpen } = props;

    return (
        <div className={cls.taskItem} key={id}>
            <Checkbox isDone={isDone} id={id} />
            {!isOpen ? (
                <Text
                    id={id}
                    text={name}
                    isDone={isDone}
                    onClickCallback={onChangeIsOpenStatus}
                />
            ) : (
                <Input
                    id={id}
                    value={name}
                    onBLurCallback={onChangeTaskTextById}
                />
            )}
        </div>
    );
};
