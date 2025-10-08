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
var SetMaximumIdleMinutesByUserIdRequest = /** @class */ (function () {
    function SetMaximumIdleMinutesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.categoryName = null;
        this.maximumIdleMinutes = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SetMaximumIdleMinutesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.getMaximumIdleMinutes = function () {
        return this.maximumIdleMinutes;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.setMaximumIdleMinutes = function (maximumIdleMinutes) {
        this.maximumIdleMinutes = maximumIdleMinutes;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.withMaximumIdleMinutes = function (maximumIdleMinutes) {
        this.maximumIdleMinutes = maximumIdleMinutes;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetMaximumIdleMinutesByUserIdRequest.fromDict = function (data) {
        return new SetMaximumIdleMinutesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withCategoryName(data["categoryName"])
            .withMaximumIdleMinutes(data["maximumIdleMinutes"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SetMaximumIdleMinutesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "categoryName": this.getCategoryName(),
            "maximumIdleMinutes": this.getMaximumIdleMinutes(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SetMaximumIdleMinutesByUserIdRequest;
}());
exports.default = SetMaximumIdleMinutesByUserIdRequest;
//# sourceMappingURL=SetMaximumIdleMinutesByUserIdRequest.js.map