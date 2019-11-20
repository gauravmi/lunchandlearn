const {log, test} = require("./lib.js");
const {DIV} = require("./div.js");

// square the odd numbers
// Rules :
// 1. You can not use built in integers
// 2. You can not use = operator
// 3. function

// 0 s0 ss0 sss0 ssss0
// let successor = ????;

let ZERO = function(successor){
    return function(base){
        return base;
    }
};

let ONE = function(successor){
    return function(base){
        return successor(base);
    }
};

let TWO = function(successor){
    return function(base){
        return successor(successor(base));
    }
};

let THREE = function(successor){
    return function(base){
        return successor(successor(successor(base)));
    }
};

let SUCC = function(number){
    return function(successor) {
        return function(base){
            return successor(number(successor)(base));
        }
    }
};

let ADD  = function(a) {
    return function(b) {
        return a(SUCC)(b);
    }
};

let MULTIPLY = function(a){
    return function(b){
        return a(ADD(b))(ZERO);
    }
};
let TRUE = function(a){
    return function(b){
        return a;
    }
};
let FALSE = function(a){
    return function(b){
        return b;
    }
};

let IF = function(bool){
    return function(a) {
        return function(b) {
            return bool(a)(b);
        }
    }
};

let PAIR = function(h){
    return function(t){
        return function(selector){
            return selector(h)(t);
        }
    }
};

let TRS = function(pair){
    return PAIR(TAIL(pair))(SUCC(TAIL(pair)));
};

let HEAD = function(pair){
    return pair(TRUE);
};

let TAIL = function(pair){
    return pair(FALSE);
};

let DECR = function(n){
    return HEAD(n(TRS)(PAIR(ZERO)(ZERO)));
};

let SUB = function(a){
    return function(b){
        return b(DECR)(a);
    }
};

let ISZERO = function(n) {
    return n(FALSE)(TRUE);
};

let LTE = function(a){
    return function(b){
        return ISZERO(SUB(a)(b))
    }
};

let AND = function(bool1){
    return function(bool2) {
        return bool1(bool2)(bool1);
    }
};

let EQUALS = function(a){
    return function(b){
        return AND(LTE(a)(b))(LTE(b)(a));
    }
};

let eSquare = function(n){
    return IF(EQUALS(MULTIPLY(DIV(n)(TWO))(TWO))(n))
    (n)
    (MULTIPLY(n)(n));
};

let DEVIDE_IMPROVER = function (improver) {
    return function (n) {
        return function (d) {
            return IF(LTE(n)(d))(ONE)
            (function (x) {
                return SUCC(
                    improver(function (x) {
                        return SUB(n)(d)(x)
                    })(d))(x)
            })
        }
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

const d = YY(DEVIDE_IMPROVER);

log(test(eSquare(ONE)));