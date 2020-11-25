const main = (array, sum) => {
    const pairs = [];

    for (let key in array) {
        const item = array[key],
            expectedItem = sum - item;
        delete array[key];

        for (let key in array) {
            if (array[key] === expectedItem) {
                pairs.push([item, expectedItem]);
                delete array[key];
                break;
            }
        }
    }

    return pairs;
};

module.exports = main;
