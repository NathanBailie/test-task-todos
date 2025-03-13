import cls from './input.module.scss';
import { useEffect, useRef, useState } from 'react';
import { SetState, Task } from '@/shared/types/main';

export interface InputProps {
    id: string;
    value: string;
    onBLurCallback: (...args: any[]) => void;
    type?: string;
    setInitData: SetState<Task[] | undefined>;
}

export const Input = (props: InputProps) => {
    const { id, value, onBLurCallback, type = 'text', setInitData } = props;
    const [text, setText] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setText(value);
        inputRef.current?.focus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleKeyDown(
        e: React.KeyboardEvent<HTMLInputElement>,
        id: string,
    ) {
        if (e.key === 'Enter') {
            onBLurCallback(id, text, setInitData);
        }
    }

    return (
        <input
            ref={inputRef}
            key={id}
            type={type}
            value={text}
            onBlur={() => onBLurCallback(id, text, setInitData)}
            onKeyDown={e => handleKeyDown(e, id)}
            className={cls.input}
            onChange={e => setText(e.target.value)}
        />
    );
};
