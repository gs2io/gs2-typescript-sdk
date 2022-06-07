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
var GetStampSheetResultByUserIdRequest = /** @class */ (function () {
    function GetStampSheetResultByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.transactionId = null;
    }
    GetStampSheetResultByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStampSheetResultByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStampSheetResultByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStampSheetResultByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStampSheetResultByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStampSheetResultByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStampSheetResultByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStampSheetResultByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStampSheetResultByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStampSheetResultByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetStampSheetResultByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetStampSheetResultByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetStampSheetResultByUserIdRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    GetStampSheetResultByUserIdRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetStampSheetResultByUserIdRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetStampSheetResultByUserIdRequest.fromDict = function (data) {
        return new GetStampSheetResultByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTransactionId(data["transactionId"]);
    };
    GetStampSheetResultByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "transactionId": this.getTransactionId(),
        };
    };
    return GetStampSheetResultByUserIdRequest;
}());
exports.default = GetStampSheetResultByUserIdRequest;
//# sourceMappingURL=GetStampSheetResultByUserIdRequest.js.map