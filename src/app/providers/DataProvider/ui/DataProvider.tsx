import { fetchData } from '../model/services/fetchData';
import { initFilters } from '../model/lib/mockedData';
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { Filter, FilterNames, SetState, type Task } from '@/shared/types/main';

export interface DataContextType {
    initData: Task[] | undefined;
    isLoading: boolean;
    isError: boolean;
    errMessage: string;
    setInitData: SetState<Task[] | undefined>;
    setFilters: SetState<Filter[]>;
    filters: Filter[];
    activeFilter: FilterNames;
    setActiveFilter: SetState<FilterNames>;
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

    const value = {
        initData,
        isLoading,
        isError,
        errMessage,
        filters,
        activeFilter,
        setActiveFilter,
        setInitData,
        setFilters,
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    );
};
