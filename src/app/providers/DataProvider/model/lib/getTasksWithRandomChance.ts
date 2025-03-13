import { initTasks } from './mockedData';
import { Task } from '@/shared/types/main';

export function getTasksWithRandomChance(): Promise<Task[]> {
    return new Promise((resolve, reject) => {
        const randomChance = Math.random();

        setTimeout(() => {
            if (randomChance < 0.05) {
                reject(new Error('Failed to fetch tasks'));
            } else {
                resolve(initTasks);
            }
        }, 500);
    });
}
