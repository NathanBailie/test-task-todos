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

export const testMockedData: Task[] = [
    { name: 'Task1', id: '1', isDone: false, isOpen: false },
    { name: 'Task2', id: '2', isDone: false, isOpen: false },
    { name: 'Task3', id: '3', isDone: false, isOpen: false },
];

export const testMockedFilters: Filter[] = [
    { value: 'All', id: '1', active: true },
    { value: 'Active', id: '3', active: false },
    { value: 'Completed', id: '2', active: false },
];
