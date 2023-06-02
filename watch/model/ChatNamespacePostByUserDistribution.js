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
var ChatNamespacePostByUserDistributionStatistics_1 = tslib_1.__importDefault(require("./ChatNamespacePostByUserDistributionStatistics"));
var ChatNamespacePostByUserDistributionSegment_1 = tslib_1.__importDefault(require("./ChatNamespacePostByUserDistributionSegment"));
var ChatNamespacePostByUserDistribution = /** @class */ (function () {
    function ChatNamespacePostByUserDistribution() {
        this.statistics = null;
        this.distribution = null;
    }
    ChatNamespacePostByUserDistribution.prototype.getStatistics = function () {
        return this.statistics;
    };
    ChatNamespacePostByUserDistribution.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ChatNamespacePostByUserDistribution.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    ChatNamespacePostByUserDistribution.prototype.getDistribution = function () {
        return this.distribution;
    };
    ChatNamespacePostByUserDistribution.prototype.setDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    ChatNamespacePostByUserDistribution.prototype.withDistribution = function (distribution) {
        this.distribution = distribution;
        return this;
    };
    ChatNamespacePostByUserDistribution.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChatNamespacePostByUserDistribution()
            .withStatistics(ChatNamespacePostByUserDistributionStatistics_1.default.fromDict(data["statistics"]))
            .withDistribution(data.distribution ?
            data.distribution.map(function (item) {
                return ChatNamespacePostByUserDistributionSegment_1.default.fromDict(item);
            }) : []);
    };
    ChatNamespacePostByUserDistribution.prototype.toDict = function () {
        var _a;
        return {
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distribution": this.getDistribution() ?
                this.getDistribution().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ChatNamespacePostByUserDistribution;
}());
exports.default = ChatNamespacePostByUserDistribution;
//# sourceMappingURL=ChatNamespacePostByUserDistribution.js.map