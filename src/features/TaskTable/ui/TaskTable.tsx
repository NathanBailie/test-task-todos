import cls from './taskTable.module.scss';
import { TaskItem } from '@/entities/TaskItem';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { Task } from '@/shared/types/main';

export const TaskTable = () => {
    const { initData, onFilterTasks } = useData();
    if (initData === undefined) return null;

    const filteredData: Task[] = onFilterTasks(initData);

    const items = filteredData.map(({ name, id, isDone }) => (
        <TaskItem key={id} name={name} id={id} isDone={isDone} />
    ));

    return <div className={cls.taskTable}>{items}</div>;
};
