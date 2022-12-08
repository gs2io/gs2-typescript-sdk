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
var UnregisterBlackListRequest = /** @class */ (function () {
    function UnregisterBlackListRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.targetUserId = null;
        this.duplicationAvoider = null;
    }
    UnregisterBlackListRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UnregisterBlackListRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnregisterBlackListRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnregisterBlackListRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UnregisterBlackListRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnregisterBlackListRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnregisterBlackListRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UnregisterBlackListRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnregisterBlackListRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnregisterBlackListRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UnregisterBlackListRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UnregisterBlackListRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UnregisterBlackListRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    UnregisterBlackListRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    UnregisterBlackListRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    UnregisterBlackListRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UnregisterBlackListRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnregisterBlackListRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnregisterBlackListRequest.fromDict = function (data) {
        return new UnregisterBlackListRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTargetUserId(data["targetUserId"]);
    };
    UnregisterBlackListRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return UnregisterBlackListRequest;
}());
exports.default = UnregisterBlackListRequest;
//# sourceMappingURL=UnregisterBlackListRequest.js.map