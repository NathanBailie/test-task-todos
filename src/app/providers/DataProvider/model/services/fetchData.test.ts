import { fetchData } from '../services/fetchData';
import { getTasksWithRandomChance } from '../lib/getTasksWithRandomChance';
import { initTasks } from '../lib/mockedData';

jest.mock('../lib/getTasksWithRandomChance');

describe('Tests for fetchData', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should return an array of tasks on successful execution', async () => {
        (getTasksWithRandomChance as jest.Mock).mockResolvedValue(initTasks);

        const result = await fetchData();

        expect(getTasksWithRandomChance).toHaveBeenCalledTimes(1);
        expect(result).toEqual(initTasks);
    });

    test('should throw an error on failed request', async () => {
        const errorMessage = 'Failed to fetch tasks';
        (getTasksWithRandomChance as jest.Mock).mockRejectedValue(
            new Error(errorMessage),
        );

        await expect(fetchData()).rejects.toThrow(errorMessage);
        expect(getTasksWithRandomChance).toHaveBeenCalledTimes(1);
    });
});
