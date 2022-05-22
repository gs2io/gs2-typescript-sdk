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
var DisconnectByUserIdRequest = /** @class */ (function () {
    function DisconnectByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.duplicationAvoider = null;
    }
    DisconnectByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DisconnectByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DisconnectByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DisconnectByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DisconnectByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DisconnectByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DisconnectByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DisconnectByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DisconnectByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DisconnectByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DisconnectByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DisconnectByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DisconnectByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DisconnectByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DisconnectByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DisconnectByUserIdRequest.fromDict = function (data) {
        return new DisconnectByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"]);
    };
    DisconnectByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
        };
    };
    return DisconnectByUserIdRequest;
}());
exports.default = DisconnectByUserIdRequest;
//# sourceMappingURL=DisconnectByUserIdRequest.js.map