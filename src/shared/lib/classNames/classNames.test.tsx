import { classNames } from './classNames';

describe('Tests for classNames', () => {
    test('One class only', () => {
        const result = 'oneClass';
        expect(classNames('oneClass')).toBe(result);
    });

    test('With true mods', () => {
        const mods = { active: true, hovered: true };
        const result = 'oneClass active hovered';
        expect(classNames('oneClass', mods, [])).toBe(result);
    });

    test('With false mods', () => {
        const mods = { active: false, hovered: true };
        const result = 'oneClass hovered';
        expect(classNames('oneClass', mods, [])).toBe(result);
    });

    test('With undefined mods', () => {
        const mods = { active: false, hovered: undefined };
        const result = 'oneClass';
        expect(classNames('oneClass', mods, [])).toBe(result);
    });

    test('With additional classes', () => {
        const addClasses = ['active'];
        const result = 'oneClass active';
        expect(classNames('oneClass', {}, addClasses)).toBe(result);
    });

    test('With all kind of classes and modes', () => {
        const mods = { active: true, hovered: false, linked: undefined };
        const addClasses = ['decorated'];
        const result = 'oneClass active decorated';
        expect(classNames('oneClass', mods, addClasses)).toBe(result);
    });
});
