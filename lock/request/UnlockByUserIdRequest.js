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
var UnlockByUserIdRequest = /** @class */ (function () {
    function UnlockByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.propertyId = null;
        this.userId = null;
        this.transactionId = null;
        this.duplicationAvoider = null;
    }
    UnlockByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UnlockByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnlockByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnlockByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UnlockByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnlockByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnlockByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UnlockByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnlockByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnlockByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    UnlockByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    UnlockByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    UnlockByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UnlockByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UnlockByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UnlockByUserIdRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    UnlockByUserIdRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    UnlockByUserIdRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    UnlockByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UnlockByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnlockByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UnlockByUserIdRequest.fromDict = function (data) {
        return new UnlockByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withPropertyId(data["propertyId"])
            .withUserId(data["userId"])
            .withTransactionId(data["transactionId"]);
    };
    UnlockByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "propertyId": this.getPropertyId(),
            "userId": this.getUserId(),
            "transactionId": this.getTransactionId(),
        };
    };
    return UnlockByUserIdRequest;
}());
exports.default = UnlockByUserIdRequest;
//# sourceMappingURL=UnlockByUserIdRequest.js.map