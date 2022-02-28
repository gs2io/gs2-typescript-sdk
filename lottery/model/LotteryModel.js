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
var LotteryModel = /** @class */ (function () {
    function LotteryModel() {
        this.lotteryModelId = null;
        this.name = null;
        this.metadata = null;
        this.mode = null;
        this.method = null;
        this.prizeTableName = null;
        this.choicePrizeTableScriptId = null;
    }
    LotteryModel.getRegion = function (grn) {
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
    LotteryModel.getOwnerId = function (grn) {
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
    LotteryModel.getNamespaceName = function (grn) {
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
    LotteryModel.getLotteryName = function (grn) {
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
    LotteryModel.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getLotteryName(grn) == null) {
            return false;
        }
        return true;
    };
    LotteryModel.createGrn = function (region, ownerId, namespaceName, lotteryName) {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (lotteryName == null || lotteryName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName)
            .replace('{lotteryName}', lotteryName);
    };
    LotteryModel.prototype.getLotteryModelId = function () {
        return this.lotteryModelId;
    };
    LotteryModel.prototype.setLotteryModelId = function (lotteryModelId) {
        this.lotteryModelId = lotteryModelId;
        return this;
    };
    LotteryModel.prototype.withLotteryModelId = function (lotteryModelId) {
        this.lotteryModelId = lotteryModelId;
        return this;
    };
    LotteryModel.prototype.getName = function () {
        return this.name;
    };
    LotteryModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    LotteryModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    LotteryModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    LotteryModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    LotteryModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    LotteryModel.prototype.getMode = function () {
        return this.mode;
    };
    LotteryModel.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    LotteryModel.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    LotteryModel.prototype.getMethod = function () {
        return this.method;
    };
    LotteryModel.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    LotteryModel.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    LotteryModel.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    LotteryModel.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    LotteryModel.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    LotteryModel.prototype.getChoicePrizeTableScriptId = function () {
        return this.choicePrizeTableScriptId;
    };
    LotteryModel.prototype.setChoicePrizeTableScriptId = function (choicePrizeTableScriptId) {
        this.choicePrizeTableScriptId = choicePrizeTableScriptId;
        return this;
    };
    LotteryModel.prototype.withChoicePrizeTableScriptId = function (choicePrizeTableScriptId) {
        this.choicePrizeTableScriptId = choicePrizeTableScriptId;
        return this;
    };
    LotteryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryModel()
            .withLotteryModelId(data["lotteryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withMode(data["mode"])
            .withMethod(data["method"])
            .withPrizeTableName(data["prizeTableName"])
            .withChoicePrizeTableScriptId(data["choicePrizeTableScriptId"]);
    };
    LotteryModel.prototype.toDict = function () {
        return {
            "lotteryModelId": this.getLotteryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "mode": this.getMode(),
            "method": this.getMethod(),
            "prizeTableName": this.getPrizeTableName(),
            "choicePrizeTableScriptId": this.getChoicePrizeTableScriptId(),
        };
    };
    return LotteryModel;
}());
exports.default = LotteryModel;
//# sourceMappingURL=LotteryModel.js.map