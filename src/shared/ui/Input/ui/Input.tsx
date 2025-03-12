import cls from './input.module.scss';
import { useEffect, useRef, useState } from 'react';

interface InputProps {
    id: string;
    value: string;
    onBLurCallback: (...args: any[]) => void;
    type?: string;
}

export const Input = (props: InputProps) => {
    const { id, value, onBLurCallback, type = 'text' } = props;
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
            onBLurCallback(id, text);
        }
    }

    return (
        <input
            ref={inputRef}
            key={id}
            type="text"
            value={text}
            onBlur={() => onBLurCallback(id, text)}
            onKeyDown={e => handleKeyDown(e, id)}
            className={cls.input}
            onChange={e => setText(e.target.value)}
        />
    );
};
