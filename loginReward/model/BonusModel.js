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
var Reward_1 = tslib_1.__importDefault(require("./Reward"));
var ConsumeAction_1 = tslib_1.__importDefault(require("./ConsumeAction"));
var grnFormat = "grn:gs2:{region}:{ownerId}:loginReward:{namespaceName}:bonusModel:{bonusModelName}";
var BonusModel = /** @class */ (function () {
    function BonusModel() {
        this.bonusModelId = null;
        this.name = null;
        this.metadata = null;
        this.mode = null;
        this.periodEventId = null;
        this.resetHour = null;
        this.repeat = null;
        this.rewards = null;
        this.missedReceiveRelief = null;
        this.missedReceiveReliefConsumeActions = null;
    }
    BonusModel.getRegion = function (grn) {
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
    BonusModel.getOwnerId = function (grn) {
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
    BonusModel.getNamespaceName = function (grn) {
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
    BonusModel.getBonusModelName = function (grn) {
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
    BonusModel.isValid = function (grn) {
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
    BonusModel.createGrn = function (region, ownerId, namespaceName, bonusModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{bonusModelName}', bonusModelName !== null && bonusModelName !== void 0 ? bonusModelName : '');
    };
    BonusModel.prototype.getBonusModelId = function () {
        return this.bonusModelId;
    };
    BonusModel.prototype.setBonusModelId = function (bonusModelId) {
        this.bonusModelId = bonusModelId;
        return this;
    };
    BonusModel.prototype.withBonusModelId = function (bonusModelId) {
        this.bonusModelId = bonusModelId;
        return this;
    };
    BonusModel.prototype.getName = function () {
        return this.name;
    };
    BonusModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    BonusModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    BonusModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    BonusModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BonusModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    BonusModel.prototype.getMode = function () {
        return this.mode;
    };
    BonusModel.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    BonusModel.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    BonusModel.prototype.getPeriodEventId = function () {
        return this.periodEventId;
    };
    BonusModel.prototype.setPeriodEventId = function (periodEventId) {
        this.periodEventId = periodEventId;
        return this;
    };
    BonusModel.prototype.withPeriodEventId = function (periodEventId) {
        this.periodEventId = periodEventId;
        return this;
    };
    BonusModel.prototype.getResetHour = function () {
        return this.resetHour;
    };
    BonusModel.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    BonusModel.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    BonusModel.prototype.getRepeat = function () {
        return this.repeat;
    };
    BonusModel.prototype.setRepeat = function (repeat) {
        this.repeat = repeat;
        return this;
    };
    BonusModel.prototype.withRepeat = function (repeat) {
        this.repeat = repeat;
        return this;
    };
    BonusModel.prototype.getRewards = function () {
        return this.rewards;
    };
    BonusModel.prototype.setRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    BonusModel.prototype.withRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    BonusModel.prototype.getMissedReceiveRelief = function () {
        return this.missedReceiveRelief;
    };
    BonusModel.prototype.setMissedReceiveRelief = function (missedReceiveRelief) {
        this.missedReceiveRelief = missedReceiveRelief;
        return this;
    };
    BonusModel.prototype.withMissedReceiveRelief = function (missedReceiveRelief) {
        this.missedReceiveRelief = missedReceiveRelief;
        return this;
    };
    BonusModel.prototype.getMissedReceiveReliefConsumeActions = function () {
        return this.missedReceiveReliefConsumeActions;
    };
    BonusModel.prototype.setMissedReceiveReliefConsumeActions = function (missedReceiveReliefConsumeActions) {
        this.missedReceiveReliefConsumeActions = missedReceiveReliefConsumeActions;
        return this;
    };
    BonusModel.prototype.withMissedReceiveReliefConsumeActions = function (missedReceiveReliefConsumeActions) {
        this.missedReceiveReliefConsumeActions = missedReceiveReliefConsumeActions;
        return this;
    };
    BonusModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BonusModel()
            .withBonusModelId(data["bonusModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withMode(data["mode"])
            .withPeriodEventId(data["periodEventId"])
            .withResetHour(data["resetHour"])
            .withRepeat(data["repeat"])
            .withRewards(data.rewards ?
            data.rewards.map(function (item) {
                return Reward_1.default.fromDict(item);
            }) : [])
            .withMissedReceiveRelief(data["missedReceiveRelief"])
            .withMissedReceiveReliefConsumeActions(data.missedReceiveReliefConsumeActions ?
            data.missedReceiveReliefConsumeActions.map(function (item) {
                return ConsumeAction_1.default.fromDict(item);
            }) : []);
    };
    BonusModel.prototype.toDict = function () {
        return {
            "bonusModelId": this.getBonusModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "mode": this.getMode(),
            "periodEventId": this.getPeriodEventId(),
            "resetHour": this.getResetHour(),
            "repeat": this.getRepeat(),
            "rewards": this.getRewards() ?
                this.getRewards().map(function (item) {
                    return item.toDict();
                }) : [],
            "missedReceiveRelief": this.getMissedReceiveRelief(),
            "missedReceiveReliefConsumeActions": this.getMissedReceiveReliefConsumeActions() ?
                this.getMissedReceiveReliefConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return BonusModel;
}());
exports.default = BonusModel;
//# sourceMappingURL=BonusModel.js.map