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
var CountDownByUserIdRequest = /** @class */ (function () {
    function CountDownByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.limitName = null;
        this.counterName = null;
        this.userId = null;
        this.countDownValue = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    CountDownByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CountDownByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountDownByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CountDownByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CountDownByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountDownByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CountDownByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CountDownByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountDownByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CountDownByUserIdRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    CountDownByUserIdRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    CountDownByUserIdRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    CountDownByUserIdRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    CountDownByUserIdRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    CountDownByUserIdRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    CountDownByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CountDownByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CountDownByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CountDownByUserIdRequest.prototype.getCountDownValue = function () {
        return this.countDownValue;
    };
    CountDownByUserIdRequest.prototype.setCountDownValue = function (countDownValue) {
        this.countDownValue = countDownValue;
        return this;
    };
    CountDownByUserIdRequest.prototype.withCountDownValue = function (countDownValue) {
        this.countDownValue = countDownValue;
        return this;
    };
    CountDownByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CountDownByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CountDownByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CountDownByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CountDownByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CountDownByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CountDownByUserIdRequest.fromDict = function (data) {
        return new CountDownByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"])
            .withCounterName(data["counterName"])
            .withUserId(data["userId"])
            .withCountDownValue(data["countDownValue"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CountDownByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
            "counterName": this.getCounterName(),
            "userId": this.getUserId(),
            "countDownValue": this.getCountDownValue(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CountDownByUserIdRequest;
}());
exports.default = CountDownByUserIdRequest;
//# sourceMappingURL=CountDownByUserIdRequest.js.map