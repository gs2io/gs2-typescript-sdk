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
var tslib_1 = require("tslib");
var Gs2Mission = tslib_1.__importStar(require("../model"));
var SetCounterByUserIdRequest = /** @class */ (function () {
    function SetCounterByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.counterName = null;
        this.userId = null;
        this.values = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SetCounterByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetCounterByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetCounterByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetCounterByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetCounterByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetCounterByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetCounterByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetCounterByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetCounterByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetCounterByUserIdRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    SetCounterByUserIdRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    SetCounterByUserIdRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    SetCounterByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetCounterByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetCounterByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetCounterByUserIdRequest.prototype.getValues = function () {
        return this.values;
    };
    SetCounterByUserIdRequest.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    SetCounterByUserIdRequest.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    SetCounterByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SetCounterByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetCounterByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetCounterByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetCounterByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetCounterByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetCounterByUserIdRequest.fromDict = function (data) {
        return new SetCounterByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withCounterName(data["counterName"])
            .withUserId(data["userId"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return Gs2Mission.ScopedValue.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SetCounterByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "counterName": this.getCounterName(),
            "userId": this.getUserId(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SetCounterByUserIdRequest;
}());
exports.default = SetCounterByUserIdRequest;
//# sourceMappingURL=SetCounterByUserIdRequest.js.map