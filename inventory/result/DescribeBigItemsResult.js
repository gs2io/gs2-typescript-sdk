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
var DescribeBigItemsResult = /** @class */ (function () {
    function DescribeBigItemsResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeBigItemsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeBigItemsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeBigItemsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeBigItemsResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeBigItemsResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeBigItemsResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeBigItemsResult.fromDict = function (data) {
        return new DescribeBigItemsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Inventory.BigItem.fromDict(item);
            }) : null)
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeBigItemsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeBigItemsResult;
}());
exports.default = DescribeBigItemsResult;
//# sourceMappingURL=DescribeBigItemsResult.js.map