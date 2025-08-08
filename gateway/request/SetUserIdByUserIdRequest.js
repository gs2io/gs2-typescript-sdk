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
var SetUserIdByUserIdRequest = /** @class */ (function () {
    function SetUserIdByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.allowConcurrentAccess = null;
        this.force = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SetUserIdByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetUserIdByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetUserIdByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetUserIdByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetUserIdByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.getAllowConcurrentAccess = function () {
        return this.allowConcurrentAccess;
    };
    SetUserIdByUserIdRequest.prototype.setAllowConcurrentAccess = function (allowConcurrentAccess) {
        this.allowConcurrentAccess = allowConcurrentAccess;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.withAllowConcurrentAccess = function (allowConcurrentAccess) {
        this.allowConcurrentAccess = allowConcurrentAccess;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.getForce = function () {
        return this.force;
    };
    SetUserIdByUserIdRequest.prototype.setForce = function (force) {
        this.force = force;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.withForce = function (force) {
        this.force = force;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SetUserIdByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetUserIdByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetUserIdByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetUserIdByUserIdRequest.fromDict = function (data) {
        return new SetUserIdByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withAllowConcurrentAccess(data["allowConcurrentAccess"])
            .withForce(data["force"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SetUserIdByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "allowConcurrentAccess": this.getAllowConcurrentAccess(),
            "force": this.getForce(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SetUserIdByUserIdRequest;
}());
exports.default = SetUserIdByUserIdRequest;
//# sourceMappingURL=SetUserIdByUserIdRequest.js.map