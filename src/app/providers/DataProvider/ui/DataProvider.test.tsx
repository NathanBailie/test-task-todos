import { onChangeTaskStatus } from '../model/handlers/handlers';
import { testMockedData } from '../model/lib/mockedData';
import { Task } from '@/shared/types/main';

describe('onChangeTaskStatus function', () => {
    let setInitData: jest.Mock<
        React.Dispatch<React.SetStateAction<Task[] | undefined>>
    >;
    let initData: Task[];

    beforeEach(() => {
        setInitData = jest.fn();
        initData = testMockedData;
    });

    test('should change isDone status for task with id "2"', () => {
        onChangeTaskStatus('2', setInitData);

        expect(setInitData).toHaveBeenCalledWith(expect.any(Function));

        const updater = setInitData.mock.calls[0][0];
        const updatedData = updater(initData) as Task[]; // Явно указываем, что это Task[]

        const updatedTask = updatedData.find((task: Task) => task.id === '2'); // Явно указываем тип Task
        expect(updatedTask).toBeDefined();
        expect(updatedTask?.isDone).toBe(true);
    });
});
