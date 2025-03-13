import cls from './Text.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

export interface TextProps {
    id: string;
    text: string;
    isDone: boolean;
    onClickCallback: (...args: any[]) => void;
}

export const Text = (props: TextProps) => {
    const { id, text, isDone, onClickCallback } = props;

    const mods: Mods = {
        [cls.text_done]: isDone,
    };

    return (
        <span
            id={id}
            className={classNames(cls.text, mods, [])}
            onClick={() => onClickCallback()}
        >
            {text}
        </span>
    );
};
