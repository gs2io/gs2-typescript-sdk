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
var ForceReDrawByUserIdRequest = /** @class */ (function () {
    function ForceReDrawByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.showcaseName = null;
        this.userId = null;
        this.duplicationAvoider = null;
    }
    ForceReDrawByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ForceReDrawByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ForceReDrawByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ForceReDrawByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ForceReDrawByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ForceReDrawByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ForceReDrawByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ForceReDrawByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ForceReDrawByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ForceReDrawByUserIdRequest.prototype.getShowcaseName = function () {
        return this.showcaseName;
    };
    ForceReDrawByUserIdRequest.prototype.setShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    ForceReDrawByUserIdRequest.prototype.withShowcaseName = function (showcaseName) {
        this.showcaseName = showcaseName;
        return this;
    };
    ForceReDrawByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ForceReDrawByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ForceReDrawByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ForceReDrawByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ForceReDrawByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ForceReDrawByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ForceReDrawByUserIdRequest.fromDict = function (data) {
        return new ForceReDrawByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withShowcaseName(data["showcaseName"])
            .withUserId(data["userId"]);
    };
    ForceReDrawByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcaseName": this.getShowcaseName(),
            "userId": this.getUserId(),
        };
    };
    return ForceReDrawByUserIdRequest;
}());
exports.default = ForceReDrawByUserIdRequest;
//# sourceMappingURL=ForceReDrawByUserIdRequest.js.map