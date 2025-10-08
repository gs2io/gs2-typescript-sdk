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
var SubscribeByUserIdRequest = /** @class */ (function () {
    function SubscribeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
        this.userId = null;
        this.targetUserId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SubscribeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SubscribeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SubscribeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SubscribeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    SubscribeByUserIdRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SubscribeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    SubscribeByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SubscribeByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SubscribeByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SubscribeByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubscribeByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SubscribeByUserIdRequest.fromDict = function (data) {
        return new SubscribeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SubscribeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SubscribeByUserIdRequest;
}());
exports.default = SubscribeByUserIdRequest;
//# sourceMappingURL=SubscribeByUserIdRequest.js.map