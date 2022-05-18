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
var Gs2Log = tslib_1.__importStar(require("../model"));
var QueryIssueStampSheetLogResult = /** @class */ (function () {
    function QueryIssueStampSheetLogResult() {
        this.items = null;
        this.nextPageToken = null;
        this.totalCount = null;
        this.scanSize = null;
    }
    QueryIssueStampSheetLogResult.prototype.getItems = function () {
        return this.items;
    };
    QueryIssueStampSheetLogResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    QueryIssueStampSheetLogResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    QueryIssueStampSheetLogResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    QueryIssueStampSheetLogResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    QueryIssueStampSheetLogResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    QueryIssueStampSheetLogResult.prototype.getTotalCount = function () {
        return this.totalCount;
    };
    QueryIssueStampSheetLogResult.prototype.setTotalCount = function (totalCount) {
        this.totalCount = totalCount;
        return this;
    };
    QueryIssueStampSheetLogResult.prototype.withTotalCount = function (totalCount) {
        this.totalCount = totalCount;
        return this;
    };
    QueryIssueStampSheetLogResult.prototype.getScanSize = function () {
        return this.scanSize;
    };
    QueryIssueStampSheetLogResult.prototype.setScanSize = function (scanSize) {
        this.scanSize = scanSize;
        return this;
    };
    QueryIssueStampSheetLogResult.prototype.withScanSize = function (scanSize) {
        this.scanSize = scanSize;
        return this;
    };
    QueryIssueStampSheetLogResult.fromDict = function (data) {
        return new QueryIssueStampSheetLogResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Log.IssueStampSheetLog.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"])
            .withTotalCount(data["totalCount"])
            .withScanSize(data["scanSize"]);
    };
    QueryIssueStampSheetLogResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
            "totalCount": this.getTotalCount(),
            "scanSize": this.getScanSize(),
        };
    };
    return QueryIssueStampSheetLogResult;
}());
exports.default = QueryIssueStampSheetLogResult;
//# sourceMappingURL=QueryIssueStampSheetLogResult.js.map