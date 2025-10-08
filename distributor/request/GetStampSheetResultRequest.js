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
var GetStampSheetResultRequest = /** @class */ (function () {
    function GetStampSheetResultRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.transactionId = null;
    }
    GetStampSheetResultRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStampSheetResultRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStampSheetResultRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStampSheetResultRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStampSheetResultRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStampSheetResultRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStampSheetResultRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStampSheetResultRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStampSheetResultRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStampSheetResultRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetStampSheetResultRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetStampSheetResultRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetStampSheetResultRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    GetStampSheetResultRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetStampSheetResultRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetStampSheetResultRequest.fromDict = function (data) {
        return new GetStampSheetResultRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTransactionId(data["transactionId"]);
    };
    GetStampSheetResultRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "transactionId": this.getTransactionId(),
        };
    };
    return GetStampSheetResultRequest;
}());
exports.default = GetStampSheetResultRequest;
//# sourceMappingURL=GetStampSheetResultRequest.js.map