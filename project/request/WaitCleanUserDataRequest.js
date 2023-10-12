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
var WaitCleanUserDataRequest = /** @class */ (function () {
    function WaitCleanUserDataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.transactionId = null;
        this.userId = null;
        this.microserviceName = null;
        this.duplicationAvoider = null;
    }
    WaitCleanUserDataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    WaitCleanUserDataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WaitCleanUserDataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WaitCleanUserDataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    WaitCleanUserDataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WaitCleanUserDataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WaitCleanUserDataRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    WaitCleanUserDataRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    WaitCleanUserDataRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    WaitCleanUserDataRequest.prototype.getUserId = function () {
        return this.userId;
    };
    WaitCleanUserDataRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WaitCleanUserDataRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WaitCleanUserDataRequest.prototype.getMicroserviceName = function () {
        return this.microserviceName;
    };
    WaitCleanUserDataRequest.prototype.setMicroserviceName = function (microserviceName) {
        this.microserviceName = microserviceName;
        return this;
    };
    WaitCleanUserDataRequest.prototype.withMicroserviceName = function (microserviceName) {
        this.microserviceName = microserviceName;
        return this;
    };
    WaitCleanUserDataRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    WaitCleanUserDataRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WaitCleanUserDataRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WaitCleanUserDataRequest.fromDict = function (data) {
        return new WaitCleanUserDataRequest()
            .withTransactionId(data["transactionId"])
            .withUserId(data["userId"])
            .withMicroserviceName(data["microserviceName"]);
    };
    WaitCleanUserDataRequest.prototype.toDict = function () {
        return {
            "transactionId": this.getTransactionId(),
            "userId": this.getUserId(),
            "microserviceName": this.getMicroserviceName(),
        };
    };
    return WaitCleanUserDataRequest;
}());
exports.default = WaitCleanUserDataRequest;
//# sourceMappingURL=WaitCleanUserDataRequest.js.map