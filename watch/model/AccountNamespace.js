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
var AccountTakeOver_1 = tslib_1.__importDefault(require("./AccountTakeOver"));
var AccountNamespace = /** @class */ (function () {
    function AccountNamespace() {
        this.namespaceName = null;
        this.takeOver = null;
    }
    AccountNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AccountNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AccountNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AccountNamespace.prototype.getTakeOver = function () {
        return this.takeOver;
    };
    AccountNamespace.prototype.setTakeOver = function (takeOver) {
        this.takeOver = takeOver;
        return this;
    };
    AccountNamespace.prototype.withTakeOver = function (takeOver) {
        this.takeOver = takeOver;
        return this;
    };
    AccountNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccountNamespace()
            .withNamespaceName(data["namespaceName"])
            .withTakeOver(data.takeOver ?
            data.takeOver.map(function (item) {
                return AccountTakeOver_1.default.fromDict(item);
            }) : []);
    };
    AccountNamespace.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "takeOver": this.getTakeOver() ?
                this.getTakeOver().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return AccountNamespace;
}());
exports.default = AccountNamespace;
//# sourceMappingURL=AccountNamespace.js.map