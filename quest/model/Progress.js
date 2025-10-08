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
var Gs2Quest = tslib_1.__importStar(require("../../quest/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:quest:{namespaceName}:user:{userId}:progress";
var Progress = /** @class */ (function () {
    function Progress() {
        this.progressId = null;
        this.userId = null;
        this.transactionId = null;
        this.questModelId = null;
        this.randomSeed = null;
        this.rewards = null;
        this.failedRewards = null;
        this.metadata = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Progress.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Progress.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Progress.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Progress.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Progress.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        return true;
    };
    Progress.createGrn = function (region, ownerId, namespaceName, userId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '');
    };
    Progress.prototype.getProgressId = function () {
        return this.progressId;
    };
    Progress.prototype.setProgressId = function (progressId) {
        this.progressId = progressId;
        return this;
    };
    Progress.prototype.withProgressId = function (progressId) {
        this.progressId = progressId;
        return this;
    };
    Progress.prototype.getUserId = function () {
        return this.userId;
    };
    Progress.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Progress.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Progress.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    Progress.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    Progress.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    Progress.prototype.getQuestModelId = function () {
        return this.questModelId;
    };
    Progress.prototype.setQuestModelId = function (questModelId) {
        this.questModelId = questModelId;
        return this;
    };
    Progress.prototype.withQuestModelId = function (questModelId) {
        this.questModelId = questModelId;
        return this;
    };
    Progress.prototype.getRandomSeed = function () {
        return this.randomSeed;
    };
    Progress.prototype.setRandomSeed = function (randomSeed) {
        this.randomSeed = randomSeed;
        return this;
    };
    Progress.prototype.withRandomSeed = function (randomSeed) {
        this.randomSeed = randomSeed;
        return this;
    };
    Progress.prototype.getRewards = function () {
        return this.rewards;
    };
    Progress.prototype.setRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    Progress.prototype.withRewards = function (rewards) {
        this.rewards = rewards;
        return this;
    };
    Progress.prototype.getFailedRewards = function () {
        return this.failedRewards;
    };
    Progress.prototype.setFailedRewards = function (failedRewards) {
        this.failedRewards = failedRewards;
        return this;
    };
    Progress.prototype.withFailedRewards = function (failedRewards) {
        this.failedRewards = failedRewards;
        return this;
    };
    Progress.prototype.getMetadata = function () {
        return this.metadata;
    };
    Progress.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Progress.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Progress.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Progress.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Progress.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Progress.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Progress.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Progress.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Progress.prototype.getRevision = function () {
        return this.revision;
    };
    Progress.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Progress.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Progress.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Progress()
            .withProgressId(data["progressId"])
            .withUserId(data["userId"])
            .withTransactionId(data["transactionId"])
            .withQuestModelId(data["questModelId"])
            .withRandomSeed(data["randomSeed"])
            .withRewards(data.rewards ?
            data.rewards.map(function (item) {
                return Gs2Quest.Reward.fromDict(item);
            }) : null)
            .withFailedRewards(data.failedRewards ?
            data.failedRewards.map(function (item) {
                return Gs2Quest.Reward.fromDict(item);
            }) : null)
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Progress.prototype.toDict = function () {
        return {
            "progressId": this.getProgressId(),
            "userId": this.getUserId(),
            "transactionId": this.getTransactionId(),
            "questModelId": this.getQuestModelId(),
            "randomSeed": this.getRandomSeed(),
            "rewards": this.getRewards() ?
                this.getRewards().map(function (item) {
                    return item.toDict();
                }) : null,
            "failedRewards": this.getFailedRewards() ?
                this.getFailedRewards().map(function (item) {
                    return item.toDict();
                }) : null,
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Progress;
}());
exports.default = Progress;
//# sourceMappingURL=Progress.js.map