import { getTasksWithRandomChance } from '../lib/getTasksWithRandomChance';
import { Task } from '@/shared/types/main';

export const fetchData = async (): Promise<Task[]> => {
    try {
        const tasks = await getTasksWithRandomChance();
        return tasks;
    } catch (error) {
        console.error('Error while fetching tasks:', error);
        throw error;
    }
};
