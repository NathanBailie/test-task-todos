export interface Task {
    name: string;
    id: string;
    isDone: boolean;
}

export type FilterNames = 'All' | 'Active' | 'Completed';

export interface Filter {
    value: FilterNames;
    id: string;
    active: boolean;
}
