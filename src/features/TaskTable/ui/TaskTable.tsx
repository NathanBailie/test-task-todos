import cls from './taskTable.module.scss';
import { TaskItem } from '@/entities/TaskItem';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { Task } from '@/shared/types/main';
import { onFilterTasks } from '@/app/providers/DataProvider';

export const TaskTable = () => {
    const { initData, activeFilter } = useData();
    if (initData === undefined) return null;

    const filteredData: Task[] = onFilterTasks(initData, activeFilter);

    const items = filteredData.map(({ name, id, isDone, isOpen }) => (
        <TaskItem
            key={id}
            name={name}
            id={id}
            isDone={isDone}
            isOpen={isOpen}
        />
    ));

    return <div className={cls.taskTable}>{items}</div>;
};
