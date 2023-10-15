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
var GetImportProgressRequest = /** @class */ (function () {
    function GetImportProgressRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.transactionId = null;
    }
    GetImportProgressRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetImportProgressRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetImportProgressRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetImportProgressRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetImportProgressRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetImportProgressRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetImportProgressRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    GetImportProgressRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetImportProgressRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetImportProgressRequest.fromDict = function (data) {
        return new GetImportProgressRequest()
            .withTransactionId(data["transactionId"]);
    };
    GetImportProgressRequest.prototype.toDict = function () {
        return {
            "transactionId": this.getTransactionId(),
        };
    };
    return GetImportProgressRequest;
}());
exports.default = GetImportProgressRequest;
//# sourceMappingURL=GetImportProgressRequest.js.map