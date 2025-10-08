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
var Gs2Exchange = tslib_1.__importStar(require("../model"));
var DescribeRateModelMastersResult = /** @class */ (function () {
    function DescribeRateModelMastersResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeRateModelMastersResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeRateModelMastersResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeRateModelMastersResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeRateModelMastersResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeRateModelMastersResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeRateModelMastersResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeRateModelMastersResult.fromDict = function (data) {
        return new DescribeRateModelMastersResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Exchange.RateModelMaster.fromDict(item);
            }) : null)
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeRateModelMastersResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeRateModelMastersResult;
}());
exports.default = DescribeRateModelMastersResult;
//# sourceMappingURL=DescribeRateModelMastersResult.js.map