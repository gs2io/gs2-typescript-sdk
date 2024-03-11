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
var RevertUseByUserIdRequest = /** @class */ (function () {
    function RevertUseByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.code = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    RevertUseByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RevertUseByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RevertUseByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RevertUseByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RevertUseByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RevertUseByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RevertUseByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RevertUseByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RevertUseByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RevertUseByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RevertUseByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RevertUseByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RevertUseByUserIdRequest.prototype.getCode = function () {
        return this.code;
    };
    RevertUseByUserIdRequest.prototype.setCode = function (code) {
        this.code = code;
        return this;
    };
    RevertUseByUserIdRequest.prototype.withCode = function (code) {
        this.code = code;
        return this;
    };
    RevertUseByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    RevertUseByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RevertUseByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RevertUseByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RevertUseByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RevertUseByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RevertUseByUserIdRequest.fromDict = function (data) {
        return new RevertUseByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withCode(data["code"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    RevertUseByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "code": this.getCode(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return RevertUseByUserIdRequest;
}());
exports.default = RevertUseByUserIdRequest;
//# sourceMappingURL=RevertUseByUserIdRequest.js.map