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
var UnlockRequest = /** @class */ (function () {
    function UnlockRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.propertyId = null;
        this.accessToken = null;
        this.transactionId = null;
    }
    UnlockRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UnlockRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnlockRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UnlockRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UnlockRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnlockRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UnlockRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UnlockRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnlockRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UnlockRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    UnlockRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    UnlockRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    UnlockRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UnlockRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UnlockRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UnlockRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    UnlockRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    UnlockRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    UnlockRequest.fromDict = function (data) {
        return new UnlockRequest()
            .withNamespaceName(data["namespaceName"])
            .withPropertyId(data["propertyId"])
            .withAccessToken(data["accessToken"])
            .withTransactionId(data["transactionId"]);
    };
    UnlockRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "propertyId": this.getPropertyId(),
            "accessToken": this.getAccessToken(),
            "transactionId": this.getTransactionId(),
        };
    };
    return UnlockRequest;
}());
exports.default = UnlockRequest;
//# sourceMappingURL=UnlockRequest.js.map