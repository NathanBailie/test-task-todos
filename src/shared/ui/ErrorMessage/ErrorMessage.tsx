import cls from './errorMessage.module.scss';

interface ErrorMessageProps {
    errorMessage: string;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
    const { errorMessage } = props;
    console.log(errorMessage);

    return (
        <div className={cls.errorMessage}>
            <h2>Something went wrong!</h2>
            <p>Reload the page please!</p>
        </div>
    );
};
