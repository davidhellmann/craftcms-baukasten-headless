"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const constants_1 = require("../constants");
async function writeDataToDisk(data, name) {
    await fs_1.promises.writeFile(`${constants_1.dataDirectory}/${name}.json`, data, 'utf8');
}
exports.default = writeDataToDisk;
