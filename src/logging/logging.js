// based on this great tutorial on node.js logging:
// https://codesource.io/creating-a-logging-middleware-in-expressjs/
const express = require("express");
const fs = require("fs");
const chalk = require("chalk");

const getActualRequestDurationInMilliseconds = start => {
    const NS_PER_SEC = 1e9; // constant to convert to nanoseconds
    const NS_TO_MS = 1e6; // constant to convert to milliseconds
    const diff = process.hrtime(start);

    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

const logging = (req, res, next) => {
    const current_datetime = new Date();
    const formatted_date =
        current_datetime.getFullYear() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getDate() +
        " " +
        current_datetime.getHours() +
        ":" +
        current_datetime.getMinutes() +
        ":" +
        current_datetime.getSeconds();
    const method = req.method;
    const url = req.url;
    const status = res.statusCode;

    const start = process.hrtime();
    const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);

    const log = `[formatted_date];${method}:${url};${status};durationInMilliseconds.toLocaleString() + "ms"`;
    const logChalked = `[${chalk.blue(
      formatted_date
    )}] ${method}:${url} ${status} ${chalk.red(
      durationInMilliseconds.toLocaleString() + "ms"
    )}`;
    console.log(logChalked);
    fs.appendFile("logs.txt", log + "\n", err => {
        if (err) {
            console.log(err);
        }
    });
    next();
};
module.exports = logging;