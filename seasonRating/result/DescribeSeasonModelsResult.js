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
var Gs2SeasonRating = tslib_1.__importStar(require("../model"));
var DescribeSeasonModelsResult = /** @class */ (function () {
    function DescribeSeasonModelsResult() {
        this.items = null;
    }
    DescribeSeasonModelsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeSeasonModelsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeSeasonModelsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeSeasonModelsResult.fromDict = function (data) {
        return new DescribeSeasonModelsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2SeasonRating.SeasonModel.fromDict(item);
            }) : []);
    };
    DescribeSeasonModelsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return DescribeSeasonModelsResult;
}());
exports.default = DescribeSeasonModelsResult;
//# sourceMappingURL=DescribeSeasonModelsResult.js.map