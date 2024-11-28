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
var DescribeGlobalRankingModelsResult = /** @class */ (function () {
    function DescribeGlobalRankingModelsResult() {
        this.items = null;
    }
    DescribeGlobalRankingModelsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeGlobalRankingModelsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeGlobalRankingModelsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeGlobalRankingModelsResult.fromDict = function (data) {
        return new DescribeGlobalRankingModelsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Ranking2.GlobalRankingModel.fromDict(item);
            }) : null);
    };
    DescribeGlobalRankingModelsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return DescribeGlobalRankingModelsResult;
}());
exports.default = DescribeGlobalRankingModelsResult;
//# sourceMappingURL=DescribeGlobalRankingModelsResult.js.map