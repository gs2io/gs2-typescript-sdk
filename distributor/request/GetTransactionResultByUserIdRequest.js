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
var GetTransactionResultByUserIdRequest = /** @class */ (function () {
    function GetTransactionResultByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.transactionId = null;
        this.timeOffsetToken = null;
    }
    GetTransactionResultByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetTransactionResultByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTransactionResultByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTransactionResultByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetTransactionResultByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTransactionResultByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTransactionResultByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetTransactionResultByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTransactionResultByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTransactionResultByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetTransactionResultByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetTransactionResultByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetTransactionResultByUserIdRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    GetTransactionResultByUserIdRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetTransactionResultByUserIdRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetTransactionResultByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetTransactionResultByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetTransactionResultByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetTransactionResultByUserIdRequest.fromDict = function (data) {
        return new GetTransactionResultByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTransactionId(data["transactionId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetTransactionResultByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "transactionId": this.getTransactionId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetTransactionResultByUserIdRequest;
}());
exports.default = GetTransactionResultByUserIdRequest;
//# sourceMappingURL=GetTransactionResultByUserIdRequest.js.map