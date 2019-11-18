const log = function(arg){
    console.log(arg);
};

const incr = function (n) {
    return n+1;
};

const test = function(number){
    return number(incr)(0);
};


module.exports = {log, test};