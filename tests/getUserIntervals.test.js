const getUserIntervals = require('../src/js/getUserIntervals')
const getInterval = require('../src/js/getInterval')

test('return chord name from chord notes', () => {
    expect(getUserIntervals(['E', 'G#', 'B'], _alphabet))
        .toEqual([5, 4])
})