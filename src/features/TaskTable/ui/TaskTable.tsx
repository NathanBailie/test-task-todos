import cls from './taskTable.module.scss';
import { TaskItem } from '@/entities/TaskItem';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';

export const TaskTable = () => {
    const { initData } = useData();

    const items = initData?.map(({ name, id, isDone }) => (
        <TaskItem key={id} name={name} id={id} isDone={isDone} />
    ));

    return <div className={cls.taskTable}>{items}</div>;
};
