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
var GetImportErrorLogRequest = /** @class */ (function () {
    function GetImportErrorLogRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.transactionId = null;
        this.errorLogName = null;
    }
    GetImportErrorLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetImportErrorLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetImportErrorLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetImportErrorLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetImportErrorLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetImportErrorLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetImportErrorLogRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    GetImportErrorLogRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetImportErrorLogRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetImportErrorLogRequest.prototype.getErrorLogName = function () {
        return this.errorLogName;
    };
    GetImportErrorLogRequest.prototype.setErrorLogName = function (errorLogName) {
        this.errorLogName = errorLogName;
        return this;
    };
    GetImportErrorLogRequest.prototype.withErrorLogName = function (errorLogName) {
        this.errorLogName = errorLogName;
        return this;
    };
    GetImportErrorLogRequest.fromDict = function (data) {
        return new GetImportErrorLogRequest()
            .withTransactionId(data["transactionId"])
            .withErrorLogName(data["errorLogName"]);
    };
    GetImportErrorLogRequest.prototype.toDict = function () {
        return {
            "transactionId": this.getTransactionId(),
            "errorLogName": this.getErrorLogName(),
        };
    };
    return GetImportErrorLogRequest;
}());
exports.default = GetImportErrorLogRequest;
//# sourceMappingURL=GetImportErrorLogRequest.js.map