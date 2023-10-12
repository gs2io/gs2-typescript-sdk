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
var GetDumpUserDataRequest = /** @class */ (function () {
    function GetDumpUserDataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.transactionId = null;
    }
    GetDumpUserDataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetDumpUserDataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDumpUserDataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetDumpUserDataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetDumpUserDataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDumpUserDataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetDumpUserDataRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    GetDumpUserDataRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetDumpUserDataRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    GetDumpUserDataRequest.fromDict = function (data) {
        return new GetDumpUserDataRequest()
            .withTransactionId(data["transactionId"]);
    };
    GetDumpUserDataRequest.prototype.toDict = function () {
        return {
            "transactionId": this.getTransactionId(),
        };
    };
    return GetDumpUserDataRequest;
}());
exports.default = GetDumpUserDataRequest;
//# sourceMappingURL=GetDumpUserDataRequest.js.map