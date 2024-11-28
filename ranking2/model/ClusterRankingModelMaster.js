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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:master:model:cluster:{rankingName}";
var ClusterRankingModelMaster = /** @class */ (function () {
    function ClusterRankingModelMaster() {
        this.clusterRankingModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.clusterType = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.sum = null;
        this.scoreTtlDays = null;
        this.orderDirection = null;
        this.entryPeriodEventId = null;
        this.rankingRewards = null;
        this.accessPeriodEventId = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    ClusterRankingModelMaster.getRegion = function (grn) {
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
    ClusterRankingModelMaster.getOwnerId = function (grn) {
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
    ClusterRankingModelMaster.getNamespaceName = function (grn) {
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
    ClusterRankingModelMaster.getRankingName = function (grn) {
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
    ClusterRankingModelMaster.isValid = function (grn) {
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
    ClusterRankingModelMaster.createGrn = function (region, ownerId, namespaceName, rankingName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '');
    };
    ClusterRankingModelMaster.prototype.getClusterRankingModelId = function () {
        return this.clusterRankingModelId;
    };
    ClusterRankingModelMaster.prototype.setClusterRankingModelId = function (clusterRankingModelId) {
        this.clusterRankingModelId = clusterRankingModelId;
        return this;
    };
    ClusterRankingModelMaster.prototype.withClusterRankingModelId = function (clusterRankingModelId) {
        this.clusterRankingModelId = clusterRankingModelId;
        return this;
    };
    ClusterRankingModelMaster.prototype.getName = function () {
        return this.name;
    };
    ClusterRankingModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ClusterRankingModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ClusterRankingModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    ClusterRankingModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    ClusterRankingModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    ClusterRankingModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    ClusterRankingModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ClusterRankingModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    ClusterRankingModelMaster.prototype.getClusterType = function () {
        return this.clusterType;
    };
    ClusterRankingModelMaster.prototype.setClusterType = function (clusterType) {
        this.clusterType = clusterType;
        return this;
    };
    ClusterRankingModelMaster.prototype.withClusterType = function (clusterType) {
        this.clusterType = clusterType;
        return this;
    };
    ClusterRankingModelMaster.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    ClusterRankingModelMaster.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    ClusterRankingModelMaster.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    ClusterRankingModelMaster.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    ClusterRankingModelMaster.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    ClusterRankingModelMaster.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    ClusterRankingModelMaster.prototype.getSum = function () {
        return this.sum;
    };
    ClusterRankingModelMaster.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    ClusterRankingModelMaster.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    ClusterRankingModelMaster.prototype.getScoreTtlDays = function () {
        return this.scoreTtlDays;
    };
    ClusterRankingModelMaster.prototype.setScoreTtlDays = function (scoreTtlDays) {
        this.scoreTtlDays = scoreTtlDays;
        return this;
    };
    ClusterRankingModelMaster.prototype.withScoreTtlDays = function (scoreTtlDays) {
        this.scoreTtlDays = scoreTtlDays;
        return this;
    };
    ClusterRankingModelMaster.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    ClusterRankingModelMaster.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    ClusterRankingModelMaster.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    ClusterRankingModelMaster.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    ClusterRankingModelMaster.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    ClusterRankingModelMaster.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    ClusterRankingModelMaster.prototype.getRankingRewards = function () {
        return this.rankingRewards;
    };
    ClusterRankingModelMaster.prototype.setRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    ClusterRankingModelMaster.prototype.withRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    ClusterRankingModelMaster.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    ClusterRankingModelMaster.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    ClusterRankingModelMaster.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    ClusterRankingModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    ClusterRankingModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ClusterRankingModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ClusterRankingModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    ClusterRankingModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ClusterRankingModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ClusterRankingModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    ClusterRankingModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ClusterRankingModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ClusterRankingModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ClusterRankingModelMaster()
            .withClusterRankingModelId(data["clusterRankingModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withClusterType(data["clusterType"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withScoreTtlDays(data["scoreTtlDays"])
            .withOrderDirection(data["orderDirection"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withRankingRewards(data.rankingRewards ?
            data.rankingRewards.map(function (item) {
                return Gs2Ranking2.RankingReward.fromDict(item);
            }) : null)
            .withAccessPeriodEventId(data["accessPeriodEventId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    ClusterRankingModelMaster.prototype.toDict = function () {
        return {
            "clusterRankingModelId": this.getClusterRankingModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "clusterType": this.getClusterType(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "scoreTtlDays": this.getScoreTtlDays(),
            "orderDirection": this.getOrderDirection(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "rankingRewards": this.getRankingRewards() ?
                this.getRankingRewards().map(function (item) {
                    return item.toDict();
                }) : null,
            "accessPeriodEventId": this.getAccessPeriodEventId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return ClusterRankingModelMaster;
}());
exports.default = ClusterRankingModelMaster;
//# sourceMappingURL=ClusterRankingModelMaster.js.map