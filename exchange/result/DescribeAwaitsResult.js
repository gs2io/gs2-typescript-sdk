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
var Gs2Exchange = (0, tslib_1.__importStar)(require("../model"));
var DescribeAwaitsResult = /** @class */ (function () {
    function DescribeAwaitsResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeAwaitsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeAwaitsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeAwaitsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeAwaitsResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeAwaitsResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeAwaitsResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeAwaitsResult.fromDict = function (data) {
        return new DescribeAwaitsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Exchange.Await.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeAwaitsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeAwaitsResult;
}());
exports.default = DescribeAwaitsResult;
//# sourceMappingURL=DescribeAwaitsResult.js.map