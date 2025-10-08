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
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var DictionaryNamespaceDistributions = /** @class */ (function () {
    function DictionaryNamespaceDistributions() {
        this.entryByName = null;
        this.entryByUser = null;
    }
    DictionaryNamespaceDistributions.prototype.getEntryByName = function () {
        return this.entryByName;
    };
    DictionaryNamespaceDistributions.prototype.setEntryByName = function (entryByName) {
        this.entryByName = entryByName;
        return this;
    };
    DictionaryNamespaceDistributions.prototype.withEntryByName = function (entryByName) {
        this.entryByName = entryByName;
        return this;
    };
    DictionaryNamespaceDistributions.prototype.getEntryByUser = function () {
        return this.entryByUser;
    };
    DictionaryNamespaceDistributions.prototype.setEntryByUser = function (entryByUser) {
        this.entryByUser = entryByUser;
        return this;
    };
    DictionaryNamespaceDistributions.prototype.withEntryByUser = function (entryByUser) {
        this.entryByUser = entryByUser;
        return this;
    };
    DictionaryNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DictionaryNamespaceDistributions()
            .withEntryByName(Gs2Watch.DictionaryNamespaceEntryByNameDistribution.fromDict(data["entryByName"]))
            .withEntryByUser(Gs2Watch.DictionaryNamespaceEntryByUserDistribution.fromDict(data["entryByUser"]));
    };
    DictionaryNamespaceDistributions.prototype.toDict = function () {
        var _a, _b;
        return {
            "entryByName": (_a = this.getEntryByName()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "entryByUser": (_b = this.getEntryByUser()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return DictionaryNamespaceDistributions;
}());
exports.default = DictionaryNamespaceDistributions;
//# sourceMappingURL=DictionaryNamespaceDistributions.js.map