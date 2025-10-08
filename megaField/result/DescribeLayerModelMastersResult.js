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
var DescribeLayerModelMastersResult = /** @class */ (function () {
    function DescribeLayerModelMastersResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeLayerModelMastersResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeLayerModelMastersResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeLayerModelMastersResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeLayerModelMastersResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeLayerModelMastersResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeLayerModelMastersResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeLayerModelMastersResult.fromDict = function (data) {
        return new DescribeLayerModelMastersResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2MegaField.LayerModelMaster.fromDict(item);
            }) : null)
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeLayerModelMastersResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeLayerModelMastersResult;
}());
exports.default = DescribeLayerModelMastersResult;
//# sourceMappingURL=DescribeLayerModelMastersResult.js.map