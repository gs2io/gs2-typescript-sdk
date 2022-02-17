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
var LockByUserIdRequest = /** @class */ (function () {
    function LockByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.propertyId = null;
        this.userId = null;
        this.transactionId = null;
        this.ttl = null;
    }
    LockByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    LockByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    LockByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    LockByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    LockByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    LockByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    LockByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    LockByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    LockByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    LockByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    LockByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    LockByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    LockByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    LockByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    LockByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    LockByUserIdRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    LockByUserIdRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    LockByUserIdRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    LockByUserIdRequest.prototype.getTtl = function () {
        return this.ttl;
    };
    LockByUserIdRequest.prototype.setTtl = function (ttl) {
        this.ttl = ttl;
        return this;
    };
    LockByUserIdRequest.prototype.withTtl = function (ttl) {
        this.ttl = ttl;
        return this;
    };
    LockByUserIdRequest.fromDict = function (data) {
        return new LockByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withPropertyId(data["propertyId"])
            .withUserId(data["userId"])
            .withTransactionId(data["transactionId"])
            .withTtl(data["ttl"]);
    };
    LockByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "propertyId": this.getPropertyId(),
            "userId": this.getUserId(),
            "transactionId": this.getTransactionId(),
            "ttl": this.getTtl(),
        };
    };
    return LockByUserIdRequest;
}());
export default LockByUserIdRequest;
//# sourceMappingURL=LockByUserIdRequest.js.map