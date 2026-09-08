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
var TransactionSettingV2 = /** @class */ (function () {
    function TransactionSettingV2() {
        this.distributorNamespaceId = null;
        this.enableParallelExecution = null;
    }
    TransactionSettingV2.prototype.getDistributorNamespaceId = function () {
        return this.distributorNamespaceId;
    };
    TransactionSettingV2.prototype.setDistributorNamespaceId = function (distributorNamespaceId) {
        this.distributorNamespaceId = distributorNamespaceId;
        return this;
    };
    TransactionSettingV2.prototype.withDistributorNamespaceId = function (distributorNamespaceId) {
        this.distributorNamespaceId = distributorNamespaceId;
        return this;
    };
    TransactionSettingV2.prototype.getEnableParallelExecution = function () {
        return this.enableParallelExecution;
    };
    TransactionSettingV2.prototype.setEnableParallelExecution = function (enableParallelExecution) {
        this.enableParallelExecution = enableParallelExecution;
        return this;
    };
    TransactionSettingV2.prototype.withEnableParallelExecution = function (enableParallelExecution) {
        this.enableParallelExecution = enableParallelExecution;
        return this;
    };
    TransactionSettingV2.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TransactionSettingV2()
            .withDistributorNamespaceId(data["distributorNamespaceId"])
            .withEnableParallelExecution(data["enableParallelExecution"]);
    };
    TransactionSettingV2.prototype.toDict = function () {
        return {
            "distributorNamespaceId": this.getDistributorNamespaceId(),
            "enableParallelExecution": this.getEnableParallelExecution(),
        };
    };
    return TransactionSettingV2;
}());
exports.default = TransactionSettingV2;
//# sourceMappingURL=TransactionSettingV2.js.map