import { Filter, FilterNames, SetState, Task } from '@/shared/types/main';
import { createTask } from '@/shared/utils/createTask/createTask';

export const onChangeTaskStatus = (
    id: string,
    setInitData: SetState<Task[] | undefined>,
) =>
    setInitData(prevData =>
        prevData?.map(task =>
            task.id === id ? { ...task, isDone: !task.isDone } : task,
        ),
    );

export const onAddNewTask = (
    name: string,
    setInitData: SetState<Task[] | undefined>,
) => setInitData(prevData => [...(prevData ?? []), createTask(name)]);

export const onChangeFilter = (
    id: string,
    filterName: FilterNames,
    setFilters: SetState<Filter[]>,
    setActiveFilter: SetState<FilterNames>,
) => {
    setFilters(prevFilters =>
        prevFilters.map(item =>
            item.id !== id
                ? { ...item, active: false }
                : { ...item, active: true },
        ),
    );
    setActiveFilter(filterName);
};

export const onFilterTasks = (
    data: Task[],
    activeFilter: FilterNames,
): Task[] => {
    if (activeFilter === 'Completed') return data.filter(task => task.isDone);
    if (activeFilter === 'Active') return data.filter(task => !task.isDone);
    return data;
};

export const onChangeIsOpenStatus = (
    id: string,
    setInitData: SetState<Task[] | undefined>,
) =>
    setInitData(prevData =>
        prevData?.map(item =>
            item.id !== id
                ? { ...item, isOpen: false }
                : { ...item, isOpen: !item.isOpen },
        ),
    );

export const onChangeTaskTextById = (
    id: string,
    text: string,
    setInitData: SetState<Task[] | undefined>,
) =>
    setInitData(prevData =>
        prevData?.map(item =>
            item.id !== id
                ? { ...item, isOpen: false }
                : { ...item, isOpen: !item.isOpen, name: text },
        ),
    );

export const onClearCompleted = (setInitData: SetState<Task[] | undefined>) =>
    setInitData(prevTasks => prevTasks?.filter(task => !task.isDone));
