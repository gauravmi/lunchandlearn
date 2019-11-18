let SUCC = function(number){
    return function(successor) {
        return function(base){
            return successor(number(successor)(base));
        }
    }
};

let ONE = function(successor){
    return function(base){
        return successor(base);
    }
};

let ZERO = function(successor){
    return function(base){
        return base;
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

let IS_Z = function(n) {
    return n(FALSE)(TRUE);
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

let LTE = function(a){
    return function(b){
        return IS_Z(SUB(a)(b))
    }
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

const DIV = YY(DEVIDE_IMPROVER);

module.exports = {DIV};
