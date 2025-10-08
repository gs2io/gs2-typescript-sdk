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
var Gs2MegaField = tslib_1.__importStar(require("../model"));
var DescribeAreaModelMastersResult = /** @class */ (function () {
    function DescribeAreaModelMastersResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeAreaModelMastersResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeAreaModelMastersResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeAreaModelMastersResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeAreaModelMastersResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeAreaModelMastersResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeAreaModelMastersResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeAreaModelMastersResult.fromDict = function (data) {
        return new DescribeAreaModelMastersResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2MegaField.AreaModelMaster.fromDict(item);
            }) : null)
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeAreaModelMastersResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeAreaModelMastersResult;
}());
exports.default = DescribeAreaModelMastersResult;
//# sourceMappingURL=DescribeAreaModelMastersResult.js.map