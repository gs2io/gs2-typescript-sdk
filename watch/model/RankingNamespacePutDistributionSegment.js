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
var RankingNamespacePutDistributionSegment = /** @class */ (function () {
    function RankingNamespacePutDistributionSegment() {
        this.categoryName = null;
        this.count = null;
    }
    RankingNamespacePutDistributionSegment.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    RankingNamespacePutDistributionSegment.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    RankingNamespacePutDistributionSegment.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    RankingNamespacePutDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    RankingNamespacePutDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    RankingNamespacePutDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    RankingNamespacePutDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingNamespacePutDistributionSegment()
            .withCategoryName(data["categoryName"])
            .withCount(data["count"]);
    };
    RankingNamespacePutDistributionSegment.prototype.toDict = function () {
        return {
            "categoryName": this.getCategoryName(),
            "count": this.getCount(),
        };
    };
    return RankingNamespacePutDistributionSegment;
}());
exports.default = RankingNamespacePutDistributionSegment;
//# sourceMappingURL=RankingNamespacePutDistributionSegment.js.map