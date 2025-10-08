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
var QueryExecuteStampTaskLogResult = /** @class */ (function () {
    function QueryExecuteStampTaskLogResult() {
        this.items = null;
        this.nextPageToken = null;
        this.totalCount = null;
        this.scanSize = null;
    }
    QueryExecuteStampTaskLogResult.prototype.getItems = function () {
        return this.items;
    };
    QueryExecuteStampTaskLogResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    QueryExecuteStampTaskLogResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    QueryExecuteStampTaskLogResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    QueryExecuteStampTaskLogResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    QueryExecuteStampTaskLogResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    QueryExecuteStampTaskLogResult.prototype.getTotalCount = function () {
        return this.totalCount;
    };
    QueryExecuteStampTaskLogResult.prototype.setTotalCount = function (totalCount) {
        this.totalCount = totalCount;
        return this;
    };
    QueryExecuteStampTaskLogResult.prototype.withTotalCount = function (totalCount) {
        this.totalCount = totalCount;
        return this;
    };
    QueryExecuteStampTaskLogResult.prototype.getScanSize = function () {
        return this.scanSize;
    };
    QueryExecuteStampTaskLogResult.prototype.setScanSize = function (scanSize) {
        this.scanSize = scanSize;
        return this;
    };
    QueryExecuteStampTaskLogResult.prototype.withScanSize = function (scanSize) {
        this.scanSize = scanSize;
        return this;
    };
    QueryExecuteStampTaskLogResult.fromDict = function (data) {
        return new QueryExecuteStampTaskLogResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Log.ExecuteStampTaskLog.fromDict(item);
            }) : null)
            .withNextPageToken(data["nextPageToken"])
            .withTotalCount(data["totalCount"])
            .withScanSize(data["scanSize"]);
    };
    QueryExecuteStampTaskLogResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "nextPageToken": this.getNextPageToken(),
            "totalCount": this.getTotalCount(),
            "scanSize": this.getScanSize(),
        };
    };
    return QueryExecuteStampTaskLogResult;
}());
exports.default = QueryExecuteStampTaskLogResult;
//# sourceMappingURL=QueryExecuteStampTaskLogResult.js.map