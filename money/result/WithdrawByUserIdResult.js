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
var WithdrawByUserIdResult = /** @class */ (function () {
    function WithdrawByUserIdResult() {
        this.item = null;
        this.price = null;
    }
    WithdrawByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    WithdrawByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    WithdrawByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    WithdrawByUserIdResult.prototype.getPrice = function () {
        return this.price;
    };
    WithdrawByUserIdResult.prototype.setPrice = function (price) {
        this.price = price;
        return this;
    };
    WithdrawByUserIdResult.prototype.withPrice = function (price) {
        this.price = price;
        return this;
    };
    WithdrawByUserIdResult.fromDict = function (data) {
        return new WithdrawByUserIdResult()
            .withItem(Gs2Money.Wallet.fromDict(data["item"]))
            .withPrice(data["price"]);
    };
    WithdrawByUserIdResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "price": this.getPrice(),
        };
    };
    return WithdrawByUserIdResult;
}());
exports.default = WithdrawByUserIdResult;
//# sourceMappingURL=WithdrawByUserIdResult.js.map