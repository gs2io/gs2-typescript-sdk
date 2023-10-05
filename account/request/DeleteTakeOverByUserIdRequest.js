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
var DeleteTakeOverByUserIdRequest = /** @class */ (function () {
    function DeleteTakeOverByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.type = null;
        this.duplicationAvoider = null;
    }
    DeleteTakeOverByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteTakeOverByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteTakeOverByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteTakeOverByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteTakeOverByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteTakeOverByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteTakeOverByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteTakeOverByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteTakeOverByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteTakeOverByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteTakeOverByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteTakeOverByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteTakeOverByUserIdRequest.prototype.getType = function () {
        return this.type;
    };
    DeleteTakeOverByUserIdRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    DeleteTakeOverByUserIdRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    DeleteTakeOverByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteTakeOverByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteTakeOverByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteTakeOverByUserIdRequest.fromDict = function (data) {
        return new DeleteTakeOverByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withType(data["type"]);
    };
    DeleteTakeOverByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "type": this.getType(),
        };
    };
    return DeleteTakeOverByUserIdRequest;
}());
exports.default = DeleteTakeOverByUserIdRequest;
//# sourceMappingURL=DeleteTakeOverByUserIdRequest.js.map