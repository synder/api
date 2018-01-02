"use strict";
/**
 * @author synder
 * @date 16/1/10
 * @desc
 */
module.exports = {
    redis: {
        xcb: {
            host: '',
            port: '',
            user: '',
            pass: '',
        },
        core: {
            host: '',
            port: '',
            user: '',
            pass: '',
        },
    },
    mongodb: {
        xcb: {
            uri: '',
            user: '',
            pass: '',
        },
        core: {
            uri: 'mongodb://127.0.0.1:27017/core',
            user: '',
            pass: '',
        },
    },
    mysql: {
        xcb: {
            host: '',
            port: '',
            user: '',
            pass: '',
        },
        core: {
            uri: '',
            user: '',
            pass: '',
        },
    },
};
