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
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var ShowcaseNamespaceBuyDistribution = /** @class */ (function () {
    function ShowcaseNamespaceBuyDistribution() {
        this.statistics = null;
        this.distribution = null;
    }
    ShowcaseNamespaceBuyDistribution.prototype.getStatistics = function () {
        return this.statistics;
    };
    ShowcaseNamespaceBuyDistribution.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ShowcaseNamespaceBuyDistribution.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ShowcaseNamespaceBuyDistribution.prototype.getDistribution = function () {
        return this.distribution;
    };
    ShowcaseNamespaceBuyDistribution.prototype.setDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    ShowcaseNamespaceBuyDistribution.prototype.withDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    ShowcaseNamespaceBuyDistribution.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseNamespaceBuyDistribution()
            .withStatistics(Gs2Watch.ShowcaseNamespaceBuyDistributionStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
            data.distribution.map(function (item) {
                return Gs2Watch.ShowcaseNamespaceBuyDistributionSegment.fromDict(item);
            }) : null);
    };
    ShowcaseNamespaceBuyDistribution.prototype.toDict = function () {
        var _a;
        return {
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return ShowcaseNamespaceBuyDistribution;
}());
exports.default = ShowcaseNamespaceBuyDistribution;
//# sourceMappingURL=ShowcaseNamespaceBuyDistribution.js.map