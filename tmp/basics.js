// a. Anonymous Function
// b. Currying
// c. Composition & higher order functions

let decr = function(n) {
    return n -1;
};

let compose = function(f1, f2){
    return function(a){
        return function(b) {
            return f2(f1(a)(b));
        }
    }
};

let add = function(a) {
    return function(b){
        return a+b;
    };
};