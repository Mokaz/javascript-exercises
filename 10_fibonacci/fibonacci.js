const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    let last = 0;
    let curr = 1;
    let temp = 0;
    for (let i = 0; i < n-1; i++) {
        temp = last
        last = curr
        curr = curr + temp 
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
