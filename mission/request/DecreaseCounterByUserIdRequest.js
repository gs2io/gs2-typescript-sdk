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
var DecreaseCounterByUserIdRequest = /** @class */ (function () {
    function DecreaseCounterByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.counterName = null;
        this.userId = null;
        this.value = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    DecreaseCounterByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DecreaseCounterByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DecreaseCounterByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DecreaseCounterByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    DecreaseCounterByUserIdRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DecreaseCounterByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.getValue = function () {
        return this.value;
    };
    DecreaseCounterByUserIdRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    DecreaseCounterByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DecreaseCounterByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseCounterByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DecreaseCounterByUserIdRequest.fromDict = function (data) {
        return new DecreaseCounterByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withCounterName(data["counterName"])
            .withUserId(data["userId"])
            .withValue(data["value"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    DecreaseCounterByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "counterName": this.getCounterName(),
            "userId": this.getUserId(),
            "value": this.getValue(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return DecreaseCounterByUserIdRequest;
}());
exports.default = DecreaseCounterByUserIdRequest;
//# sourceMappingURL=DecreaseCounterByUserIdRequest.js.map