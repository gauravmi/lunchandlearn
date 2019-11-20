const {log, test} = require("./lib.js");
const {DIV} = require("./div.js");

//Problem: square the odd numbers
// Rules :
// 1. you can not use integers built
//2. can not use equals sign (no modifying state)

let ZERO = function(succ){
    return function(base) {
        return base;
    }
};

let ONE = function(succ) {
    return function(base) {
        return succ(base);
    }
};

let TWO = function(succ) {
    return function(base) {
        return succ(succ(base));
    }
};

let SUCC = function(n){
    return function(succ){
        return function(base){
            return succ(n(succ)(base));
        }
    }
};

let PAIR = function(a){
    return function (b) {
        return function (selector) {
            return selector(a)(b);
        }
    }
};

let FIRST = function(pair) {
    return pair(TRUE);
};

let SECOND = function(pair) {
    return pair(FALSE);
};


let ADD = function(a){
    return function (b) {
        return a(SUCC)(b);
    }
};

let MUL  = function(a) {
    return function(b) {
        return a(ADD(b))(ZERO);
    }
};


let TRUE = function(a){
    return function(b){
        return a;
    }
};

let FALSE = function(a){
    return function(b) {
        return b;
    }
};

let IF = function(bool) {
    return function(a) {
        return function (b) {
            return bool(a)(b);
        }
    }
};

let IS_Z = function(n){
    return n(FALSE)(TRUE);
};
let TRS = function(pair){
    return PAIR(SECOND(pair))(SUCC(SECOND(pair)));
};

let DECR = function(n){
    return FIRST(n(TRS)(PAIR(ZERO)(ZERO)));
};

let SUB = function(a){
    return function (b) {
        return b(DECR)(a);
    }
};
let AND = function(bool1){
    return function(bool2) {
        return bool1(bool2)(bool1);
    }
};

let LTE = function(a){
    return function(b){
        return IS_Z(SUB(a)(b))
    }
};

let EQUALS = function(a){
    return function(b){
        return AND(LTE(a)(b))(LTE(b)(a));
    }
};
let YY = function (f) {
    return (function (g) {
        return g(g);
    })(function (g) {
        return f(function (x) {
            return g(g)(x);
        });
    })
};
let eSquare = function(n){
    return (function (a) {
        return function (b) {
            return a((function (a) {
                return function (b) {
                    return a(function (n) {
                        return function (succ) {
                            return function (base) {
                                return succ(n(succ)(base));
                            }
                        }
                    })(b);
                }
            })(b))(function (succ) {
                return function (base) {
                    return base;
                }
            });
        }
    })(n)(n);
};

log(test((function (n) {
    return (function (a) {
        return function (b) {
            return a((function (a) {
                return function (b) {
                    return a(function (n) {
                        return function (succ) {
                            return function (base) {
                                return succ(n(succ)(base));
                            }
                        }
                    })(b);
                }
            })(b))(function (succ) {
                return function (base) {
                    return base;
                }
            });
        }
    })(n)(n);
})(function (succ) {
    return function (base) {
        return succ(succ(base));
    }
})));
