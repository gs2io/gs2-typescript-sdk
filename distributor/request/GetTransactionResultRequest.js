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
var GetTransactionResultRequest = /** @class */ (function () {
    function GetTransactionResultRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.transactionId = null;
    }
    GetTransactionResultRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetTransactionResultRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTransactionResultRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTransactionResultRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetTransactionResultRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTransactionResultRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTransactionResultRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetTransactionResultRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTransactionResultRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTransactionResultRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetTransactionResultRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetTransactionResultRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetTransactionResultRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    GetTransactionResultRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetTransactionResultRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetTransactionResultRequest.fromDict = function (data) {
        return new GetTransactionResultRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTransactionId(data["transactionId"]);
    };
    GetTransactionResultRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "transactionId": this.getTransactionId(),
        };
    };
    return GetTransactionResultRequest;
}());
exports.default = GetTransactionResultRequest;
//# sourceMappingURL=GetTransactionResultRequest.js.map