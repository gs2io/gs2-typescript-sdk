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
var GetStaminaModelRequest = /** @class */ (function () {
    function GetStaminaModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
    }
    GetStaminaModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStaminaModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStaminaModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStaminaModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStaminaModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStaminaModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStaminaModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStaminaModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStaminaModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStaminaModelRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    GetStaminaModelRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    GetStaminaModelRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    GetStaminaModelRequest.fromDict = function (data) {
        return new GetStaminaModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"]);
    };
    GetStaminaModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
        };
    };
    return GetStaminaModelRequest;
}());
export default GetStaminaModelRequest;
//# sourceMappingURL=GetStaminaModelRequest.js.map