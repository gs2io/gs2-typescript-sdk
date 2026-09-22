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
var Gs2Distributor = tslib_1.__importStar(require("../model"));
var DescribeUserDataByUserIdResult = /** @class */ (function () {
    function DescribeUserDataByUserIdResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeUserDataByUserIdResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeUserDataByUserIdResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeUserDataByUserIdResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeUserDataByUserIdResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeUserDataByUserIdResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeUserDataByUserIdResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeUserDataByUserIdResult.fromDict = function (data) {
        return new DescribeUserDataByUserIdResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Distributor.UserDataEntry.fromDict(item);
            }) : null)
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeUserDataByUserIdResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeUserDataByUserIdResult;
}());
exports.default = DescribeUserDataByUserIdResult;
//# sourceMappingURL=DescribeUserDataByUserIdResult.js.map