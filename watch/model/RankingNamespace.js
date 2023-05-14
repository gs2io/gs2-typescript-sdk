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
var RankingCategory_1 = tslib_1.__importDefault(require("./RankingCategory"));
var RankingNamespace = /** @class */ (function () {
    function RankingNamespace() {
        this.namespaceName = null;
        this.category = null;
    }
    RankingNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RankingNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RankingNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RankingNamespace.prototype.getCategory = function () {
        return this.category;
    };
    RankingNamespace.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    RankingNamespace.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    RankingNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingNamespace()
            .withNamespaceName(data["namespaceName"])
            .withCategory(data.category ?
            data.category.map(function (item) {
                return RankingCategory_1.default.fromDict(item);
            }) : []);
    };
    RankingNamespace.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "category": this.getCategory() ?
                this.getCategory().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return RankingNamespace;
}());
exports.default = RankingNamespace;
//# sourceMappingURL=RankingNamespace.js.map