/* eslint-disable jsx-a11y/label-has-associated-control */
import cls from './taskTable.module.scss';
import { useState } from 'react';
import uuid from 'react-uuid';
import { classNames } from '@/shared/lib/classNames/classNames';

interface Task {
    name: string;
    id: string;
    isDone: boolean;
}

const createTask = (name: string, isDone = false): Task => ({
    name,
    id: uuid(),
    isDone,
});

const initialTasks: Task[] = [
    createTask('task1', true),
    createTask('task2', true),
    createTask('task3', true),
];

export const TaskTable = () => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const onChangeTaskStatus = (id: string) =>
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, isDone: !task.isDone } : task,
            ),
        );

    return (
        <div className={cls.taskTable}>
            {tasks.map(({ name, id, isDone }) => (
                <div className={cls.tableItem} key={id}>
                    <div
                        className={classNames(cls.checkbox, {
                            [cls.checkbox_active]: isDone,
                        })}
                        onClick={() => onChangeTaskStatus(id)}
                    >
                        <input type="checkbox" checked={isDone} readOnly />
                        <label />
                    </div>
                    <span
                        className={classNames(cls.text, {
                            [cls.text_done]: isDone,
                        })}
                    >
                        {name}
                    </span>
                </div>
            ))}
        </div>
    );
};
