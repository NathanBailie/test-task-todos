import { Task } from '@/shared/types/task';
import { createTask } from '@/shared/utils/createTask';

export const initTasks: Task[] = [
    createTask('task1', true),
    createTask('task2', true),
    createTask('task3', true),
];
