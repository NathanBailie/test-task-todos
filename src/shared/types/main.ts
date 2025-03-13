export interface Task {
    name: string;
    id: string;
    isDone: boolean;
    isOpen: boolean;
}

export type FilterNames = 'All' | 'Active' | 'Completed';

export interface Filter {
    value: FilterNames;
    id: string;
    active: boolean;
}

export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
