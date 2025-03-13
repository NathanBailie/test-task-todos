import cls from './taskItem.module.scss';
import { Task } from '@/shared/types/main';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import {
    onChangeIsOpenStatus,
    onChangeTaskTextById,
} from '@/app/providers/DataProvider';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';

interface TaskItemProps extends Task {}

export const TaskItem = (props: TaskItemProps) => {
    const { name, id, isDone, isOpen } = props;
    const { setInitData } = useData();

    return (
        <div className={cls.taskItem} key={id}>
            <Checkbox isDone={isDone} id={id} />
            {!isOpen ? (
                <Text
                    id={id}
                    text={name}
                    isDone={isDone}
                    onClickCallback={() =>
                        onChangeIsOpenStatus(id, setInitData)
                    }
                />
            ) : (
                <Input
                    id={id}
                    value={name}
                    setInitData={setInitData}
                    onBLurCallback={onChangeTaskTextById}
                />
            )}
        </div>
    );
};
