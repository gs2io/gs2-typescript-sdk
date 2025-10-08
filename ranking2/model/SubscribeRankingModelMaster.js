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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:master:model:subscribe:{rankingName}";
var SubscribeRankingModelMaster = /** @class */ (function () {
    function SubscribeRankingModelMaster() {
        this.subscribeRankingModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.sum = null;
        this.orderDirection = null;
        this.entryPeriodEventId = null;
        this.accessPeriodEventId = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    SubscribeRankingModelMaster.getRegion = function (grn) {
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
    SubscribeRankingModelMaster.getOwnerId = function (grn) {
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
    SubscribeRankingModelMaster.getNamespaceName = function (grn) {
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
    SubscribeRankingModelMaster.getRankingName = function (grn) {
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
    SubscribeRankingModelMaster.isValid = function (grn) {
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
    SubscribeRankingModelMaster.createGrn = function (region, ownerId, namespaceName, rankingName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '');
    };
    SubscribeRankingModelMaster.prototype.getSubscribeRankingModelId = function () {
        return this.subscribeRankingModelId;
    };
    SubscribeRankingModelMaster.prototype.setSubscribeRankingModelId = function (subscribeRankingModelId) {
        this.subscribeRankingModelId = subscribeRankingModelId;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withSubscribeRankingModelId = function (subscribeRankingModelId) {
        this.subscribeRankingModelId = subscribeRankingModelId;
        return this;
    };
    SubscribeRankingModelMaster.prototype.getName = function () {
        return this.name;
    };
    SubscribeRankingModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SubscribeRankingModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    SubscribeRankingModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    SubscribeRankingModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    SubscribeRankingModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SubscribeRankingModelMaster.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    SubscribeRankingModelMaster.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    SubscribeRankingModelMaster.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    SubscribeRankingModelMaster.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    SubscribeRankingModelMaster.prototype.getSum = function () {
        return this.sum;
    };
    SubscribeRankingModelMaster.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    SubscribeRankingModelMaster.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    SubscribeRankingModelMaster.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    SubscribeRankingModelMaster.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    SubscribeRankingModelMaster.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    SubscribeRankingModelMaster.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    SubscribeRankingModelMaster.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    SubscribeRankingModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    SubscribeRankingModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    SubscribeRankingModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    SubscribeRankingModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    SubscribeRankingModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    SubscribeRankingModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SubscribeRankingModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    SubscribeRankingModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SubscribeRankingModelMaster()
            .withSubscribeRankingModelId(data["subscribeRankingModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withOrderDirection(data["orderDirection"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    SubscribeRankingModelMaster.prototype.toDict = function () {
        return {
            "subscribeRankingModelId": this.getSubscribeRankingModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "orderDirection": this.getOrderDirection(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return SubscribeRankingModelMaster;
}());
exports.default = SubscribeRankingModelMaster;
//# sourceMappingURL=SubscribeRankingModelMaster.js.map