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
var DecreaseMaximumIdleMinutesByUserIdRequest = /** @class */ (function () {
    function DecreaseMaximumIdleMinutesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.categoryName = null;
        this.decreaseMinutes = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.getDecreaseMinutes = function () {
        return this.decreaseMinutes;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.setDecreaseMinutes = function (decreaseMinutes) {
        this.decreaseMinutes = decreaseMinutes;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.withDecreaseMinutes = function (decreaseMinutes) {
        this.decreaseMinutes = decreaseMinutes;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.fromDict = function (data) {
        return new DecreaseMaximumIdleMinutesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withCategoryName(data["categoryName"])
            .withDecreaseMinutes(data["decreaseMinutes"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DecreaseMaximumIdleMinutesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "categoryName": this.getCategoryName(),
            "decreaseMinutes": this.getDecreaseMinutes(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DecreaseMaximumIdleMinutesByUserIdRequest;
}());
exports.default = DecreaseMaximumIdleMinutesByUserIdRequest;
//# sourceMappingURL=DecreaseMaximumIdleMinutesByUserIdRequest.js.map