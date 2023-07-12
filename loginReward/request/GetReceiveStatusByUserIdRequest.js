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
var GetReceiveStatusByUserIdRequest = /** @class */ (function () {
    function GetReceiveStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
        this.userId = null;
    }
    GetReceiveStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetReceiveStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReceiveStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetReceiveStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetReceiveStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReceiveStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetReceiveStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetReceiveStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReceiveStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetReceiveStatusByUserIdRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    GetReceiveStatusByUserIdRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    GetReceiveStatusByUserIdRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    GetReceiveStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetReceiveStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetReceiveStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetReceiveStatusByUserIdRequest.fromDict = function (data) {
        return new GetReceiveStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withUserId(data["userId"]);
    };
    GetReceiveStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "userId": this.getUserId(),
        };
    };
    return GetReceiveStatusByUserIdRequest;
}());
exports.default = GetReceiveStatusByUserIdRequest;
//# sourceMappingURL=GetReceiveStatusByUserIdRequest.js.map