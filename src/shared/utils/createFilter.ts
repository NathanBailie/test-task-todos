import { Filter, FilterNames } from '../types/main';
import uuid from 'react-uuid';

export const createFilter = (value: FilterNames, active = false): Filter => ({
    value,
    id: uuid(),
    active,
});
