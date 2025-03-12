import { fetchData } from '../model/services/fetchData';
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { type Task } from '@/shared/types/task';

interface DataContextType {
    initData: Task[] | undefined;
    isLoading: boolean;
    isError: boolean;
    errMessage: string;
    onChangeTaskStatus: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
    const [initData, setInitData] = useState<Task[] | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [errMessage, setErrMessage] = useState<string>('');

    useEffect(() => {
        setIsLoading(true);

        fetchData()
            .then(data => {
                setInitData(data);
            })
            .catch((err: Error) => {
                setIsError(true);
                setErrMessage(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const onChangeTaskStatus = (id: string) =>
        setInitData(prevData =>
            prevData?.map(task =>
                task.id === id ? { ...task, isDone: !task.isDone } : task,
            ),
        );

    const value = {
        initData,
        isLoading,
        isError,
        errMessage,
        onChangeTaskStatus,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};
