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
var RankingCategoryModelStatistics_1 = tslib_1.__importDefault(require("./RankingCategoryModelStatistics"));
var RankingCategoryModelDistributions_1 = tslib_1.__importDefault(require("./RankingCategoryModelDistributions"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:ranking:namespace:{namespaceName}:categoryModel:{categoryName}";
var RankingCategoryModel = /** @class */ (function () {
    function RankingCategoryModel() {
        this.categoryModelId = null;
        this.categoryName = null;
        this.statistics = null;
        this.distributions = null;
    }
    RankingCategoryModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RankingCategoryModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RankingCategoryModel.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RankingCategoryModel.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RankingCategoryModel.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RankingCategoryModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{categoryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RankingCategoryModel.getCategoryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{categoryName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RankingCategoryModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getCategoryName(grn) == null || this.getCategoryName(grn) === '') {
            return false;
        }
        return true;
    };
    RankingCategoryModel.createGrn = function (region, ownerId, year, month, day, namespaceName, categoryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{categoryName}', categoryName !== null && categoryName !== void 0 ? categoryName : '');
    };
    RankingCategoryModel.prototype.getCategoryModelId = function () {
        return this.categoryModelId;
    };
    RankingCategoryModel.prototype.setCategoryModelId = function (categoryModelId) {
        this.categoryModelId = categoryModelId;
        return this;
    };
    RankingCategoryModel.prototype.withCategoryModelId = function (categoryModelId) {
        this.categoryModelId = categoryModelId;
        return this;
    };
    RankingCategoryModel.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    RankingCategoryModel.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    RankingCategoryModel.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    RankingCategoryModel.prototype.getStatistics = function () {
        return this.statistics;
    };
    RankingCategoryModel.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    RankingCategoryModel.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    RankingCategoryModel.prototype.getDistributions = function () {
        return this.distributions;
    };
    RankingCategoryModel.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    RankingCategoryModel.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    RankingCategoryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingCategoryModel()
            .withCategoryModelId(data["categoryModelId"])
            .withCategoryName(data["categoryName"])
            .withStatistics(RankingCategoryModelStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(RankingCategoryModelDistributions_1.default.fromDict(data["distributions"]));
    };
    RankingCategoryModel.prototype.toDict = function () {
        var _a, _b;
        return {
            "categoryModelId": this.getCategoryModelId(),
            "categoryName": this.getCategoryName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return RankingCategoryModel;
}());
exports.default = RankingCategoryModel;
//# sourceMappingURL=RankingCategoryModel.js.map