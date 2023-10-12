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
var GetCleanProgressRequest = /** @class */ (function () {
    function GetCleanProgressRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.transactionId = null;
    }
    GetCleanProgressRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCleanProgressRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCleanProgressRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCleanProgressRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCleanProgressRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCleanProgressRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCleanProgressRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    GetCleanProgressRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetCleanProgressRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetCleanProgressRequest.fromDict = function (data) {
        return new GetCleanProgressRequest()
            .withTransactionId(data["transactionId"]);
    };
    GetCleanProgressRequest.prototype.toDict = function () {
        return {
            "transactionId": this.getTransactionId(),
        };
    };
    return GetCleanProgressRequest;
}());
exports.default = GetCleanProgressRequest;
//# sourceMappingURL=GetCleanProgressRequest.js.map