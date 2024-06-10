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
var Gs2Ranking2 = tslib_1.__importStar(require("../model"));
var ReceiveClusterRankingReceivedRewardResult = /** @class */ (function () {
    function ReceiveClusterRankingReceivedRewardResult() {
        this.item = null;
        this.acquireActions = null;
        this.transactionId = null;
        this.stampSheet = null;
        this.stampSheetEncryptionKeyId = null;
        this.autoRunStampSheet = null;
    }
    ReceiveClusterRankingReceivedRewardResult.prototype.getItem = function () {
        return this.item;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.getStampSheet = function () {
        return this.stampSheet;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.setStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.withStampSheet = function (stampSheet) {
        this.stampSheet = stampSheet;
        return this;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.getStampSheetEncryptionKeyId = function () {
        return this.stampSheetEncryptionKeyId;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.setStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.withStampSheetEncryptionKeyId = function (stampSheetEncryptionKeyId) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.getAutoRunStampSheet = function () {
        return this.autoRunStampSheet;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.setAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.withAutoRunStampSheet = function (autoRunStampSheet) {
        this.autoRunStampSheet = autoRunStampSheet;
        return this;
    };
    ReceiveClusterRankingReceivedRewardResult.fromDict = function (data) {
        return new ReceiveClusterRankingReceivedRewardResult()
            .withItem(Gs2Ranking2.ClusterRankingModel.fromDict(data["item"]))
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Ranking2.AcquireAction.fromDict(item);
            }) : [])
            .withTransactionId(data["transactionId"])
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"])
            .withAutoRunStampSheet(data["autoRunStampSheet"]);
    };
    ReceiveClusterRankingReceivedRewardResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "transactionId": this.getTransactionId(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
            "autoRunStampSheet": this.getAutoRunStampSheet(),
        };
    };
    return ReceiveClusterRankingReceivedRewardResult;
}());
exports.default = ReceiveClusterRankingReceivedRewardResult;
//# sourceMappingURL=ReceiveClusterRankingReceivedRewardResult.js.map