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
var Gs2Log = (0, tslib_1.__importStar)(require("../model"));
var CountExecuteStampTaskLogResult = /** @class */ (function () {
    function CountExecuteStampTaskLogResult() {
        this.items = null;
        this.nextPageToken = null;
        this.totalCount = null;
        this.scanSize = null;
    }
    CountExecuteStampTaskLogResult.prototype.getItems = function () {
        return this.items;
    };
    CountExecuteStampTaskLogResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    CountExecuteStampTaskLogResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    CountExecuteStampTaskLogResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    CountExecuteStampTaskLogResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    CountExecuteStampTaskLogResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    CountExecuteStampTaskLogResult.prototype.getTotalCount = function () {
        return this.totalCount;
    };
    CountExecuteStampTaskLogResult.prototype.setTotalCount = function (totalCount) {
        this.totalCount = totalCount;
        return this;
    };
    CountExecuteStampTaskLogResult.prototype.withTotalCount = function (totalCount) {
        this.totalCount = totalCount;
        return this;
    };
    CountExecuteStampTaskLogResult.prototype.getScanSize = function () {
        return this.scanSize;
    };
    CountExecuteStampTaskLogResult.prototype.setScanSize = function (scanSize) {
        this.scanSize = scanSize;
        return this;
    };
    CountExecuteStampTaskLogResult.prototype.withScanSize = function (scanSize) {
        this.scanSize = scanSize;
        return this;
    };
    CountExecuteStampTaskLogResult.fromDict = function (data) {
        return new CountExecuteStampTaskLogResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Log.ExecuteStampTaskLogCount.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"])
            .withTotalCount(data["totalCount"])
            .withScanSize(data["scanSize"]);
    };
    CountExecuteStampTaskLogResult.prototype.toDict = function () {
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
    return CountExecuteStampTaskLogResult;
}());
exports.default = CountExecuteStampTaskLogResult;
//# sourceMappingURL=CountExecuteStampTaskLogResult.js.map