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
var IncreaseCounterByUserIdRequest = /** @class */ (function () {
    function IncreaseCounterByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.counterName = null;
        this.userId = null;
        this.value = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    IncreaseCounterByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IncreaseCounterByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IncreaseCounterByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    IncreaseCounterByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    IncreaseCounterByUserIdRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    IncreaseCounterByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.getValue = function () {
        return this.value;
    };
    IncreaseCounterByUserIdRequest.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    IncreaseCounterByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    IncreaseCounterByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncreaseCounterByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IncreaseCounterByUserIdRequest.fromDict = function (data) {
        return new IncreaseCounterByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withCounterName(data["counterName"])
            .withUserId(data["userId"])
            .withValue(data["value"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    IncreaseCounterByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "counterName": this.getCounterName(),
            "userId": this.getUserId(),
            "value": this.getValue(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return IncreaseCounterByUserIdRequest;
}());
exports.default = IncreaseCounterByUserIdRequest;
//# sourceMappingURL=IncreaseCounterByUserIdRequest.js.map