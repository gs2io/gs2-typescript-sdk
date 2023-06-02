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
var ShowcaseDisplayItemStatistics_1 = tslib_1.__importDefault(require("./ShowcaseDisplayItemStatistics"));
var ShowcaseDisplayItemDistributions_1 = tslib_1.__importDefault(require("./ShowcaseDisplayItemDistributions"));
var grnFormat = "";
var ShowcaseDisplayItem = /** @class */ (function () {
    function ShowcaseDisplayItem() {
        this.displayItemId = null;
        this.statistics = null;
        this.distributions = null;
    }
    ShowcaseDisplayItem.isValid = function (grn) {
        return true;
    };
    ShowcaseDisplayItem.createGrn = function () {
        return grnFormat;
    };
    ShowcaseDisplayItem.prototype.getDisplayItemId = function () {
        return this.displayItemId;
    };
    ShowcaseDisplayItem.prototype.setDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    ShowcaseDisplayItem.prototype.withDisplayItemId = function (displayItemId) {
        this.displayItemId = displayItemId;
        return this;
    };
    ShowcaseDisplayItem.prototype.getStatistics = function () {
        return this.statistics;
    };
    ShowcaseDisplayItem.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ShowcaseDisplayItem.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ShowcaseDisplayItem.prototype.getDistributions = function () {
        return this.distributions;
    };
    ShowcaseDisplayItem.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ShowcaseDisplayItem.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    ShowcaseDisplayItem.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseDisplayItem()
            .withDisplayItemId(data["displayItemId"])
            .withStatistics(ShowcaseDisplayItemStatistics_1.default.fromDict(data["statistics"]))
            .withDistributions(ShowcaseDisplayItemDistributions_1.default.fromDict(data["distributions"]));
    };
    ShowcaseDisplayItem.prototype.toDict = function () {
        var _a, _b;
        return {
            "displayItemId": this.getDisplayItemId(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return ShowcaseDisplayItem;
}());
exports.default = ShowcaseDisplayItem;
//# sourceMappingURL=ShowcaseDisplayItem.js.map