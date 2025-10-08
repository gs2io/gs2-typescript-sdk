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
var ResetCounterByUserIdRequest = /** @class */ (function () {
    function ResetCounterByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.counterName = null;
        this.scopes = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    ResetCounterByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ResetCounterByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ResetCounterByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ResetCounterByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ResetCounterByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    ResetCounterByUserIdRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.getScopes = function () {
        return this.scopes;
    };
    ResetCounterByUserIdRequest.prototype.setScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.withScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    ResetCounterByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ResetCounterByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ResetCounterByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ResetCounterByUserIdRequest.fromDict = function (data) {
        return new ResetCounterByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withCounterName(data["counterName"])
            .withScopes(data.scopes ?
            data.scopes.map(function (item) {
                return Gs2Mission.ScopedValue.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    ResetCounterByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "counterName": this.getCounterName(),
            "scopes": this.getScopes() ?
                this.getScopes().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return ResetCounterByUserIdRequest;
}());
exports.default = ResetCounterByUserIdRequest;
//# sourceMappingURL=ResetCounterByUserIdRequest.js.map