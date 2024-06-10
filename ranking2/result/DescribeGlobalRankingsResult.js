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
var DescribeGlobalRankingsResult = /** @class */ (function () {
    function DescribeGlobalRankingsResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeGlobalRankingsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeGlobalRankingsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeGlobalRankingsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeGlobalRankingsResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeGlobalRankingsResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeGlobalRankingsResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeGlobalRankingsResult.fromDict = function (data) {
        return new DescribeGlobalRankingsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Ranking2.GlobalRankingData.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeGlobalRankingsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeGlobalRankingsResult;
}());
exports.default = DescribeGlobalRankingsResult;
//# sourceMappingURL=DescribeGlobalRankingsResult.js.map