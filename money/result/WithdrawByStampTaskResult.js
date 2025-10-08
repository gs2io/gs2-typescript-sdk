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
var Gs2Money = tslib_1.__importStar(require("../model"));
var WithdrawByStampTaskResult = /** @class */ (function () {
    function WithdrawByStampTaskResult() {
        this.item = null;
        this.price = null;
        this.newContextStack = null;
    }
    WithdrawByStampTaskResult.prototype.getItem = function () {
        return this.item;
    };
    WithdrawByStampTaskResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    WithdrawByStampTaskResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    WithdrawByStampTaskResult.prototype.getPrice = function () {
        return this.price;
    };
    WithdrawByStampTaskResult.prototype.setPrice = function (price) {
        this.price = price;
        return this;
    };
    WithdrawByStampTaskResult.prototype.withPrice = function (price) {
        this.price = price;
        return this;
    };
    WithdrawByStampTaskResult.prototype.getNewContextStack = function () {
        return this.newContextStack;
    };
    WithdrawByStampTaskResult.prototype.setNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    WithdrawByStampTaskResult.prototype.withNewContextStack = function (newContextStack) {
        this.newContextStack = newContextStack;
        return this;
    };
    WithdrawByStampTaskResult.fromDict = function (data) {
        return new WithdrawByStampTaskResult()
            .withItem(Gs2Money.Wallet.fromDict(data["item"]))
            .withPrice(data["price"])
            .withNewContextStack(data["newContextStack"]);
    };
    WithdrawByStampTaskResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "price": this.getPrice(),
            "newContextStack": this.getNewContextStack(),
        };
    };
    return WithdrawByStampTaskResult;
}());
exports.default = WithdrawByStampTaskResult;
//# sourceMappingURL=WithdrawByStampTaskResult.js.map