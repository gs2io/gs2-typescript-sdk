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
var MissionNamespaceIncreaseDistribution = /** @class */ (function () {
    function MissionNamespaceIncreaseDistribution() {
        this.statistics = null;
        this.distribution = null;
    }
    MissionNamespaceIncreaseDistribution.prototype.getStatistics = function () {
        return this.statistics;
    };
    MissionNamespaceIncreaseDistribution.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MissionNamespaceIncreaseDistribution.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MissionNamespaceIncreaseDistribution.prototype.getDistribution = function () {
        return this.distribution;
    };
    MissionNamespaceIncreaseDistribution.prototype.setDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    MissionNamespaceIncreaseDistribution.prototype.withDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    MissionNamespaceIncreaseDistribution.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionNamespaceIncreaseDistribution()
            .withStatistics(Gs2Watch.MissionNamespaceIncreaseDistributionStatistics.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
            data.distribution.map(function (item) {
                return Gs2Watch.MissionNamespaceIncreaseDistributionSegment.fromDict(item);
            }) : null);
    };
    MissionNamespaceIncreaseDistribution.prototype.toDict = function () {
        var _a;
        return {
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return MissionNamespaceIncreaseDistribution;
}());
exports.default = MissionNamespaceIncreaseDistribution;
//# sourceMappingURL=MissionNamespaceIncreaseDistribution.js.map