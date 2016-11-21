'use strict';

// module Data.Moment.Simple.Types

exports.isSame = function (m1) {
    return function (m2) {
        return m1.isSame(m2);
    };
};

exports.valueOf = function (m1) {
    return m1.valueOf();
};
