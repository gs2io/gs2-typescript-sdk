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
var DeleteMaxStaminaTableMasterRequest = /** @class */ (function () {
    function DeleteMaxStaminaTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.maxStaminaTableName = null;
    }
    DeleteMaxStaminaTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteMaxStaminaTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMaxStaminaTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMaxStaminaTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteMaxStaminaTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMaxStaminaTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMaxStaminaTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteMaxStaminaTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMaxStaminaTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMaxStaminaTableMasterRequest.prototype.getMaxStaminaTableName = function () {
        return this.maxStaminaTableName;
    };
    DeleteMaxStaminaTableMasterRequest.prototype.setMaxStaminaTableName = function (maxStaminaTableName) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    };
    DeleteMaxStaminaTableMasterRequest.prototype.withMaxStaminaTableName = function (maxStaminaTableName) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    };
    DeleteMaxStaminaTableMasterRequest.fromDict = function (data) {
        return new DeleteMaxStaminaTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMaxStaminaTableName(data["maxStaminaTableName"]);
    };
    DeleteMaxStaminaTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "maxStaminaTableName": this.getMaxStaminaTableName(),
        };
    };
    return DeleteMaxStaminaTableMasterRequest;
}());
export default DeleteMaxStaminaTableMasterRequest;
//# sourceMappingURL=DeleteMaxStaminaTableMasterRequest.js.map