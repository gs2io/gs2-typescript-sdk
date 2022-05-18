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
var DeleteCounterByUserIdRequest = /** @class */ (function () {
    function DeleteCounterByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.limitName = null;
        this.userId = null;
        this.counterName = null;
        this.duplicationAvoider = null;
    }
    DeleteCounterByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteCounterByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteCounterByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteCounterByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.getLimitName = function () {
        return this.limitName;
    };
    DeleteCounterByUserIdRequest.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DeleteCounterByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    DeleteCounterByUserIdRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    DeleteCounterByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteCounterByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    DeleteCounterByUserIdRequest.fromDict = function (data) {
        return new DeleteCounterByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withLimitName(data["limitName"])
            .withUserId(data["userId"])
            .withCounterName(data["counterName"]);
    };
    DeleteCounterByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "limitName": this.getLimitName(),
            "userId": this.getUserId(),
            "counterName": this.getCounterName(),
        };
    };
    return DeleteCounterByUserIdRequest;
}());
exports.default = DeleteCounterByUserIdRequest;
//# sourceMappingURL=DeleteCounterByUserIdRequest.js.map