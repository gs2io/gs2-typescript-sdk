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
var grnFormat = "grn:gs2:{region}:{ownerId}:lottery:{namespaceName}:lotteryModel:{lotteryName}";
var LotteryModelMaster = /** @class */ (function () {
    function LotteryModelMaster() {
        this.lotteryModelId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.mode = null;
        this.method = null;
        this.prizeTableName = null;
        this.choicePrizeTableScriptId = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    LotteryModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryModelMaster.getLotteryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getLotteryName(grn) == null || this.getLotteryName(grn) === '') {
            return false;
        }
        return true;
    };
    LotteryModelMaster.createGrn = function (region, ownerId, namespaceName, lotteryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{lotteryName}', lotteryName !== null && lotteryName !== void 0 ? lotteryName : '');
    };
    LotteryModelMaster.prototype.getLotteryModelId = function () {
        return this.lotteryModelId;
    };
    LotteryModelMaster.prototype.setLotteryModelId = function (lotteryModelId) {
        this.lotteryModelId = lotteryModelId;
        return this;
    };
    LotteryModelMaster.prototype.withLotteryModelId = function (lotteryModelId) {
        this.lotteryModelId = lotteryModelId;
        return this;
    };
    LotteryModelMaster.prototype.getName = function () {
        return this.name;
    };
    LotteryModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    LotteryModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    LotteryModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    LotteryModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    LotteryModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    LotteryModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    LotteryModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    LotteryModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    LotteryModelMaster.prototype.getMode = function () {
        return this.mode;
    };
    LotteryModelMaster.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    LotteryModelMaster.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    LotteryModelMaster.prototype.getMethod = function () {
        return this.method;
    };
    LotteryModelMaster.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    LotteryModelMaster.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    LotteryModelMaster.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    LotteryModelMaster.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    LotteryModelMaster.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    LotteryModelMaster.prototype.getChoicePrizeTableScriptId = function () {
        return this.choicePrizeTableScriptId;
    };
    LotteryModelMaster.prototype.setChoicePrizeTableScriptId = function (choicePrizeTableScriptId) {
        this.choicePrizeTableScriptId = choicePrizeTableScriptId;
        return this;
    };
    LotteryModelMaster.prototype.withChoicePrizeTableScriptId = function (choicePrizeTableScriptId) {
        this.choicePrizeTableScriptId = choicePrizeTableScriptId;
        return this;
    };
    LotteryModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    LotteryModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    LotteryModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    LotteryModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    LotteryModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    LotteryModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    LotteryModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    LotteryModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    LotteryModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    LotteryModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryModelMaster()
            .withLotteryModelId(data["lotteryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withMode(data["mode"])
            .withMethod(data["method"])
            .withPrizeTableName(data["prizeTableName"])
            .withChoicePrizeTableScriptId(data["choicePrizeTableScriptId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    LotteryModelMaster.prototype.toDict = function () {
        return {
            "lotteryModelId": this.getLotteryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "mode": this.getMode(),
            "method": this.getMethod(),
            "prizeTableName": this.getPrizeTableName(),
            "choicePrizeTableScriptId": this.getChoicePrizeTableScriptId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return LotteryModelMaster;
}());
exports.default = LotteryModelMaster;
//# sourceMappingURL=LotteryModelMaster.js.map