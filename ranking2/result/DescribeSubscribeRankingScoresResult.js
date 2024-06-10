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
var Gs2Ranking2 = tslib_1.__importStar(require("../model"));
var DescribeSubscribeRankingScoresResult = /** @class */ (function () {
    function DescribeSubscribeRankingScoresResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeSubscribeRankingScoresResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeSubscribeRankingScoresResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeSubscribeRankingScoresResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeSubscribeRankingScoresResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeSubscribeRankingScoresResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeSubscribeRankingScoresResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeSubscribeRankingScoresResult.fromDict = function (data) {
        return new DescribeSubscribeRankingScoresResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Ranking2.SubscribeRankingScore.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeSubscribeRankingScoresResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeSubscribeRankingScoresResult;
}());
exports.default = DescribeSubscribeRankingScoresResult;
//# sourceMappingURL=DescribeSubscribeRankingScoresResult.js.map