import type { Filter, Task } from '@/shared/types/main';
import { createFilter } from '@/shared/utils/createFilter/createFilter';
import { createTask } from '@/shared/utils/createTask/createTask';

export const initTasks: Task[] = [
    createTask('task1'),
    createTask('task2'),
    createTask('task3'),
];

export const initFilters: Filter[] = [
    createFilter('All', true),
    createFilter('Active'),
    createFilter('Completed'),
];
