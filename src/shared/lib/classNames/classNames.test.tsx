import { classNames } from './classNames';

describe('classNames', () => {
    it('should return base class when only base class is provided', () => {
        const result = 'oneClass';
        expect(classNames('oneClass')).toBe(result);
    });

    it('should apply true mods', () => {
        const mods = { active: true, hovered: true };
        const result = 'oneClass active hovered';
        expect(classNames('oneClass', mods, [])).toBe(result);
    });

    it('should ignore false mods', () => {
        const mods = { active: false, hovered: true };
        const result = 'oneClass hovered';
        expect(classNames('oneClass', mods, [])).toBe(result);
    });

    it('should ignore undefined mods', () => {
        const mods = { active: false, hovered: undefined };
        const result = 'oneClass';
        expect(classNames('oneClass', mods, [])).toBe(result);
    });

    it('should apply additional classes', () => {
        const addClasses = ['active'];
        const result = 'oneClass active';
        expect(classNames('oneClass', {}, addClasses)).toBe(result);
    });

    it('should combine base class, true mods, and additional classes', () => {
        const mods = { active: true, hovered: false, linked: undefined };
        const addClasses = ['decorated'];
        const result = 'oneClass active decorated';
        expect(classNames('oneClass', mods, addClasses)).toBe(result);
    });
});
