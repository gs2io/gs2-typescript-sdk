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
var DeleteStaminaModelMasterRequest = /** @class */ (function () {
    function DeleteStaminaModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
    }
    DeleteStaminaModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteStaminaModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStaminaModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteStaminaModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteStaminaModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStaminaModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteStaminaModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteStaminaModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteStaminaModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteStaminaModelMasterRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    DeleteStaminaModelMasterRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    DeleteStaminaModelMasterRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    DeleteStaminaModelMasterRequest.fromDict = function (data) {
        return new DeleteStaminaModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"]);
    };
    DeleteStaminaModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
        };
    };
    return DeleteStaminaModelMasterRequest;
}());
exports.default = DeleteStaminaModelMasterRequest;
//# sourceMappingURL=DeleteStaminaModelMasterRequest.js.map