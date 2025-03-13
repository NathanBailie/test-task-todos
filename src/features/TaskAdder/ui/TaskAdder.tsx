import cls from './taskAdder.module.scss';
import { useState } from 'react';
import { useData } from '@/app/providers/DataProvider/ui/DataProvider';
import { onAddNewTask } from '@/app/providers/DataProvider';

export const TaskAdder = () => {
    const { setInitData } = useData();
    const [taskText, setTaskText] = useState<string>('');

    function taskAddHandler() {
        if (taskText.trim()) {
            onAddNewTask(taskText, setInitData);
            setTaskText('');
        }
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            taskAddHandler();
        }
    }

    return (
        <div className={cls.taskAdder}>
            <button
                type="button"
                className={cls.chevron}
                onClick={taskAddHandler}
                title="Add new task"
            >
                {}
            </button>
            <input
                type="text"
                placeholder="What needs to be done?"
                className={cls.input}
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};
