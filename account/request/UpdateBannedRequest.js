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
var UpdateBannedRequest = /** @class */ (function () {
    function UpdateBannedRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.banned = null;
        this.duplicationAvoider = null;
    }
    UpdateBannedRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateBannedRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBannedRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBannedRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateBannedRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBannedRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBannedRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateBannedRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateBannedRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateBannedRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UpdateBannedRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateBannedRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateBannedRequest.prototype.getBanned = function () {
        return this.banned;
    };
    UpdateBannedRequest.prototype.setBanned = function (banned) {
        this.banned = banned;
        return this;
    };
    UpdateBannedRequest.prototype.withBanned = function (banned) {
        this.banned = banned;
        return this;
    };
    UpdateBannedRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateBannedRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateBannedRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateBannedRequest.fromDict = function (data) {
        return new UpdateBannedRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withBanned(data["banned"]);
    };
    UpdateBannedRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "banned": this.getBanned(),
        };
    };
    return UpdateBannedRequest;
}());
exports.default = UpdateBannedRequest;
//# sourceMappingURL=UpdateBannedRequest.js.map