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
var IncreaseMaximumIdleMinutesByUserIdRequest = /** @class */ (function () {
    function IncreaseMaximumIdleMinutesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.categoryName = null;
        this.increaseMinutes = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.getIncreaseMinutes = function () {
        return this.increaseMinutes;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.setIncreaseMinutes = function (increaseMinutes) {
        this.increaseMinutes = increaseMinutes;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.withIncreaseMinutes = function (increaseMinutes) {
        this.increaseMinutes = increaseMinutes;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.fromDict = function (data) {
        return new IncreaseMaximumIdleMinutesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withCategoryName(data["categoryName"])
            .withIncreaseMinutes(data["increaseMinutes"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    IncreaseMaximumIdleMinutesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "categoryName": this.getCategoryName(),
            "increaseMinutes": this.getIncreaseMinutes(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return IncreaseMaximumIdleMinutesByUserIdRequest;
}());
exports.default = IncreaseMaximumIdleMinutesByUserIdRequest;
//# sourceMappingURL=IncreaseMaximumIdleMinutesByUserIdRequest.js.map