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
var DeleteFirebaseTokenByUserIdRequest = /** @class */ (function () {
    function DeleteFirebaseTokenByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.duplicationAvoider = null;
    }
    DeleteFirebaseTokenByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteFirebaseTokenByUserIdRequest.fromDict = function (data) {
        return new DeleteFirebaseTokenByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"]);
    };
    DeleteFirebaseTokenByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
        };
    };
    return DeleteFirebaseTokenByUserIdRequest;
}());
exports.default = DeleteFirebaseTokenByUserIdRequest;
//# sourceMappingURL=DeleteFirebaseTokenByUserIdRequest.js.map