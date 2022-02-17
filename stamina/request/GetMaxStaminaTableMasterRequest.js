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
var GetMaxStaminaTableMasterRequest = /** @class */ (function () {
    function GetMaxStaminaTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.maxStaminaTableName = null;
    }
    GetMaxStaminaTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMaxStaminaTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMaxStaminaTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMaxStaminaTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMaxStaminaTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMaxStaminaTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMaxStaminaTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetMaxStaminaTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMaxStaminaTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetMaxStaminaTableMasterRequest.prototype.getMaxStaminaTableName = function () {
        return this.maxStaminaTableName;
    };
    GetMaxStaminaTableMasterRequest.prototype.setMaxStaminaTableName = function (maxStaminaTableName) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    };
    GetMaxStaminaTableMasterRequest.prototype.withMaxStaminaTableName = function (maxStaminaTableName) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    };
    GetMaxStaminaTableMasterRequest.fromDict = function (data) {
        return new GetMaxStaminaTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMaxStaminaTableName(data["maxStaminaTableName"]);
    };
    GetMaxStaminaTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "maxStaminaTableName": this.getMaxStaminaTableName(),
        };
    };
    return GetMaxStaminaTableMasterRequest;
}());
export default GetMaxStaminaTableMasterRequest;
//# sourceMappingURL=GetMaxStaminaTableMasterRequest.js.map