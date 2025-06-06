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
var AddFriendRequest = /** @class */ (function () {
    function AddFriendRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.targetUserId = null;
        this.duplicationAvoider = null;
    }
    AddFriendRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AddFriendRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddFriendRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AddFriendRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AddFriendRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddFriendRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AddFriendRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AddFriendRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddFriendRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AddFriendRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    AddFriendRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AddFriendRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AddFriendRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    AddFriendRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    AddFriendRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    AddFriendRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AddFriendRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddFriendRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AddFriendRequest.fromDict = function (data) {
        return new AddFriendRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTargetUserId(data["targetUserId"]);
    };
    AddFriendRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return AddFriendRequest;
}());
exports.default = AddFriendRequest;
//# sourceMappingURL=AddFriendRequest.js.map