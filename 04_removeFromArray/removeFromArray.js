const removeFromArray = function(...args) {
    const array = args[0];
    const result = [];
    array.forEach((item) => {
        if(!args.includes(item)){
            result.push(item);
        }
    });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
