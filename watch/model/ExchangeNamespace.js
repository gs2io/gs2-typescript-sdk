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
var ExchangeRate_1 = tslib_1.__importDefault(require("./ExchangeRate"));
var ExchangeNamespace = /** @class */ (function () {
    function ExchangeNamespace() {
        this.namespaceName = null;
        this.rate = null;
    }
    ExchangeNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ExchangeNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExchangeNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExchangeNamespace.prototype.getRate = function () {
        return this.rate;
    };
    ExchangeNamespace.prototype.setRate = function (rate) {
        this.rate = rate;
        return this;
    };
    ExchangeNamespace.prototype.withRate = function (rate) {
        this.rate = rate;
        return this;
    };
    ExchangeNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExchangeNamespace()
            .withNamespaceName(data["namespaceName"])
            .withRate(data.rate ?
            data.rate.map(function (item) {
                return ExchangeRate_1.default.fromDict(item);
            }) : []);
    };
    ExchangeNamespace.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rate": this.getRate() ?
                this.getRate().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ExchangeNamespace;
}());
exports.default = ExchangeNamespace;
//# sourceMappingURL=ExchangeNamespace.js.map