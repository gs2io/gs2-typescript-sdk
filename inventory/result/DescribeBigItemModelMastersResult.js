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
var Gs2Inventory = tslib_1.__importStar(require("../model"));
var DescribeBigItemModelMastersResult = /** @class */ (function () {
    function DescribeBigItemModelMastersResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeBigItemModelMastersResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeBigItemModelMastersResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeBigItemModelMastersResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeBigItemModelMastersResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeBigItemModelMastersResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeBigItemModelMastersResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeBigItemModelMastersResult.fromDict = function (data) {
        return new DescribeBigItemModelMastersResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Inventory.BigItemModelMaster.fromDict(item);
            }) : null)
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeBigItemModelMastersResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeBigItemModelMastersResult;
}());
exports.default = DescribeBigItemModelMastersResult;
//# sourceMappingURL=DescribeBigItemModelMastersResult.js.map