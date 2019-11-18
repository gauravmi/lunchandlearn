const {log, test, DIV} = require("../lib.js");

// Happy program : square the even numbers
// # Purely functional world
// - no data types - done
// - no numbers - done
// - no operators - few of them
// - no conditionals and loops
// - all we have is function- got it
// - no assignments
// - one argument per function
// What is successor function ?

// 1. lambda & named functions vs assignment
// 2. function composition
// 3. currying & higher order functions
// 4. refactoring



// What is successor function ?



log(test((function (n) {
    return (function (bool) {
        return function (farg) {
            return function (sarg) {
                return bool(farg)(sarg);
            }
        }
    })((function (a) {
        return function (b) {
            return (function (first) {
                return function (second) {
                    return first(second)(first)
                }
            })((function (a) {
                return function (b) {
                    return (function (n) {
                        return n(function (f) {
                            return function (s) {
                                return s;
                            }
                        })(function (f) {
                            return function (s) {
                                return f;
                            }
                        });
                    })((function (a) {
                        return function (b) {
                            return b(function (n) {
                                return n(function (pair) {
                                    return (function (a) {
                                        return function (b) {
                                            return function (selector) {
                                                return selector(a)(b);
                                            }
                                        }
                                    })(pair(function (a) {
                                        return function (b) {
                                            return b;
                                        }
                                    }))(function (succ) {
                                        return function (init) {
                                            return succ(pair(function (a) {
                                                return function (b) {
                                                    return b;
                                                }
                                            })(succ)(init));
                                        }
                                    });
                                })((function (a) {
                                    return function (b) {
                                        return function (selector) {
                                            return selector(a)(b);
                                        }
                                    }
                                })(function (succ) {
                                    return function (init) {
                                        return init;
                                    };
                                })(function (succ) {
                                    return function (init) {
                                        return init;
                                    };
                                }))(function (a) {
                                    return function (b) {
                                        return a;
                                    }
                                });
                            })(a);
                        }
                    })(a)(b));
                }
            })(a)(b))((function (a) {
                return function (b) {
                    return (function (n) {
                        return n(function (f) {
                            return function (s) {
                                return s;
                            }
                        })(function (f) {
                            return function (s) {
                                return f;
                            }
                        });
                    })((function (a) {
                        return function (b) {
                            return b(function (n) {
                                return n(function (pair) {
                                    return (function (a) {
                                        return function (b) {
                                            return function (selector) {
                                                return selector(a)(b);
                                            }
                                        }
                                    })(pair(function (a) {
                                        return function (b) {
                                            return b;
                                        }
                                    }))(function (succ) {
                                        return function (init) {
                                            return succ(pair(function (a) {
                                                return function (b) {
                                                    return b;
                                                }
                                            })(succ)(init));
                                        }
                                    });
                                })((function (a) {
                                    return function (b) {
                                        return function (selector) {
                                            return selector(a)(b);
                                        }
                                    }
                                })(function (succ) {
                                    return function (init) {
                                        return init;
                                    };
                                })(function (succ) {
                                    return function (init) {
                                        return init;
                                    };
                                }))(function (a) {
                                    return function (b) {
                                        return a;
                                    }
                                });
                            })(a);
                        }
                    })(a)(b));
                }
            })(b)(a));
        }
    })((function (b) {
        return (DIV)(n)(function (succ) {
            return function (init) {
                return succ(succ(init));
            }
        })((function (a) {
            return function (b) {
                return a(function (number) {
                    return function (succ) {
                        return function (init) {
                            return succ(number(succ)(init));
                        }
                    }
                })(b);
            }
        })(b))(function (succ) {
            return function (init) {
                return init;
            };
        });
    })(function (succ) {
        return function (init) {
            return succ(succ(init));
        }
    }))(n))(n)
    ((function (b) {
        return n((function (a) {
            return function (b) {
                return a(function (number) {
                    return function (succ) {
                        return function (init) {
                            return succ(number(succ)(init));
                        }
                    }
                })(b);
            }
        })(b))(function (succ) {
            return function (init) {
                return init;
            };
        });
    })(n))
})((function (b) {
    return (function (succ) {
        return function (init) {
            return succ(succ(init));
        }
    })(function (number) {
        return function (succ) {
            return function (init) {
                return succ(number(succ)(init));
            }
        }
    })(b);
})(function (succ) {
    return function (init) {
        return succ(init);
    };
}))));