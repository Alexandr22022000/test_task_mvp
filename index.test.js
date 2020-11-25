const main = require('./index');

describe('main function', () => {
    it('case 1', () => {
        const result = main([22, 3, 5, 0, 2, 2], 5);
        expect(result).toEqual([[3, 2], [5, 0]]);
    });

    it('case 2', () => {
        const result = main([-5, 33, 2, 2, 3, 5, 0, 10, 3], 5);
        expect(result).toEqual([[-5, 10], [2, 3], [2, 3], [5, 0]]);
    });

    it('case 3', () => {
        const result = main([5, 5, 5, 0, 0, 0, 5], 5);
        expect(result).toEqual([[5, 0], [5, 0], [5, 0]]);
    });

    it('case 4', () => {
        const result = main([3, 3, 6, 0], 6);
        expect(result).toEqual([[3, 3], [6, 0]]);
    });
});
