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
var RegisterBlackListRequest = /** @class */ (function () {
    function RegisterBlackListRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.targetUserId = null;
        this.duplicationAvoider = null;
    }
    RegisterBlackListRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RegisterBlackListRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RegisterBlackListRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RegisterBlackListRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RegisterBlackListRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RegisterBlackListRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RegisterBlackListRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RegisterBlackListRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RegisterBlackListRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RegisterBlackListRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    RegisterBlackListRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    RegisterBlackListRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    RegisterBlackListRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    RegisterBlackListRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    RegisterBlackListRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    RegisterBlackListRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RegisterBlackListRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RegisterBlackListRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RegisterBlackListRequest.fromDict = function (data) {
        return new RegisterBlackListRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTargetUserId(data["targetUserId"]);
    };
    RegisterBlackListRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return RegisterBlackListRequest;
}());
exports.default = RegisterBlackListRequest;
//# sourceMappingURL=RegisterBlackListRequest.js.map