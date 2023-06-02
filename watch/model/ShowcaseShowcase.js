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
var ShowcaseShowcaseStatistics_1 = tslib_1.__importDefault(require("./ShowcaseShowcaseStatistics"));
var ShowcaseShowcaseDistributions_1 = tslib_1.__importDefault(require("./ShowcaseShowcaseDistributions"));
var ShowcaseDisplayItem_1 = tslib_1.__importDefault(require("./ShowcaseDisplayItem"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:showcase:namespace:{namespaceName}:showcase:{showcaseName}";
var ShowcaseShowcase = /** @class */ (function () {
    function ShowcaseShowcase() {
        this.showcaseId = null;
        this.showcaseName = null;
        this.statistics = null;
        this.distributions = null;
        this.displayItems = null;
    }
    ShowcaseShowcase.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ShowcaseShowcase.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ShowcaseShowcase.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ShowcaseShowcase.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ShowcaseShowcase.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ShowcaseShowcase.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{showcaseName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ShowcaseShowcase.getShowcaseName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ShowcaseShowcase.isValid = function (grn) {
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
        if (this.getShowcaseName(grn) == null || this.getShowcaseName(grn) === '') {
            return false;
        }
        return true;
    };
    ShowcaseShowcase.createGrn = function (region, ownerId, year, month, day, namespaceName, showcaseName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{showcaseName}', showcaseName !== null && showcaseName !== void 0 ? showcaseName : '');
    };
    ShowcaseShowcase.prototype.getShowcaseId = function () {
        return this.showcaseId;
    };
    ShowcaseShowcase.prototype.setShowcaseId = function (showcaseId) {
        this.showcaseId = showcaseId;
        return this;
    };
    ShowcaseShowcase.prototype.withShowcaseId = function (showcaseId) {
        this.showcaseId = showcaseId;
        return this;
    };
    ShowcaseShowcase.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    ShowcaseShowcase.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    ShowcaseShowcase.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    ShowcaseShowcase.prototype.getStatistics = function () {
        return this.statistics;
    };
    ShowcaseShowcase.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ShowcaseShowcase.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ShowcaseShowcase.prototype.getDistributions = function () {
        return this.distributions;
    };
    ShowcaseShowcase.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ShowcaseShowcase.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ShowcaseShowcase.prototype.getDisplayItems = function () {
        return this.displayItems;
    };
    ShowcaseShowcase.prototype.setDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    ShowcaseShowcase.prototype.withDisplayItems = function (displayItems) {
        this.displayItems = displayItems;
        return this;
    };
    ShowcaseShowcase.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseShowcase()
            .withShowcaseId(data["showcaseId"])
            .withShowcaseName(data["showcaseName"])
            .withStatistics(ShowcaseShowcaseStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(ShowcaseShowcaseDistributions_1.default.fromDict(data["distributions"]))
            .withDisplayItems(data.displayItems ?
            data.displayItems.map(function (item) {
                return ShowcaseDisplayItem_1.default.fromDict(item);
            }) : []);
    };
    ShowcaseShowcase.prototype.toDict = function () {
        var _a, _b;
        return {
            "showcaseId": this.getShowcaseId(),
            "showcaseName": this.getShowcaseName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ShowcaseShowcase;
}());
exports.default = ShowcaseShowcase;
//# sourceMappingURL=ShowcaseShowcase.js.map