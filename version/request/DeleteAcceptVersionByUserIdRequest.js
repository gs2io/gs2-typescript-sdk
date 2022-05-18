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
var DeleteAcceptVersionByUserIdRequest = /** @class */ (function () {
    function DeleteAcceptVersionByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.versionName = null;
        this.duplicationAvoider = null;
    }
    DeleteAcceptVersionByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteAcceptVersionByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteAcceptVersionByUserIdRequest.fromDict = function (data) {
        return new DeleteAcceptVersionByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withVersionName(data["versionName"]);
    };
    DeleteAcceptVersionByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "versionName": this.getVersionName(),
        };
    };
    return DeleteAcceptVersionByUserIdRequest;
}());
exports.default = DeleteAcceptVersionByUserIdRequest;
//# sourceMappingURL=DeleteAcceptVersionByUserIdRequest.js.map