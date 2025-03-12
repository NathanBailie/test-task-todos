import { Task } from '@/shared/types/task';
import { createTask } from '@/shared/utils/createTask';

export const initTasks: Task[] = [
    createTask('task1'),
    createTask('task2'),
    createTask('task3'),
];
