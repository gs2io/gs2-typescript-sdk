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
var DictionaryNamespaceEntryByNameDistributionSegment = /** @class */ (function () {
    function DictionaryNamespaceEntryByNameDistributionSegment() {
        this.entryModelName = null;
        this.count = null;
    }
    DictionaryNamespaceEntryByNameDistributionSegment.prototype.getEntryModelName = function () {
        return this.entryModelName;
    };
    DictionaryNamespaceEntryByNameDistributionSegment.prototype.setEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionSegment.prototype.withEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    DictionaryNamespaceEntryByNameDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    DictionaryNamespaceEntryByNameDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DictionaryNamespaceEntryByNameDistributionSegment()
            .withEntryModelName(data["entryModelName"])
            .withCount(data["count"]);
    };
    DictionaryNamespaceEntryByNameDistributionSegment.prototype.toDict = function () {
        return {
            "entryModelName": this.getEntryModelName(),
            "count": this.getCount(),
        };
    };
    return DictionaryNamespaceEntryByNameDistributionSegment;
}());
exports.default = DictionaryNamespaceEntryByNameDistributionSegment;
//# sourceMappingURL=DictionaryNamespaceEntryByNameDistributionSegment.js.map