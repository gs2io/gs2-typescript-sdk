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
var AutoRunTransactionSetting = /** @class */ (function () {
    function AutoRunTransactionSetting() {
        this.distributorNamespaceId = null;
        this.queueNamespaceId = null;
    }
    AutoRunTransactionSetting.prototype.getDistributorNamespaceId = function () {
        return this.distributorNamespaceId;
    };
    AutoRunTransactionSetting.prototype.setDistributorNamespaceId = function (distributorNamespaceId) {
        this.distributorNamespaceId = distributorNamespaceId;
        return this;
    };
    AutoRunTransactionSetting.prototype.withDistributorNamespaceId = function (distributorNamespaceId) {
        this.distributorNamespaceId = distributorNamespaceId;
        return this;
    };
    AutoRunTransactionSetting.prototype.getQueueNamespaceId = function () {
        return this.queueNamespaceId;
    };
    AutoRunTransactionSetting.prototype.setQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    AutoRunTransactionSetting.prototype.withQueueNamespaceId = function (queueNamespaceId) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    };
    AutoRunTransactionSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AutoRunTransactionSetting()
            .withDistributorNamespaceId(data["distributorNamespaceId"])
            .withQueueNamespaceId(data["queueNamespaceId"]);
    };
    AutoRunTransactionSetting.prototype.toDict = function () {
        return {
            "distributorNamespaceId": this.getDistributorNamespaceId(),
            "queueNamespaceId": this.getQueueNamespaceId(),
        };
    };
    return AutoRunTransactionSetting;
}());
exports.default = AutoRunTransactionSetting;
//# sourceMappingURL=AutoRunTransactionSetting.js.map