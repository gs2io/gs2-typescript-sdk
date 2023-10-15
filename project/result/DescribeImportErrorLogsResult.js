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
var Gs2Project = tslib_1.__importStar(require("../model"));
var DescribeImportErrorLogsResult = /** @class */ (function () {
    function DescribeImportErrorLogsResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeImportErrorLogsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeImportErrorLogsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeImportErrorLogsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeImportErrorLogsResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeImportErrorLogsResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeImportErrorLogsResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeImportErrorLogsResult.fromDict = function (data) {
        return new DescribeImportErrorLogsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Project.ImportErrorLog.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeImportErrorLogsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeImportErrorLogsResult;
}());
exports.default = DescribeImportErrorLogsResult;
//# sourceMappingURL=DescribeImportErrorLogsResult.js.map