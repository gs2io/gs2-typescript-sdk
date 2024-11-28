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
var Gs2Ranking2 = tslib_1.__importStar(require("../../ranking2/model"));
var RankingReward = /** @class */ (function () {
    function RankingReward() {
        this.thresholdRank = null;
        this.metadata = null;
        this.acquireActions = null;
    }
    RankingReward.prototype.getThresholdRank = function () {
        return this.thresholdRank;
    };
    RankingReward.prototype.setThresholdRank = function (thresholdRank) {
        this.thresholdRank = thresholdRank;
        return this;
    };
    RankingReward.prototype.withThresholdRank = function (thresholdRank) {
        this.thresholdRank = thresholdRank;
        return this;
    };
    RankingReward.prototype.getMetadata = function () {
        return this.metadata;
    };
    RankingReward.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RankingReward.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RankingReward.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    RankingReward.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    RankingReward.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    RankingReward.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingReward()
            .withThresholdRank(data["thresholdRank"])
            .withMetadata(data["metadata"])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Ranking2.AcquireAction.fromDict(item);
            }) : null);
    };
    RankingReward.prototype.toDict = function () {
        return {
            "thresholdRank": this.getThresholdRank(),
            "metadata": this.getMetadata(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return RankingReward;
}());
exports.default = RankingReward;
//# sourceMappingURL=RankingReward.js.map