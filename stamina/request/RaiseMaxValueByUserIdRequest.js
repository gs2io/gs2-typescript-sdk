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
var RaiseMaxValueByUserIdRequest = /** @class */ (function () {
    function RaiseMaxValueByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.staminaName = null;
        this.userId = null;
        this.raiseValue = null;
    }
    RaiseMaxValueByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RaiseMaxValueByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RaiseMaxValueByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RaiseMaxValueByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RaiseMaxValueByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RaiseMaxValueByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RaiseMaxValueByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RaiseMaxValueByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RaiseMaxValueByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RaiseMaxValueByUserIdRequest.prototype.getStaminaName = function () {
        return this.staminaName;
    };
    RaiseMaxValueByUserIdRequest.prototype.setStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    RaiseMaxValueByUserIdRequest.prototype.withStaminaName = function (staminaName) {
        this.staminaName = staminaName;
        return this;
    };
    RaiseMaxValueByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RaiseMaxValueByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RaiseMaxValueByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RaiseMaxValueByUserIdRequest.prototype.getRaiseValue = function () {
        return this.raiseValue;
    };
    RaiseMaxValueByUserIdRequest.prototype.setRaiseValue = function (raiseValue) {
        this.raiseValue = raiseValue;
        return this;
    };
    RaiseMaxValueByUserIdRequest.prototype.withRaiseValue = function (raiseValue) {
        this.raiseValue = raiseValue;
        return this;
    };
    RaiseMaxValueByUserIdRequest.fromDict = function (data) {
        return new RaiseMaxValueByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withUserId(data["userId"])
            .withRaiseValue(data["raiseValue"]);
    };
    RaiseMaxValueByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "userId": this.getUserId(),
            "raiseValue": this.getRaiseValue(),
        };
    };
    return RaiseMaxValueByUserIdRequest;
}());
export default RaiseMaxValueByUserIdRequest;
//# sourceMappingURL=RaiseMaxValueByUserIdRequest.js.map