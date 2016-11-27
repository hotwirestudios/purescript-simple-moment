/* global exports */
'use strict';

// module Data.Moment.Simple

var moment = require('moment');

exports.fromDate = function (a) {
  return moment(a);
};

exports.calendar = function (a) {
  return function () {
    return a.calendar();
  };
};

exports.fromEpoch_ = function (a) {
  return moment(a);
};

exports.fromString_ = function (str) {
  return function (format) {
    return function (strict) {
      return function () {
        return moment(str, format, strict);
      }
    };
  };
};

exports.fromUTCString_ = function (str) {
  return function (format) {
    return function (strict) {
      return moment.utc(str, format, strict);
    };
  };
};

exports.fromUTC_ = function (a) {
  return moment.utc(a);
};

exports.formatISO8601_ = function (m) {
  return m.format();
};

exports.longDateFormat = function (f) {
  return function () {
    return moment.localeData().longDateFormat(f);
  };
};

exports.format_ = function (s, m) {
  return m.format(s);
};

exports.setUTC_ = function (m) {
  return m.utc();
};

exports.toEpoch_ = function (m) {
  return m.valueOf();
};

exports.today = function () {
  return moment({ h: 0, m: 0, s: 0 });
};

exports.now = function () {
  return moment();
};
