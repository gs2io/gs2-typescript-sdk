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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:global:{rankingName}";
var GlobalRankingModel = /** @class */ (function () {
    function GlobalRankingModel() {
        this.globalRankingModelId = null;
        this.name = null;
        this.metadata = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.sum = null;
        this.orderDirection = null;
        this.entryPeriodEventId = null;
        this.rankingRewards = null;
        this.accessPeriodEventId = null;
    }
    GlobalRankingModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalRankingModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalRankingModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{rankingName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalRankingModel.getRankingName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rankingName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalRankingModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getRankingName(grn) == null || this.getRankingName(grn) === '') {
            return false;
        }
        return true;
    };
    GlobalRankingModel.createGrn = function (region, ownerId, namespaceName, rankingName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '');
    };
    GlobalRankingModel.prototype.getGlobalRankingModelId = function () {
        return this.globalRankingModelId;
    };
    GlobalRankingModel.prototype.setGlobalRankingModelId = function (globalRankingModelId) {
        this.globalRankingModelId = globalRankingModelId;
        return this;
    };
    GlobalRankingModel.prototype.withGlobalRankingModelId = function (globalRankingModelId) {
        this.globalRankingModelId = globalRankingModelId;
        return this;
    };
    GlobalRankingModel.prototype.getName = function () {
        return this.name;
    };
    GlobalRankingModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    GlobalRankingModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    GlobalRankingModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    GlobalRankingModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GlobalRankingModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GlobalRankingModel.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    GlobalRankingModel.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    GlobalRankingModel.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    GlobalRankingModel.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    GlobalRankingModel.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    GlobalRankingModel.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    GlobalRankingModel.prototype.getSum = function () {
        return this.sum;
    };
    GlobalRankingModel.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    GlobalRankingModel.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    GlobalRankingModel.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    GlobalRankingModel.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    GlobalRankingModel.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    GlobalRankingModel.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    GlobalRankingModel.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    GlobalRankingModel.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    GlobalRankingModel.prototype.getRankingRewards = function () {
        return this.rankingRewards;
    };
    GlobalRankingModel.prototype.setRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    GlobalRankingModel.prototype.withRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    GlobalRankingModel.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    GlobalRankingModel.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    GlobalRankingModel.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    GlobalRankingModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GlobalRankingModel()
            .withGlobalRankingModelId(data["globalRankingModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withOrderDirection(data["orderDirection"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withRankingRewards(data.rankingRewards ?
            data.rankingRewards.map(function (item) {
                return Gs2Ranking2.RankingReward.fromDict(item);
            }) : null)
            .withAccessPeriodEventId(data["accessPeriodEventId"]);
    };
    GlobalRankingModel.prototype.toDict = function () {
        return {
            "globalRankingModelId": this.getGlobalRankingModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "orderDirection": this.getOrderDirection(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "rankingRewards": this.getRankingRewards() ?
                this.getRankingRewards().map(function (item) {
                    return item.toDict();
                }) : null,
            "accessPeriodEventId": this.getAccessPeriodEventId(),
        };
    };
    return GlobalRankingModel;
}());
exports.default = GlobalRankingModel;
//# sourceMappingURL=GlobalRankingModel.js.map