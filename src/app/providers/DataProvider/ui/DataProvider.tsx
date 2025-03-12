import { fetchData } from '../model/services/fetchData';
import { initFilters } from '../model/lib/mockedData';
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { Filter, FilterNames, type Task } from '@/shared/types/main';
import { createTask } from '@/shared/utils/createTask';

interface DataContextType {
    initData: Task[] | undefined;
    isLoading: boolean;
    isError: boolean;
    errMessage: string;
    onChangeTaskStatus: (id: string) => void;
    onAddNewTask: (name: string) => void;
    filters: Filter[];
    onChangeFilter: (id: string, filterName: FilterNames) => void;
    activeFilter: FilterNames;
    setActiveFilter: (value: FilterNames) => void;
    onFilterTasks: (data: Task[]) => Task[];
    onClearCompleted: () => void;
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
    const [filters, setFilters] = useState<Filter[]>(initFilters);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [errMessage, setErrMessage] = useState<string>('');
    const [activeFilter, setActiveFilter] = useState<FilterNames>('All');

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

    function onChangeTaskStatus(id: string) {
        setInitData(prevData =>
            prevData?.map(task =>
                task.id === id ? { ...task, isDone: !task.isDone } : task,
            ),
        );
    }

    function onAddNewTask(name: string) {
        setInitData(prevData => [...(prevData ?? []), createTask(name)]);
    }

    function onChangeFilter(id: string, filterName: FilterNames) {
        setFilters(prevFilters =>
            prevFilters.map(item =>
                item.id !== id
                    ? { ...item, active: false }
                    : { ...item, active: true },
            ),
        );
        setActiveFilter(filterName);
    }

    function onFilterTasks(data: Task[]): Task[] {
        return data.filter(task => {
            if (activeFilter === 'Completed') return task.isDone;
            if (activeFilter === 'Active') return !task.isDone;
            return true;
        });
    }

    function onClearCompleted() {
        setInitData(prevTasks => prevTasks?.filter(task => !task.isDone));
    }

    const value = {
        initData,
        isLoading,
        isError,
        errMessage,
        onChangeTaskStatus,
        onAddNewTask,
        filters,
        onChangeFilter,
        activeFilter,
        setActiveFilter,
        onFilterTasks,
        onClearCompleted,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};
