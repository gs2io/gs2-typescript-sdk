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
var Gs2Mission = tslib_1.__importStar(require("../model"));
var DescribeCountersByUserIdResult = /** @class */ (function () {
    function DescribeCountersByUserIdResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeCountersByUserIdResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeCountersByUserIdResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeCountersByUserIdResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeCountersByUserIdResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeCountersByUserIdResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeCountersByUserIdResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeCountersByUserIdResult.fromDict = function (data) {
        return new DescribeCountersByUserIdResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Mission.Counter.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeCountersByUserIdResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeCountersByUserIdResult;
}());
exports.default = DescribeCountersByUserIdResult;
//# sourceMappingURL=DescribeCountersByUserIdResult.js.map