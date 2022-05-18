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
var Gs2Matchmaking = tslib_1.__importStar(require("../model"));
var DescribeRatingsByUserIdResult = /** @class */ (function () {
    function DescribeRatingsByUserIdResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeRatingsByUserIdResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeRatingsByUserIdResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeRatingsByUserIdResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeRatingsByUserIdResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeRatingsByUserIdResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeRatingsByUserIdResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeRatingsByUserIdResult.fromDict = function (data) {
        return new DescribeRatingsByUserIdResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Matchmaking.Rating.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeRatingsByUserIdResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeRatingsByUserIdResult;
}());
exports.default = DescribeRatingsByUserIdResult;
//# sourceMappingURL=DescribeRatingsByUserIdResult.js.map