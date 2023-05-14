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
var AccountNamespace_1 = tslib_1.__importDefault(require("./AccountNamespace"));
var AccountMetrics = /** @class */ (function () {
    function AccountMetrics() {
        this.namespaces = null;
    }
    AccountMetrics.prototype.getNamespaces = function () {
        return this.namespaces;
    };
    AccountMetrics.prototype.setNamespaces = function (namespaces) {
        this.namespaces = namespaces;
        return this;
    };
    AccountMetrics.prototype.withNamespaces = function (namespaces) {
        this.namespaces = namespaces;
        return this;
    };
    AccountMetrics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccountMetrics()
            .withNamespaces(data.namespaces ?
            data.namespaces.map(function (item) {
                return AccountNamespace_1.default.fromDict(item);
            }) : []);
    };
    AccountMetrics.prototype.toDict = function () {
        return {
            "namespaces": this.getNamespaces() ?
                this.getNamespaces().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return AccountMetrics;
}());
exports.default = AccountMetrics;
//# sourceMappingURL=AccountMetrics.js.map