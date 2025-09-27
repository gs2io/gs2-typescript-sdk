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
var TransactionSetting = /** @class */ (function () {
    function TransactionSetting() {
        this.enableAtomicCommit = null;
        this.transactionUseDistributor = null;
        this.commitScriptResultInUseDistributor = null;
        this.acquireActionUseJobQueue = null;
        this.distributorNamespaceId = null;
        this.queueNamespaceId = null;
    }
    TransactionSetting.prototype.getEnableAtomicCommit = function () {
        return this.enableAtomicCommit;
    };
    TransactionSetting.prototype.setEnableAtomicCommit = function (enableAtomicCommit) {
        this.enableAtomicCommit = enableAtomicCommit;
        return this;
    };
    TransactionSetting.prototype.withEnableAtomicCommit = function (enableAtomicCommit) {
        this.enableAtomicCommit = enableAtomicCommit;
        return this;
    };
    TransactionSetting.prototype.getTransactionUseDistributor = function () {
        return this.transactionUseDistributor;
    };
    TransactionSetting.prototype.setTransactionUseDistributor = function (transactionUseDistributor) {
        this.transactionUseDistributor = transactionUseDistributor;
        return this;
    };
    TransactionSetting.prototype.withTransactionUseDistributor = function (transactionUseDistributor) {
        this.transactionUseDistributor = transactionUseDistributor;
        return this;
    };
    TransactionSetting.prototype.getCommitScriptResultInUseDistributor = function () {
        return this.commitScriptResultInUseDistributor;
    };
    TransactionSetting.prototype.setCommitScriptResultInUseDistributor = function (commitScriptResultInUseDistributor) {
        this.commitScriptResultInUseDistributor = commitScriptResultInUseDistributor;
        return this;
    };
    TransactionSetting.prototype.withCommitScriptResultInUseDistributor = function (commitScriptResultInUseDistributor) {
        this.commitScriptResultInUseDistributor = commitScriptResultInUseDistributor;
        return this;
    };
    TransactionSetting.prototype.getAcquireActionUseJobQueue = function () {
        return this.acquireActionUseJobQueue;
    };
    TransactionSetting.prototype.setAcquireActionUseJobQueue = function (acquireActionUseJobQueue) {
        this.acquireActionUseJobQueue = acquireActionUseJobQueue;
        return this;
    };
    TransactionSetting.prototype.withAcquireActionUseJobQueue = function (acquireActionUseJobQueue) {
        this.acquireActionUseJobQueue = acquireActionUseJobQueue;
        return this;
    };
    TransactionSetting.prototype.getDistributorNamespaceId = function () {
        return this.distributorNamespaceId;
    };
    TransactionSetting.prototype.setDistributorNamespaceId = function (distributorNamespaceId) {
        this.distributorNamespaceId = distributorNamespaceId;
        return this;
    };
    TransactionSetting.prototype.withDistributorNamespaceId = function (distributorNamespaceId) {
        this.distributorNamespaceId = distributorNamespaceId;
        return this;
    };
    TransactionSetting.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    TransactionSetting.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    TransactionSetting.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    TransactionSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TransactionSetting()
            .withEnableAtomicCommit(data["enableAtomicCommit"])
            .withTransactionUseDistributor(data["transactionUseDistributor"])
            .withCommitScriptResultInUseDistributor(data["commitScriptResultInUseDistributor"])
            .withAcquireActionUseJobQueue(data["acquireActionUseJobQueue"])
            .withDistributorNamespaceId(data["distributorNamespaceId"])
            .withQueueNamespaceId(data["queueNamespaceId"]);
    };
    TransactionSetting.prototype.toDict = function () {
        return {
            "enableAtomicCommit": this.getEnableAtomicCommit(),
            "transactionUseDistributor": this.getTransactionUseDistributor(),
            "commitScriptResultInUseDistributor": this.getCommitScriptResultInUseDistributor(),
            "acquireActionUseJobQueue": this.getAcquireActionUseJobQueue(),
            "distributorNamespaceId": this.getDistributorNamespaceId(),
            "queueNamespaceId": this.getQueueNamespaceId(),
        };
    };
    return TransactionSetting;
}());
exports.default = TransactionSetting;
//# sourceMappingURL=TransactionSetting.js.map