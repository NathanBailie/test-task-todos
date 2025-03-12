import { initTasks } from './mockedData';
import { Task } from '@/shared/types/task';

export function getTasksWithRandomChance(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
        const randomChance = Math.random();

        if (randomChance < 0.3) {
            reject(new Error('Failed to fetch tasks'));
        } else {
            resolve(initTasks);
        }
    });
}
