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
var UnsubscribeByUserIdRequest = /** @class */ (function () {
    function UnsubscribeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.userId = null;
        this.targetUserId = null;
        this.duplicationAvoider = null;
    }
    UnsubscribeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UnsubscribeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UnsubscribeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UnsubscribeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    UnsubscribeByUserIdRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UnsubscribeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    UnsubscribeByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UnsubscribeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnsubscribeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnsubscribeByUserIdRequest.fromDict = function (data) {
        return new UnsubscribeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"]);
    };
    UnsubscribeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return UnsubscribeByUserIdRequest;
}());
exports.default = UnsubscribeByUserIdRequest;
//# sourceMappingURL=UnsubscribeByUserIdRequest.js.map