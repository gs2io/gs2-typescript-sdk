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
var Gs2Account = tslib_1.__importStar(require("../model"));
var IssueTakeOverCodeResult = /** @class */ (function () {
    function IssueTakeOverCodeResult() {
        this.item = null;
        this.password = null;
    }
    IssueTakeOverCodeResult.prototype.getItem = function () {
        return this.item;
    };
    IssueTakeOverCodeResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    IssueTakeOverCodeResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    IssueTakeOverCodeResult.prototype.getPassword = function () {
        return this.password;
    };
    IssueTakeOverCodeResult.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    IssueTakeOverCodeResult.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    IssueTakeOverCodeResult.fromDict = function (data) {
        return new IssueTakeOverCodeResult()
            .withItem(Gs2Account.TakeOver.fromDict(data["item"]))
            .withPassword(data["password"]);
    };
    IssueTakeOverCodeResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "password": this.getPassword(),
        };
    };
    return IssueTakeOverCodeResult;
}());
exports.default = IssueTakeOverCodeResult;
//# sourceMappingURL=IssueTakeOverCodeResult.js.map