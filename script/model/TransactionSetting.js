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
        this.enableAutoRun = null;
        this.distributorNamespaceId = null;
        this.keyId = null;
        this.queueNamespaceId = null;
    }
    TransactionSetting.prototype.getEnableAutoRun = function () {
        return this.enableAutoRun;
    };
    TransactionSetting.prototype.setEnableAutoRun = function (enableAutoRun) {
        this.enableAutoRun = enableAutoRun;
        return this;
    };
    TransactionSetting.prototype.withEnableAutoRun = function (enableAutoRun) {
        this.enableAutoRun = enableAutoRun;
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
    TransactionSetting.prototype.getKeyId = function () {
        return this.keyId;
    };
    TransactionSetting.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    TransactionSetting.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
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
            .withEnableAutoRun(data["enableAutoRun"])
            .withDistributorNamespaceId(data["distributorNamespaceId"])
            .withKeyId(data["keyId"])
            .withQueueNamespaceId(data["queueNamespaceId"]);
    };
    TransactionSetting.prototype.toDict = function () {
        return {
            "enableAutoRun": this.getEnableAutoRun(),
            "distributorNamespaceId": this.getDistributorNamespaceId(),
            "keyId": this.getKeyId(),
            "queueNamespaceId": this.getQueueNamespaceId(),
        };
    };
    return TransactionSetting;
}());
exports.default = TransactionSetting;
//# sourceMappingURL=TransactionSetting.js.map