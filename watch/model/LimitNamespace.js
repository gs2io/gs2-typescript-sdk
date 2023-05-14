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
var LimitLimit_1 = tslib_1.__importDefault(require("./LimitLimit"));
var LimitNamespace = /** @class */ (function () {
    function LimitNamespace() {
        this.namespaceName = null;
        this.limit = null;
    }
    LimitNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    LimitNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    LimitNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    LimitNamespace.prototype.getLimit = function () {
        return this.limit;
    };
    LimitNamespace.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    LimitNamespace.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    LimitNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitNamespace()
            .withNamespaceName(data["namespaceName"])
            .withLimit(data.limit ?
            data.limit.map(function (item) {
                return LimitLimit_1.default.fromDict(item);
            }) : []);
    };
    LimitNamespace.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limit": this.getLimit() ?
                this.getLimit().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return LimitNamespace;
}());
exports.default = LimitNamespace;
//# sourceMappingURL=LimitNamespace.js.map