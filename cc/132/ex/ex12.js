function processData(num, callback) {
    return callback(num);
}
var result = processData(5, function (num) { return num + 2; });
console.log(result);
