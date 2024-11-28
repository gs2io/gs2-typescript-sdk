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
var Gs2Dictionary = tslib_1.__importStar(require("../model"));
var DescribeEntryModelMastersResult = /** @class */ (function () {
    function DescribeEntryModelMastersResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeEntryModelMastersResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeEntryModelMastersResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeEntryModelMastersResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeEntryModelMastersResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeEntryModelMastersResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeEntryModelMastersResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeEntryModelMastersResult.fromDict = function (data) {
        return new DescribeEntryModelMastersResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Dictionary.EntryModelMaster.fromDict(item);
            }) : null)
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeEntryModelMastersResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeEntryModelMastersResult;
}());
exports.default = DescribeEntryModelMastersResult;
//# sourceMappingURL=DescribeEntryModelMastersResult.js.map