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
var DeleteReceiveStatusByUserIdRequest = /** @class */ (function () {
    function DeleteReceiveStatusByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.bonusModelName = null;
        this.userId = null;
        this.duplicationAvoider = null;
    }
    DeleteReceiveStatusByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteReceiveStatusByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteReceiveStatusByUserIdRequest.fromDict = function (data) {
        return new DeleteReceiveStatusByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withBonusModelName(data["bonusModelName"])
            .withUserId(data["userId"]);
    };
    DeleteReceiveStatusByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "bonusModelName": this.getBonusModelName(),
            "userId": this.getUserId(),
        };
    };
    return DeleteReceiveStatusByUserIdRequest;
}());
exports.default = DeleteReceiveStatusByUserIdRequest;
//# sourceMappingURL=DeleteReceiveStatusByUserIdRequest.js.map