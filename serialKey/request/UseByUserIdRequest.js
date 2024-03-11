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
var UseByUserIdRequest = /** @class */ (function () {
    function UseByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.code = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    UseByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UseByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UseByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UseByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UseByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UseByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UseByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UseByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UseByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UseByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UseByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UseByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UseByUserIdRequest.prototype.getCode = function () {
        return this.code;
    };
    UseByUserIdRequest.prototype.setCode = function (code) {
        this.code = code;
        return this;
    };
    UseByUserIdRequest.prototype.withCode = function (code) {
        this.code = code;
        return this;
    };
    UseByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    UseByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    UseByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    UseByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UseByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UseByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UseByUserIdRequest.fromDict = function (data) {
        return new UseByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withCode(data["code"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    UseByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "code": this.getCode(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return UseByUserIdRequest;
}());
exports.default = UseByUserIdRequest;
//# sourceMappingURL=UseByUserIdRequest.js.map