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
var DecreaseMaximumIdleMinutesRequest = /** @class */ (function () {
    function DecreaseMaximumIdleMinutesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.categoryName = null;
        this.decreaseMinutes = null;
        this.duplicationAvoider = null;
    }
    DecreaseMaximumIdleMinutesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.getDecreaseMinutes = function () {
        return this.decreaseMinutes;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.setDecreaseMinutes = function (decreaseMinutes) {
        this.decreaseMinutes = decreaseMinutes;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.withDecreaseMinutes = function (decreaseMinutes) {
        this.decreaseMinutes = decreaseMinutes;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseMaximumIdleMinutesRequest.fromDict = function (data) {
        return new DecreaseMaximumIdleMinutesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withCategoryName(data["categoryName"])
            .withDecreaseMinutes(data["decreaseMinutes"]);
    };
    DecreaseMaximumIdleMinutesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "categoryName": this.getCategoryName(),
            "decreaseMinutes": this.getDecreaseMinutes(),
        };
    };
    return DecreaseMaximumIdleMinutesRequest;
}());
exports.default = DecreaseMaximumIdleMinutesRequest;
//# sourceMappingURL=DecreaseMaximumIdleMinutesRequest.js.map