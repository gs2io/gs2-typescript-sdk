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
var WaitImportUserDataRequest = /** @class */ (function () {
    function WaitImportUserDataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.transactionId = null;
        this.userId = null;
        this.microserviceName = null;
        this.duplicationAvoider = null;
    }
    WaitImportUserDataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    WaitImportUserDataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WaitImportUserDataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WaitImportUserDataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    WaitImportUserDataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WaitImportUserDataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WaitImportUserDataRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    WaitImportUserDataRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    WaitImportUserDataRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    WaitImportUserDataRequest.prototype.getUserId = function () {
        return this.userId;
    };
    WaitImportUserDataRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WaitImportUserDataRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WaitImportUserDataRequest.prototype.getMicroserviceName = function () {
        return this.microserviceName;
    };
    WaitImportUserDataRequest.prototype.setMicroserviceName = function (microserviceName) {
        this.microserviceName = microserviceName;
        return this;
    };
    WaitImportUserDataRequest.prototype.withMicroserviceName = function (microserviceName) {
        this.microserviceName = microserviceName;
        return this;
    };
    WaitImportUserDataRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    WaitImportUserDataRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WaitImportUserDataRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    WaitImportUserDataRequest.fromDict = function (data) {
        return new WaitImportUserDataRequest()
            .withTransactionId(data["transactionId"])
            .withUserId(data["userId"])
            .withMicroserviceName(data["microserviceName"]);
    };
    WaitImportUserDataRequest.prototype.toDict = function () {
        return {
            "transactionId": this.getTransactionId(),
            "userId": this.getUserId(),
            "microserviceName": this.getMicroserviceName(),
        };
    };
    return WaitImportUserDataRequest;
}());
exports.default = WaitImportUserDataRequest;
//# sourceMappingURL=WaitImportUserDataRequest.js.map