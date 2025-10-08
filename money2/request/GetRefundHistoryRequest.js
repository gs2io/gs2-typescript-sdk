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
var GetRefundHistoryRequest = /** @class */ (function () {
    function GetRefundHistoryRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.transactionId = null;
    }
    GetRefundHistoryRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRefundHistoryRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRefundHistoryRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRefundHistoryRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRefundHistoryRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRefundHistoryRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRefundHistoryRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRefundHistoryRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRefundHistoryRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRefundHistoryRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    GetRefundHistoryRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetRefundHistoryRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetRefundHistoryRequest.fromDict = function (data) {
        return new GetRefundHistoryRequest()
            .withNamespaceName(data["namespaceName"])
            .withTransactionId(data["transactionId"]);
    };
    GetRefundHistoryRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "transactionId": this.getTransactionId(),
        };
    };
    return GetRefundHistoryRequest;
}());
exports.default = GetRefundHistoryRequest;
//# sourceMappingURL=GetRefundHistoryRequest.js.map