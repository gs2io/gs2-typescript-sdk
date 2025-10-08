"use strict";
/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var LimitCounter_1 = tslib_1.__importDefault(require("./LimitCounter"));
var LimitLimit = /** @class */ (function () {
    function LimitLimit() {
        this.limitName = null;
        this.counter = null;
    }
    LimitLimit.prototype.getLimitName = function () {
        return this.limitName;
    };
    LimitLimit.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    LimitLimit.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    LimitLimit.prototype.getCounter = function () {
        return this.counter;
    };
    LimitLimit.prototype.setCounter = function (counter) {
        this.counter = counter;
        return this;
    };
    LimitLimit.prototype.withCounter = function (counter) {
        this.counter = counter;
        return this;
    };
    LimitLimit.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitLimit()
            .withLimitName(data["limitName"])
            .withCounter(data.counter ?
            data.counter.map(function (item) {
                return LimitCounter_1.default.fromDict(item);
            }) : []);
    };
    LimitLimit.prototype.toDict = function () {
        return {
            "limitName": this.getLimitName(),
            "counter": this.getCounter() ?
                this.getCounter().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return LimitLimit;
}());
exports.default = LimitLimit;
//# sourceMappingURL=LimitLimit.js.map