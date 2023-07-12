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
var GetBonusModelByUserIdRequest = /** @class */ (function () {
    function GetBonusModelByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
        this.userId = null;
    }
    GetBonusModelByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBonusModelByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBonusModelByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBonusModelByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBonusModelByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBonusModelByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBonusModelByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBonusModelByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBonusModelByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBonusModelByUserIdRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    GetBonusModelByUserIdRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    GetBonusModelByUserIdRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    GetBonusModelByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetBonusModelByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetBonusModelByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetBonusModelByUserIdRequest.fromDict = function (data) {
        return new GetBonusModelByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withUserId(data["userId"]);
    };
    GetBonusModelByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "userId": this.getUserId(),
        };
    };
    return GetBonusModelByUserIdRequest;
}());
exports.default = GetBonusModelByUserIdRequest;
//# sourceMappingURL=GetBonusModelByUserIdRequest.js.map