describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {

        it('should return false if elements are not a number', function () {
            expect(answer.calculateArea('a', 5, 1, 'Success', 'Error')).toBe(false);
            expect(answer.calculateArea('7', 2, 9, 'Success', 'Error')).toBe(false);
            expect(answer.calculateArea(3, 'x', 45, 'Success', 'Error')).toBe(false);
            expect(answer.calculateArea(21, '', 17, 'Success', 'Error')).toBe(false);
            expect(answer.calculateArea('#', 34, 45, 'Success', 'Error')).toBe(false);
            expect(answer.calculateArea(5, 11, '-', 'Success', 'Error')).toBe(false);
            expect(answer.calculateArea('5', 'zz', 43, 'Success', 'Error')).toBe(false);
        });

        it('should return value and negative message', function () {
            expect(answer.calculateArea(9, 5, 4, 'Success', 'Error')).toEqual({area: -11, message: 'Error'});
            expect(answer.calculateArea(2, 2, 8, 'Success', 'Error')).toEqual({area: -14, message: 'Error'});
            expect(answer.calculateArea(13, 4, 7, 'Success', 'Error')).toEqual({area: -15, message: 'Error'});
            expect(answer.calculateArea(3, 5, 2, 'Success', 'Error')).toEqual({area: -1, message: 'Error'});
            expect(answer.calculateArea(4, 8, 3, 'Success', 'Error')).toEqual({area: -4, message: 'Error'});
            expect(answer.calculateArea(2, 11, 9, 'Success', 'Error')).toEqual({area: -7, message: 'Error'});
            expect(answer.calculateArea(3, 5, 6, 'Success', 'Error')).toEqual({area: -13, message: 'Error'});
        });

        it('should return correct value and positive message', function () {
            expect(answer.calculateArea(2, 5, 1, 'Success', 'Error')).toEqual({area: 3, message: 'Success'});
            expect(answer.calculateArea(12, 5, 2, 'Success', 'Error')).toEqual({area: 2, message: 'Success'});
            expect(answer.calculateArea(3, 15, 2, 'Success', 'Error')).toEqual({area: 9, message: 'Success'});
            expect(answer.calculateArea(6, 4, 1, 'Success', 'Error')).toEqual({area: 2, message: 'Success'});
            expect(answer.calculateArea(20, 3, 3, 'Success', 'Error')).toEqual({area: 11, message: 'Success'});
            expect(answer.calculateArea(18, 4, 2, 'Success', 'Error')).toEqual({area: 10, message: 'Success'});
        });

        it('should return 0 and message Big null', function () {
            expect(answer.calculateArea(0, 0, 5, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
            expect(answer.calculateArea(12, 12, 1, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
            expect(answer.calculateArea(7, 1, 7, 'Success', 'Error')).toEqual({area: 0, message: 'Big null'});
        });

        it('should return false if not enough elements', function () {
            expect(answer.calculateArea(5, 11)).toBe(false);
            expect(answer.calculateArea(1, 'Success')).toBe(false);
            expect(answer.calculateArea(3)).toBe(false);
            expect(answer.calculateArea('')).toBe(false);
            expect(answer.calculateArea()).toBe(false);
        });
    });
});