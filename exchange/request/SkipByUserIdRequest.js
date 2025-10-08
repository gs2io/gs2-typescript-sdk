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
var SkipByUserIdRequest = /** @class */ (function () {
    function SkipByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.awaitName = null;
        this.skipType = null;
        this.minutes = null;
        this.rate = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SkipByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SkipByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SkipByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SkipByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SkipByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SkipByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SkipByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SkipByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SkipByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SkipByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SkipByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SkipByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SkipByUserIdRequest.prototype.getAwaitName = function () {
        return this.awaitName;
    };
    SkipByUserIdRequest.prototype.setAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    SkipByUserIdRequest.prototype.withAwaitName = function (awaitName) {
        this.awaitName = awaitName;
        return this;
    };
    SkipByUserIdRequest.prototype.getSkipType = function () {
        return this.skipType;
    };
    SkipByUserIdRequest.prototype.setSkipType = function (skipType) {
        this.skipType = skipType;
        return this;
    };
    SkipByUserIdRequest.prototype.withSkipType = function (skipType) {
        this.skipType = skipType;
        return this;
    };
    SkipByUserIdRequest.prototype.getMinutes = function () {
        return this.minutes;
    };
    SkipByUserIdRequest.prototype.setMinutes = function (minutes) {
        this.minutes = minutes;
        return this;
    };
    SkipByUserIdRequest.prototype.withMinutes = function (minutes) {
        this.minutes = minutes;
        return this;
    };
    SkipByUserIdRequest.prototype.getRate = function () {
        return this.rate;
    };
    SkipByUserIdRequest.prototype.setRate = function (rate) {
        this.rate = rate;
        return this;
    };
    SkipByUserIdRequest.prototype.withRate = function (rate) {
        this.rate = rate;
        return this;
    };
    SkipByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SkipByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SkipByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SkipByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SkipByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SkipByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SkipByUserIdRequest.fromDict = function (data) {
        return new SkipByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withAwaitName(data["awaitName"])
            .withSkipType(data["skipType"])
            .withMinutes(data["minutes"])
            .withRate(data["rate"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SkipByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "awaitName": this.getAwaitName(),
            "skipType": this.getSkipType(),
            "minutes": this.getMinutes(),
            "rate": this.getRate(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SkipByUserIdRequest;
}());
exports.default = SkipByUserIdRequest;
//# sourceMappingURL=SkipByUserIdRequest.js.map