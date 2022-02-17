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
var GetByUserIdAndTransactionIdRequest = /** @class */ (function () {
    function GetByUserIdAndTransactionIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.transactionId = null;
    }
    GetByUserIdAndTransactionIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetByUserIdAndTransactionIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetByUserIdAndTransactionIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetByUserIdAndTransactionIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetByUserIdAndTransactionIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetByUserIdAndTransactionIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetByUserIdAndTransactionIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetByUserIdAndTransactionIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetByUserIdAndTransactionIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetByUserIdAndTransactionIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetByUserIdAndTransactionIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetByUserIdAndTransactionIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetByUserIdAndTransactionIdRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    GetByUserIdAndTransactionIdRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetByUserIdAndTransactionIdRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetByUserIdAndTransactionIdRequest.fromDict = function (data) {
        return new GetByUserIdAndTransactionIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTransactionId(data["transactionId"]);
    };
    GetByUserIdAndTransactionIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "transactionId": this.getTransactionId(),
        };
    };
    return GetByUserIdAndTransactionIdRequest;
}());
export default GetByUserIdAndTransactionIdRequest;
//# sourceMappingURL=GetByUserIdAndTransactionIdRequest.js.map