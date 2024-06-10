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
var RankingReward_1 = tslib_1.__importDefault(require("./RankingReward"));
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:master:model:global:{rankingName}";
var GlobalRankingModelMaster = /** @class */ (function () {
    function GlobalRankingModelMaster() {
        this.globalRankingModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.sum = null;
        this.orderDirection = null;
        this.entryPeriodEventId = null;
        this.rankingRewards = null;
        this.accessPeriodEventId = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    GlobalRankingModelMaster.getRegion = function (grn) {
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
    GlobalRankingModelMaster.getOwnerId = function (grn) {
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
    GlobalRankingModelMaster.getNamespaceName = function (grn) {
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
    GlobalRankingModelMaster.getRankingName = function (grn) {
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
    GlobalRankingModelMaster.isValid = function (grn) {
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
    GlobalRankingModelMaster.createGrn = function (region, ownerId, namespaceName, rankingName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '');
    };
    GlobalRankingModelMaster.prototype.getGlobalRankingModelId = function () {
        return this.globalRankingModelId;
    };
    GlobalRankingModelMaster.prototype.setGlobalRankingModelId = function (globalRankingModelId) {
        this.globalRankingModelId = globalRankingModelId;
        return this;
    };
    GlobalRankingModelMaster.prototype.withGlobalRankingModelId = function (globalRankingModelId) {
        this.globalRankingModelId = globalRankingModelId;
        return this;
    };
    GlobalRankingModelMaster.prototype.getName = function () {
        return this.name;
    };
    GlobalRankingModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    GlobalRankingModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    GlobalRankingModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    GlobalRankingModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    GlobalRankingModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    GlobalRankingModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    GlobalRankingModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GlobalRankingModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GlobalRankingModelMaster.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    GlobalRankingModelMaster.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    GlobalRankingModelMaster.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    GlobalRankingModelMaster.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    GlobalRankingModelMaster.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    GlobalRankingModelMaster.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    GlobalRankingModelMaster.prototype.getSum = function () {
        return this.sum;
    };
    GlobalRankingModelMaster.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    GlobalRankingModelMaster.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    GlobalRankingModelMaster.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    GlobalRankingModelMaster.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    GlobalRankingModelMaster.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    GlobalRankingModelMaster.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    GlobalRankingModelMaster.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    GlobalRankingModelMaster.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    GlobalRankingModelMaster.prototype.getRankingRewards = function () {
        return this.rankingRewards;
    };
    GlobalRankingModelMaster.prototype.setRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    GlobalRankingModelMaster.prototype.withRankingRewards = function (rankingRewards) {
        this.rankingRewards = rankingRewards;
        return this;
    };
    GlobalRankingModelMaster.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    GlobalRankingModelMaster.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    GlobalRankingModelMaster.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    GlobalRankingModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    GlobalRankingModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GlobalRankingModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GlobalRankingModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    GlobalRankingModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    GlobalRankingModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    GlobalRankingModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    GlobalRankingModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GlobalRankingModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    GlobalRankingModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GlobalRankingModelMaster()
            .withGlobalRankingModelId(data["globalRankingModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withOrderDirection(data["orderDirection"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withRankingRewards(data.rankingRewards ?
            data.rankingRewards.map(function (item) {
                return RankingReward_1.default.fromDict(item);
            }) : [])
            .withAccessPeriodEventId(data["accessPeriodEventId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    GlobalRankingModelMaster.prototype.toDict = function () {
        return {
            "globalRankingModelId": this.getGlobalRankingModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "orderDirection": this.getOrderDirection(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "rankingRewards": this.getRankingRewards() ?
                this.getRankingRewards().map(function (item) {
                    return item.toDict();
                }) : [],
            "accessPeriodEventId": this.getAccessPeriodEventId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return GlobalRankingModelMaster;
}());
exports.default = GlobalRankingModelMaster;
//# sourceMappingURL=GlobalRankingModelMaster.js.map