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
var GetEventByTransactionIdRequest = /** @class */ (function () {
    function GetEventByTransactionIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.transactionId = null;
    }
    GetEventByTransactionIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetEventByTransactionIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEventByTransactionIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEventByTransactionIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetEventByTransactionIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEventByTransactionIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEventByTransactionIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetEventByTransactionIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEventByTransactionIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEventByTransactionIdRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    GetEventByTransactionIdRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetEventByTransactionIdRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetEventByTransactionIdRequest.fromDict = function (data) {
        return new GetEventByTransactionIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withTransactionId(data["transactionId"]);
    };
    GetEventByTransactionIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "transactionId": this.getTransactionId(),
        };
    };
    return GetEventByTransactionIdRequest;
}());
exports.default = GetEventByTransactionIdRequest;
//# sourceMappingURL=GetEventByTransactionIdRequest.js.map