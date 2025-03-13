import { createFilter } from './createFilter';
import { FilterNames } from '../../types/main';

describe('Tests for createFilter', () => {
    test('Should create a filter with correct values', () => {
        const value: FilterNames = 'All';
        const active: boolean = true;
        const filter = createFilter(value, active);

        expect(filter.value).toBe(value);
        expect(filter.active).toBe(active);
        expect(filter.id).toBeDefined();
    });

    test('Should create a filter with default active value', () => {
        const value: FilterNames = 'Active';
        const filter = createFilter(value);

        expect(filter.value).toBe(value);
        expect(filter.active).toBe(false);
        expect(filter.id).toBeDefined();
    });
});
