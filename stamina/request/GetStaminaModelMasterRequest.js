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
var GetStaminaModelMasterRequest = /** @class */ (function () {
    function GetStaminaModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
    }
    GetStaminaModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStaminaModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStaminaModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStaminaModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStaminaModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStaminaModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStaminaModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStaminaModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStaminaModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStaminaModelMasterRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    GetStaminaModelMasterRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    GetStaminaModelMasterRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    GetStaminaModelMasterRequest.fromDict = function (data) {
        return new GetStaminaModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"]);
    };
    GetStaminaModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
        };
    };
    return GetStaminaModelMasterRequest;
}());
exports.default = GetStaminaModelMasterRequest;
//# sourceMappingURL=GetStaminaModelMasterRequest.js.map