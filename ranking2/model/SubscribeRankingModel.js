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
var grnFormat = "grn:gs2:{region}:{ownerId}:ranking2:{namespaceName}:subscribe:{rankingName}";
var SubscribeRankingModel = /** @class */ (function () {
    function SubscribeRankingModel() {
        this.subscribeRankingModelId = null;
        this.name = null;
        this.metadata = null;
        this.minimumValue = null;
        this.maximumValue = null;
        this.sum = null;
        this.orderDirection = null;
        this.entryPeriodEventId = null;
        this.accessPeriodEventId = null;
    }
    SubscribeRankingModel.getRegion = function (grn) {
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
    SubscribeRankingModel.getOwnerId = function (grn) {
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
    SubscribeRankingModel.getNamespaceName = function (grn) {
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
    SubscribeRankingModel.getRankingName = function (grn) {
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
    SubscribeRankingModel.isValid = function (grn) {
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
    SubscribeRankingModel.createGrn = function (region, ownerId, namespaceName, rankingName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rankingName}', rankingName !== null && rankingName !== void 0 ? rankingName : '');
    };
    SubscribeRankingModel.prototype.getSubscribeRankingModelId = function () {
        return this.subscribeRankingModelId;
    };
    SubscribeRankingModel.prototype.setSubscribeRankingModelId = function (subscribeRankingModelId) {
        this.subscribeRankingModelId = subscribeRankingModelId;
        return this;
    };
    SubscribeRankingModel.prototype.withSubscribeRankingModelId = function (subscribeRankingModelId) {
        this.subscribeRankingModelId = subscribeRankingModelId;
        return this;
    };
    SubscribeRankingModel.prototype.getName = function () {
        return this.name;
    };
    SubscribeRankingModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SubscribeRankingModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SubscribeRankingModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    SubscribeRankingModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SubscribeRankingModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SubscribeRankingModel.prototype.getMinimumValue = function () {
        return this.minimumValue;
    };
    SubscribeRankingModel.prototype.setMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    SubscribeRankingModel.prototype.withMinimumValue = function (minimumValue) {
        this.minimumValue = minimumValue;
        return this;
    };
    SubscribeRankingModel.prototype.getMaximumValue = function () {
        return this.maximumValue;
    };
    SubscribeRankingModel.prototype.setMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    SubscribeRankingModel.prototype.withMaximumValue = function (maximumValue) {
        this.maximumValue = maximumValue;
        return this;
    };
    SubscribeRankingModel.prototype.getSum = function () {
        return this.sum;
    };
    SubscribeRankingModel.prototype.setSum = function (sum) {
        this.sum = sum;
        return this;
    };
    SubscribeRankingModel.prototype.withSum = function (sum) {
        this.sum = sum;
        return this;
    };
    SubscribeRankingModel.prototype.getOrderDirection = function () {
        return this.orderDirection;
    };
    SubscribeRankingModel.prototype.setOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    SubscribeRankingModel.prototype.withOrderDirection = function (orderDirection) {
        this.orderDirection = orderDirection;
        return this;
    };
    SubscribeRankingModel.prototype.getEntryPeriodEventId = function () {
        return this.entryPeriodEventId;
    };
    SubscribeRankingModel.prototype.setEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    SubscribeRankingModel.prototype.withEntryPeriodEventId = function (entryPeriodEventId) {
        this.entryPeriodEventId = entryPeriodEventId;
        return this;
    };
    SubscribeRankingModel.prototype.getAccessPeriodEventId = function () {
        return this.accessPeriodEventId;
    };
    SubscribeRankingModel.prototype.setAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    SubscribeRankingModel.prototype.withAccessPeriodEventId = function (accessPeriodEventId) {
        this.accessPeriodEventId = accessPeriodEventId;
        return this;
    };
    SubscribeRankingModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SubscribeRankingModel()
            .withSubscribeRankingModelId(data["subscribeRankingModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withMinimumValue(data["minimumValue"])
            .withMaximumValue(data["maximumValue"])
            .withSum(data["sum"])
            .withOrderDirection(data["orderDirection"])
            .withEntryPeriodEventId(data["entryPeriodEventId"])
            .withAccessPeriodEventId(data["accessPeriodEventId"]);
    };
    SubscribeRankingModel.prototype.toDict = function () {
        return {
            "subscribeRankingModelId": this.getSubscribeRankingModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "minimumValue": this.getMinimumValue(),
            "maximumValue": this.getMaximumValue(),
            "sum": this.getSum(),
            "orderDirection": this.getOrderDirection(),
            "entryPeriodEventId": this.getEntryPeriodEventId(),
            "accessPeriodEventId": this.getAccessPeriodEventId(),
        };
    };
    return SubscribeRankingModel;
}());
exports.default = SubscribeRankingModel;
//# sourceMappingURL=SubscribeRankingModel.js.map