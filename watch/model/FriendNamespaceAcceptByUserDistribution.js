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
var FriendNamespaceAcceptByUserDistributionStatistics_1 = tslib_1.__importDefault(require("./FriendNamespaceAcceptByUserDistributionStatistics"));
var FriendNamespaceAcceptByUserDistributionSegment_1 = tslib_1.__importDefault(require("./FriendNamespaceAcceptByUserDistributionSegment"));
var FriendNamespaceAcceptByUserDistribution = /** @class */ (function () {
    function FriendNamespaceAcceptByUserDistribution() {
        this.statistics = null;
        this.distribution = null;
    }
    FriendNamespaceAcceptByUserDistribution.prototype.getStatistics = function () {
        return this.statistics;
    };
    FriendNamespaceAcceptByUserDistribution.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    FriendNamespaceAcceptByUserDistribution.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    FriendNamespaceAcceptByUserDistribution.prototype.getDistribution = function () {
        return this.distribution;
    };
    FriendNamespaceAcceptByUserDistribution.prototype.setDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    FriendNamespaceAcceptByUserDistribution.prototype.withDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    FriendNamespaceAcceptByUserDistribution.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FriendNamespaceAcceptByUserDistribution()
            .withStatistics(FriendNamespaceAcceptByUserDistributionStatistics_1.default.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
            data.distribution.map(function (item) {
                return FriendNamespaceAcceptByUserDistributionSegment_1.default.fromDict(item);
            }) : []);
    };
    FriendNamespaceAcceptByUserDistribution.prototype.toDict = function () {
        var _a;
        return {
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return FriendNamespaceAcceptByUserDistribution;
}());
exports.default = FriendNamespaceAcceptByUserDistribution;
//# sourceMappingURL=FriendNamespaceAcceptByUserDistribution.js.map