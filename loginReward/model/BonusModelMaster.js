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
var Gs2LoginReward = tslib_1.__importStar(require("../../loginReward/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:loginReward:{namespaceName}:bonusModel:{bonusModelName}";
var BonusModelMaster = /** @class */ (function () {
    function BonusModelMaster() {
        this.bonusModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.mode = null;
        this.periodEventId = null;
        this.resetHour = null;
        this.repeat = null;
        this.rewards = null;
        this.missedReceiveRelief = null;
        this.missedReceiveReliefVerifyActions = null;
        this.missedReceiveReliefConsumeActions = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    BonusModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{bonusModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BonusModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{bonusModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BonusModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{bonusModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BonusModelMaster.getBonusModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{bonusModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BonusModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getBonusModelName(grn) == null || this.getBonusModelName(grn) === '') {
            return false;
        }
        return true;
    };
    BonusModelMaster.createGrn = function (region, ownerId, namespaceName, bonusModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{bonusModelName}', bonusModelName !== null && bonusModelName !== void 0 ? bonusModelName : '');
    };
    BonusModelMaster.prototype.getBonusModelId = function () {
        return this.bonusModelId;
    };
    BonusModelMaster.prototype.setBonusModelId = function (bonusModelId) {
        this.bonusModelId = bonusModelId;
        return this;
    };
    BonusModelMaster.prototype.withBonusModelId = function (bonusModelId) {
        this.bonusModelId = bonusModelId;
        return this;
    };
    BonusModelMaster.prototype.getName = function () {
        return this.name;
    };
    BonusModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    BonusModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    BonusModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    BonusModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    BonusModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    BonusModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    BonusModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BonusModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BonusModelMaster.prototype.getMode = function () {
        return this.mode;
    };
    BonusModelMaster.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    BonusModelMaster.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    BonusModelMaster.prototype.getPeriodEventId = function () {
        return this.periodEventId;
    };
    BonusModelMaster.prototype.setPeriodEventId = function (periodEventId) {
        this.periodEventId = periodEventId;
        return this;
    };
    BonusModelMaster.prototype.withPeriodEventId = function (periodEventId) {
        this.periodEventId = periodEventId;
        return this;
    };
    BonusModelMaster.prototype.getResetHour = function () {
        return this.resetHour;
    };
    BonusModelMaster.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    BonusModelMaster.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    BonusModelMaster.prototype.getRepeat = function () {
        return this.repeat;
    };
    BonusModelMaster.prototype.setRepeat = function (repeat) {
        this.repeat = repeat;
        return this;
    };
    BonusModelMaster.prototype.withRepeat = function (repeat) {
        this.repeat = repeat;
        return this;
    };
    BonusModelMaster.prototype.getRewards = function () {
        return this.rewards;
    };
    BonusModelMaster.prototype.setRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    BonusModelMaster.prototype.withRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    BonusModelMaster.prototype.getMissedReceiveRelief = function () {
        return this.missedReceiveRelief;
    };
    BonusModelMaster.prototype.setMissedReceiveRelief = function (missedReceiveRelief) {
        this.missedReceiveRelief = missedReceiveRelief;
        return this;
    };
    BonusModelMaster.prototype.withMissedReceiveRelief = function (missedReceiveRelief) {
        this.missedReceiveRelief = missedReceiveRelief;
        return this;
    };
    BonusModelMaster.prototype.getMissedReceiveReliefVerifyActions = function () {
        return this.missedReceiveReliefVerifyActions;
    };
    BonusModelMaster.prototype.setMissedReceiveReliefVerifyActions = function (missedReceiveReliefVerifyActions) {
        this.missedReceiveReliefVerifyActions = missedReceiveReliefVerifyActions;
        return this;
    };
    BonusModelMaster.prototype.withMissedReceiveReliefVerifyActions = function (missedReceiveReliefVerifyActions) {
        this.missedReceiveReliefVerifyActions = missedReceiveReliefVerifyActions;
        return this;
    };
    BonusModelMaster.prototype.getMissedReceiveReliefConsumeActions = function () {
        return this.missedReceiveReliefConsumeActions;
    };
    BonusModelMaster.prototype.setMissedReceiveReliefConsumeActions = function (missedReceiveReliefConsumeActions) {
        this.missedReceiveReliefConsumeActions = missedReceiveReliefConsumeActions;
        return this;
    };
    BonusModelMaster.prototype.withMissedReceiveReliefConsumeActions = function (missedReceiveReliefConsumeActions) {
        this.missedReceiveReliefConsumeActions = missedReceiveReliefConsumeActions;
        return this;
    };
    BonusModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    BonusModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BonusModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BonusModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    BonusModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BonusModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BonusModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    BonusModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    BonusModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    BonusModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BonusModelMaster()
            .withBonusModelId(data["bonusModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMode(data["mode"])
            .withPeriodEventId(data["periodEventId"])
            .withResetHour(data["resetHour"])
            .withRepeat(data["repeat"])
            .withRewards(data.rewards ?
            data.rewards.map(function (item) {
                return Gs2LoginReward.Reward.fromDict(item);
            }) : null)
            .withMissedReceiveRelief(data["missedReceiveRelief"])
            .withMissedReceiveReliefVerifyActions(data.missedReceiveReliefVerifyActions ?
            data.missedReceiveReliefVerifyActions.map(function (item) {
                return Gs2LoginReward.VerifyAction.fromDict(item);
            }) : null)
            .withMissedReceiveReliefConsumeActions(data.missedReceiveReliefConsumeActions ?
            data.missedReceiveReliefConsumeActions.map(function (item) {
                return Gs2LoginReward.ConsumeAction.fromDict(item);
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    BonusModelMaster.prototype.toDict = function () {
        return {
            "bonusModelId": this.getBonusModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "mode": this.getMode(),
            "periodEventId": this.getPeriodEventId(),
            "resetHour": this.getResetHour(),
            "repeat": this.getRepeat(),
            "rewards": this.getRewards() ?
                this.getRewards().map(function (item) {
                    return item.toDict();
                }) : null,
            "missedReceiveRelief": this.getMissedReceiveRelief(),
            "missedReceiveReliefVerifyActions": this.getMissedReceiveReliefVerifyActions() ?
                this.getMissedReceiveReliefVerifyActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "missedReceiveReliefConsumeActions": this.getMissedReceiveReliefConsumeActions() ?
                this.getMissedReceiveReliefConsumeActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return BonusModelMaster;
}());
exports.default = BonusModelMaster;
//# sourceMappingURL=BonusModelMaster.js.map