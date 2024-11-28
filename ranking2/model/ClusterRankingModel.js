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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:cluster:{rankingName}";
var ClusterRankingModel = /** @class */ (function () {
    function ClusterRankingModel() {
        this.clusterRankingModelId = null;
        this.name = null;
        this.metadata = null;
        this.clusterType = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.sum = null;
        this.orderDirection = null;
        this.entryPeriodEventId = null;
        this.rankingRewards = null;
        this.accessPeriodEventId = null;
    }
    ClusterRankingModel.getRegion = function (grn) {
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
    ClusterRankingModel.getOwnerId = function (grn) {
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
    ClusterRankingModel.getNamespaceName = function (grn) {
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
    ClusterRankingModel.getRankingName = function (grn) {
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
    ClusterRankingModel.isValid = function (grn) {
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
    ClusterRankingModel.createGrn = function (region, ownerId, namespaceName, rankingName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '');
    };
    ClusterRankingModel.prototype.getClusterRankingModelId = function () {
        return this.clusterRankingModelId;
    };
    ClusterRankingModel.prototype.setClusterRankingModelId = function (clusterRankingModelId) {
        this.clusterRankingModelId = clusterRankingModelId;
        return this;
    };
    ClusterRankingModel.prototype.withClusterRankingModelId = function (clusterRankingModelId) {
        this.clusterRankingModelId = clusterRankingModelId;
        return this;
    };
    ClusterRankingModel.prototype.getName = function () {
        return this.name;
    };
    ClusterRankingModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ClusterRankingModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ClusterRankingModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    ClusterRankingModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ClusterRankingModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ClusterRankingModel.prototype.getClusterType = function () {
        return this.clusterType;
    };
    ClusterRankingModel.prototype.setClusterType = function (clusterType) {
        this.clusterType = clusterType;
        return this;
    };
    ClusterRankingModel.prototype.withClusterType = function (clusterType) {
        this.clusterType = clusterType;
        return this;
    };
    ClusterRankingModel.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    ClusterRankingModel.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    ClusterRankingModel.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    ClusterRankingModel.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    ClusterRankingModel.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    ClusterRankingModel.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    ClusterRankingModel.prototype.getSum = function () {
        return this.sum;
    };
    ClusterRankingModel.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    ClusterRankingModel.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    ClusterRankingModel.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    ClusterRankingModel.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    ClusterRankingModel.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    ClusterRankingModel.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    ClusterRankingModel.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    ClusterRankingModel.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    ClusterRankingModel.prototype.getRankingRewards = function () {
        return this.rankingRewards;
    };
    ClusterRankingModel.prototype.setRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    ClusterRankingModel.prototype.withRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    ClusterRankingModel.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    ClusterRankingModel.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    ClusterRankingModel.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    ClusterRankingModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ClusterRankingModel()
            .withClusterRankingModelId(data["clusterRankingModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withClusterType(data["clusterType"])
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
    ClusterRankingModel.prototype.toDict = function () {
        return {
            "clusterRankingModelId": this.getClusterRankingModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "clusterType": this.getClusterType(),
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
    return ClusterRankingModel;
}());
exports.default = ClusterRankingModel;
//# sourceMappingURL=ClusterRankingModel.js.map