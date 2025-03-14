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
var Gs2Exchange = tslib_1.__importStar(require("../../exchange/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:exchange:{namespaceName}:model:{rateName}";
var RateModelMaster = /** @class */ (function () {
    function RateModelMaster() {
        this.rateModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.verifyActions = null;
        this.consumeActions = null;
        this.timingType = null;
        this.lockTime = null;
        this.acquireActions = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    RateModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RateModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RateModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RateModelMaster.getRateName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RateModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getRateName(grn) == null || this.getRateName(grn) === '') {
            return false;
        }
        return true;
    };
    RateModelMaster.createGrn = function (region, ownerId, namespaceName, rateName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rateName}', rateName !== null && rateName !== void 0 ? rateName : '');
    };
    RateModelMaster.prototype.getRateModelId = function () {
        return this.rateModelId;
    };
    RateModelMaster.prototype.setRateModelId = function (rateModelId) {
        this.rateModelId = rateModelId;
        return this;
    };
    RateModelMaster.prototype.withRateModelId = function (rateModelId) {
        this.rateModelId = rateModelId;
        return this;
    };
    RateModelMaster.prototype.getName = function () {
        return this.name;
    };
    RateModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RateModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RateModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    RateModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    RateModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    RateModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    RateModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RateModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RateModelMaster.prototype.getVerifyActions = function () {
        return this.verifyActions;
    };
    RateModelMaster.prototype.setVerifyActions = function (verifyActions) {
        this.verifyActions = verifyActions;
        return this;
    };
    RateModelMaster.prototype.withVerifyActions = function (verifyActions) {
        this.verifyActions = verifyActions;
        return this;
    };
    RateModelMaster.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    RateModelMaster.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    RateModelMaster.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    RateModelMaster.prototype.getTimingType = function () {
        return this.timingType;
    };
    RateModelMaster.prototype.setTimingType = function (timingType) {
        this.timingType = timingType;
        return this;
    };
    RateModelMaster.prototype.withTimingType = function (timingType) {
        this.timingType = timingType;
        return this;
    };
    RateModelMaster.prototype.getLockTime = function () {
        return this.lockTime;
    };
    RateModelMaster.prototype.setLockTime = function (lockTime) {
        this.lockTime = lockTime;
        return this;
    };
    RateModelMaster.prototype.withLockTime = function (lockTime) {
        this.lockTime = lockTime;
        return this;
    };
    RateModelMaster.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    RateModelMaster.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    RateModelMaster.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    RateModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    RateModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RateModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    RateModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    RateModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RateModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    RateModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    RateModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    RateModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    RateModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RateModelMaster()
            .withRateModelId(data["rateModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withVerifyActions(data.verifyActions ?
            data.verifyActions.map(function (item) {
                return Gs2Exchange.VerifyAction.fromDict(item);
            }) : null)
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return Gs2Exchange.ConsumeAction.fromDict(item);
            }) : null)
            .withTimingType(data["timingType"])
            .withLockTime(data["lockTime"])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Exchange.AcquireAction.fromDict(item);
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    RateModelMaster.prototype.toDict = function () {
        return {
            "rateModelId": this.getRateModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "verifyActions": this.getVerifyActions() ?
                this.getVerifyActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "timingType": this.getTimingType(),
            "lockTime": this.getLockTime(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return RateModelMaster;
}());
exports.default = RateModelMaster;
//# sourceMappingURL=RateModelMaster.js.map